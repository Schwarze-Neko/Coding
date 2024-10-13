<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;


Route::get('/form', [FormController::class, 'create'])->name('form.create');

Route::post('/form', [FormController::class, 'store'])->name('form.store');
Route::get('/form-data', [FormController::class, 'index'])->name('form.index');


Route::get('/form-data/{id}', [FormController::class, 'show'])->name('form.show');


Route::get('/form-data/{id}/edit', [FormController::class, 'edit'])->name('form.edit');


Route::put('/form-data/{id}', [FormController::class, 'update'])->name('form.update');


Route::delete('/form-data/{id}', [FormController::class, 'destroy'])->name('form.destroy');
