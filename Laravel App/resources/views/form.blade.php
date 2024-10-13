<form method="POST" action="{{ route('form.store') }}">
    @csrf
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">

    <label for="newsletter">Subscribe to newsletter:</label>
    <input type="checkbox" id="newsletter" name="newsletter">

    <button type="submit">Submit</button>
</form>
