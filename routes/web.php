<?php

use App\Http\Controllers\ProfileController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use function Pest\Laravel\getConnection;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::get('/users', function () {
    $users = User::paginate(10)->through(fn ($user) => [
        'name' => $user->name,
        'email' => $user->email,
    ]);

    return Inertia::render('Users', [
        'users' => $users,
    ]);
});

Route::get('/api/users', function () {
    $users = User::query()
        ->when(request('search'), fn ($query, $search) => $query->where('name', 'like', "%{$search}%"))
        ->paginate(10);
    $users = getConnection()->through(fn ($user) => [
        'name' => $user->name,
        'email' => $user->email,

    ]);

    return response()->json($users);
});

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/settings', function () {
    return Inertia::render('Settings');
});

Route::get('/logout', function () {
    dd('Logging the user out');
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
