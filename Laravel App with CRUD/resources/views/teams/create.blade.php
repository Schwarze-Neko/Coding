@extends('layouts.layout')

@section('content')
<h1>Create Team</h1>

<form action="{{ route('teams.store') }}" method="POST">
    @csrf
    <div>
        <label for="name">Team Name</label>
        <input type="text" id="name" name="name" value="{{ old('name') }}" required>
        @if($errors->has('name'))
            <span>{{ $errors->first('name') }}</span>
        @endif
    </div>

    <div>
        <label for="short_name">Short Name</label>
        <input type="text" id="short_name" name="short_name" value="{{ old('short_name') }}" required>
        @if($errors->has('short_name'))
            <span>{{ $errors->first('short_name') }}</span>
        @endif
    </div>

    <div>
        <label for="description">Description</label>
        <textarea id="description" name="description">{{ old('description') }}</textarea>
    </div>

    <div>
        <button type="submit">Create Team</button>
    </div>
</form>

<a href="{{ route('teams.index') }}">Back to Teams</a>
@endsection
