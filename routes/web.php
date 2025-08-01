<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Home\HomeController;

// Auth
Route::prefix('auth')->name('auth.')->group(function () 
{
    // Auth -> Login
    Route::prefix('login')->middleware('guest')->controller(LoginController::class)->name('login.')->group(function () 
    {
        Route::get('/', 'index')->name('index');
        Route::post('/', 'authenticate')->name('action');
    });

    // Auth -> Logout
    Route::post('/logout', [LogoutController::class, 'logout'])->middleware('auth')->name('logout'); 
});

// Home
Route::get('/', [HomeController::class, 'index'])->name('home');