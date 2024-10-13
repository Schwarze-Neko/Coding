<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FormData;

class FormController extends Controller
{
    // Display the form
    public function create()
    {
        return view('form');
    }

    // Store form data
    public function store(Request $request)
    {
        $formData = new FormData;
        $formData->name = $request->input('name');
        $formData->email = $request->input('email');
        $formData->newsletter = $request->exists('newsletter');
        $formData->save();

        return view('form-success');
    }

    // Display all form data entries
    public function index()
    {
        $formData = FormData::all();
        return view('form-data.index', ['formData' => $formData]);
    }

    // Show a specific form data entry
    public function show($id)
    {
        $formData = FormData::findOrFail($id);
        return view('form-data.show', ['formData' => $formData]);
    }

    public function edit($id)
    {
        $formData = FormData::findOrFail($id);
        return view('form-data.edit', ['formData' => $formData]);
    }

    public function update(Request $request, $id)
    {
        $formData = FormData::findOrFail($id);
        $formData->name = $request->input('name');
        $formData->email = $request->input('email');
        $formData->newsletter = $request->exists('newsletter');
        $formData->save();

        return redirect()->route('form.index');
    }

    public function destroy($id)
    {
        $formData = FormData::findOrFail($id);
        $formData->delete();

        return redirect()->route('form.index');
    }
}
