<form method="POST" action="{{ route('form.update', $formData->id) }}">
    @csrf
    @method('PUT')
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" value="{{ $formData->name }}">

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" value="{{ $formData->email }}">

    <label for="newsletter">Subscribe to newsletter:</label>
    <input type="checkbox" id="newsletter" name="newsletter" {{ $formData->newsletter ? 'checked' : '' }}>

    <button type="submit">Update</button>
</form>
