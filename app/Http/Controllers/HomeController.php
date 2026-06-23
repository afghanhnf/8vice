<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Client;
use App\Models\CaseStudy;
use App\Models\Insight;
use App\Models\BookReview;
use App\Models\Course;
use App\Models\Highlight;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'clients' => Client::all(),
            'caseStudies' => CaseStudy::all(),
            'insights' => Insight::all(),
            'bookReviews' => BookReview::all(),
            'courses' => Course::all(),
            'highlights' => Highlight::all(),
        ]);
    }
}
