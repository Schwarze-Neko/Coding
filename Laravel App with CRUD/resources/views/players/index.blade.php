@extends('layouts.layout')

@section('content')
<h1>Players</h1>
<a href="{{ route('players.create') }}">Create Player</a>
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Team</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        @foreach($players as $player)
        <tr>
            <td>{{ $player->id }}</td>
            <td><a href="{{ route('players.show', $player->id) }}">{{ $player->last_name }}</a></td>
            <td>{{ $player->first_name }}</td>
            <td>{{ $player->team->short_name }}</td>
            <td>
                <a href="{{ route('players.edit', $player->id) }}">Edit</a>
                <form action="{{ route('players.destroy', $player->id) }}" method="POST" style="display:inline;">
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
