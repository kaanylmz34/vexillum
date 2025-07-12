<?php

namespace App\Http\Requests\Auth;

use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class LoginRequest extends FormRequest
{
    /**
     * Kullanıcı yetkilendirme kontrolü.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Doğrulama kuralları.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => ['required', 'string', 'max:255'],
            'password' => ['required', 'string', 'max:255'],
        ];
    }

    /**
     * Giriş yapma aksiyonu.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function authenticate(): void
    {
        $this->ensureIsNotRateLimited();

        if (! Auth::attempt($this->only('email', 'password'), $this->boolean('remember'))) {
            RateLimiter::hit($this->throttleKey());

            throw ValidationException::withMessages([
                'email' => 'E-posta veya şifre hatalı.',
            ]);
        }

        RateLimiter::clear($this->throttleKey());
    }

    /**
     * Hız limiti kontrolü.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function ensureIsNotRateLimited(): void
    {
        if (! RateLimiter::tooManyAttempts($this->throttleKey(), 5)) {
            return;
        }

        event(new Lockout($this));

        $seconds = RateLimiter::availableIn($this->throttleKey());

        throw ValidationException::withMessages([
            'email' => __('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ]),
        ]);
    }

    /**
     * Hız limiti anahtarını döndür.
     */
    public function throttleKey(): string
    {
        return Str::transliterate(Str::lower($this->string('email')).'|'.$this->ip());
    }

    /**
     * Message'leri döndür.
     */
    public function messages(): array
    {
        return [
            'email.required' => 'E-posta alanı zorunludur.',
            'email.string' => 'E-posta alanı geçersiz.',
            'email.max' => 'E-posta alanı geçersiz.',
            'password.required' => 'Şifre alanı zorunludur.',
            'password.string' => 'Şifre alanı geçersiz.',
            'password.max' => 'Şifre alanı geçersiz.',
        ];
    }
}
