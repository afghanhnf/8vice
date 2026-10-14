<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Subscriber;
use App\Models\ContactMessage;
use App\Models\JobApplication;
use Illuminate\Support\Facades\Storage;

class FormController extends Controller
{
    /**
     * Honeypot check. If 'website_url' is filled, it's a bot.
     */
    private function checkHoneypot(Request $request)
    {
        if ($request->filled('website_url')) {
            abort(403, 'Spam detected.');
        }
    }

    public function subscribe(Request $request)
    {
        $this->checkHoneypot($request);

        $validated = $request->validate([
            'email' => 'required|email|max:255',
        ]);

        Subscriber::updateOrCreate(
            ['email' => $validated['email']],
            ['ip_address' => $request->ip()]
        );

        return back()->with('success', 'Successfully subscribed to the newsletter!');
    }

    public function contact(Request $request)
    {
        $this->checkHoneypot($request);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'company' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:50',
            'subject' => 'nullable|string|max:255',
            'message' => 'required|string',
        ]);

        ContactMessage::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'company' => $validated['company'] ?? null,
            'phone' => $validated['phone'] ?? null,
            'subject' => $validated['subject'] ?? 'Consultancy',
            'message' => $validated['message'],
            'ip_address' => $request->ip(),
        ]);

        return back()->with('success', 'Your message has been sent successfully. We will get back to you soon.');
    }

    public function trainingRequest(Request $request)
    {
        $this->checkHoneypot($request);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'company' => 'nullable|string|max:255',
            'email' => 'required|email|max:255',
            'learn' => 'required|string',
            'format' => 'required|in:onsite,hybrid,online',
        ]);

        ContactMessage::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'company' => $validated['company'] ?? null,
            'subject' => 'Training (' . ucfirst($validated['format']) . ')',
            'message' => $validated['learn'],
            'ip_address' => $request->ip(),
        ]);

        return back()->with('success', 'Your training request has been sent successfully.');
    }

    public function apply(Request $request)
    {
        $this->checkHoneypot($request);

        // Normalize linkedin URL if provided without protocol
        if ($request->filled('linkedin')) {
            $linkedin = trim($request->input('linkedin'));
            if ($linkedin !== '' && !preg_match('~^https?://~i', $linkedin)) {
                $request->merge(['linkedin' => 'https://' . $linkedin]);
            }
        }

        // Map "open", empty, or string title to null or valid ID
        $careerId = $request->input('career_id');
        if ($careerId === 'open' || $careerId === '' || $careerId === null) {
            $careerId = null;
        } elseif (!is_numeric($careerId)) {
            $matched = \App\Models\Career::where('title', 'LIKE', '%' . $careerId . '%')->first();
            $careerId = $matched ? $matched->id : null;
        }
        $request->merge(['career_id' => $careerId]);

        $validated = $request->validate([
            'career_id' => 'nullable|exists:careers,id',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'linkedin' => 'nullable|url|max:255',
            'cv' => 'required|file|mimes:pdf,doc,docx|max:5120', // Max 5MB
        ]);

        $cvPath = $request->file('cv')->store('cvs', 'public');

        JobApplication::create([
            'career_id' => $validated['career_id'],
            'name' => $validated['name'],
            'email' => $validated['email'],
            'linkedin' => $validated['linkedin'],
            'cv_path' => $cvPath,
            'ip_address' => $request->ip(),
        ]);

        return back()->with('success', 'Your application has been submitted successfully.');
    }
}
