<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;

// Auth -> Login
Route::prefix('auth')->middleware('guest')->controller(LoginController::class)->group(function () 
{
    Route::get('/login', 'login')->name('index');
    Route::post('/login', 'authenticate')->name('authenticate')->middleware('throttle:10,1');
    Route::post('/logout', 'logout')->name('logout');
});