<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Newsletter</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        @foreach($formData as $data)
        <tr>
            <td>{{ $data->name }}</td>
            <td>{{ $data->email }}</td>
            <td>{{ $data->newsletter ? 'Yes' : 'No' }}</td>
            <td>
                <a href="{{ route('form.show', $data->id) }}">View</a>
                <a href="{{ route('form.edit', $data->id) }}">Edit</a>
                <form action="{{ route('form.destroy', $data->id) }}" method="POST" style="display:inline;">
                    @csrf
                    @method('DELETE')
                    <button type="submit">Delete</button>
                </form>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>
