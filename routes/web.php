<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class, 'index']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/about', function () { return Inertia::render('About'); });
Route::get('/services', function () { return Inertia::render('Services'); });
Route::get('/consultancy', function () { return Inertia::render('Consultancy'); });
Route::get('/training', function () { return Inertia::render('Training'); });
Route::get('/insight', function () { return Inertia::render('Insight'); });
Route::get('/market-intelligence', function () { return Inertia::render('Insight'); });
Route::get('/article', function () { return Inertia::render('Article'); });
Route::get('/case-study', function () { return Inertia::render('CaseStudy'); });
Route::get('/social-impact', function () { return Inertia::render('SocialImpact'); });
Route::get('/career', function () { return Inertia::render('Career'); });
Route::get('/contact', function () { return Inertia::render('Contact'); });

require __DIR__.'/auth.php';

