@extends('layouts.layout')

@section('content')
<h1>{{ $team->name }}</h1>
<p><strong>Short Name:</strong> {{ $team->short_name }}</p>
<p><strong>Description:</strong> {{ $team->description }}</p>
<h2>Players</h2>
<ul>
    @foreach($team->players as $player)
    <li><a href="{{ route('players.show', $player->id) }}">{{ $player->first_name }} {{ $player->last_name }}</a></li>
    @endforeach
</ul>
<a href="{{ route('teams.index') }}">Back to Teams</a>
@endsection
