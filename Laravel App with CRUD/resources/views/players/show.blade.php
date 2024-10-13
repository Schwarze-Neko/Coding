@extends('layouts.layout')

@section('content')
<h1>{{ $player->first_name }} {{ $player->last_name }}</h1>
<p><strong>Description:</strong> {{ $player->description }}</p>
<p><strong>Team:</strong> <a href="{{ route('teams.show', $player->team->id) }}">{{ $player->team->name }}</a></p>
<a href="{{ route('players.index') }}">Back to Players</a>
@endsection
