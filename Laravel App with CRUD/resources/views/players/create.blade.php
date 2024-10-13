@extends('layouts.layout')

@section('content')
<h1>Create Player</h1>

<form action="{{ route('players.store') }}" method="POST">
    @csrf
    <div>
        <label for="first_name">First Name</label>
        <input type="text" id="first_name" name="first_name" value="{{ old('first_name') }}" required>
        @if($errors->has('first_name'))
            <span>{{ $errors->first('first_name') }}</span>
        @endif
    </div>

    <div>
        <label for="last_name">Last Name</label>
        <input type="text" id="last_name" name="last_name" value="{{ old('last_name') }}" required>
        @if($errors->has('last_name'))
            <span>{{ $errors->first('last_name') }}</span>
        @endif
    </div>

    <div>
        <label for="description">Description</label>
        <textarea id="description" name="description">{{ old('description') }}</textarea>
    </div>

    <div>
        <label for="team_id">Team</label>
        <select id="team_id" name="team_id" required>
            @foreach($teams as $team)
                <option value="{{ $team->id }}" {{ old('team_id') == $team->id ? 'selected' : '' }}>
                    {{ $team->name }}
                </option>
            @endforeach
        </select>
        @if($errors->has('team_id'))
            <span>{{ $errors->first('team_id') }}</span>
        @endif
    </div>

    <div>
        <button type="submit">Create Player</button>
    </div>
</form>

<a href="{{ route('players.index') }}">Back to Players</a>
@endsection
