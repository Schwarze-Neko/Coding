<p>Name: {{ $formData->name }}</p>
<p>Email: {{ $formData->email }}</p>
<p>Newsletter: {{ $formData->newsletter ? 'Yes' : 'No' }}</p>
<a href="{{ route('form.index') }}">Back to List</a>
