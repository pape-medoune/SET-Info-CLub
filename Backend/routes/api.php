<?php

use App\Http\Controllers\Api\DocumentController;
use App\Http\Controllers\Api\EventController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('documents', DocumentController::class);
Route::apiResource('events', EventController::class);
