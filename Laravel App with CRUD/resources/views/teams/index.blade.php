@extends('layouts.layout')

@section('content')
<h1>Teams</h1>
<a href="{{ route('teams.create') }}">Create Team</a>
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Short Name</th>
            <th>Name</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        @foreach($teams as $team)
        <tr>
            <td>{{ $team->id }}</td>
            <td><a href="{{ route('teams.show', $team->id) }}">{{ $team->short_name }}</a></td>
            <td>{{ $team->name }}</td>
            <td>
                <a href="{{ route('teams.edit', $team->id) }}">Edit</a>
                <form action="{{ route('teams.destroy', $team->id) }}" method="POST" style="display:inline;">
                    @csrf
                    @method('DELETE')
                    <button type="submit">Delete</button>
                </form>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>
<a href="/">Back to Home</a>
@endsection
