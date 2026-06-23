$pages = @("About", "Services", "Consultancy", "Training", "Insight", "Article", "CaseStudy", "SocialImpact", "Career", "Contact")

foreach ($page in $pages) {
    $content = @"
import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function $($page)() {
  return (
    <MainLayout>
      <Head title=`"8vice - $($page)`" />
      <section className=`"section section--white`">
        <div className=`"container`">
          <h1 className=`"t-h1`">$($page) Page</h1>
          <p className=`"t-body-lg`">This page has been mapped to React. Content from legacy_html needs to be transferred here.</p>
        </div>
      </section>
    </MainLayout>
  );
}
"@
    Set-Content -Path "resources/js/Pages/$($page).jsx" -Value $content
}

# Update routes
$routesContent = Get-Content "routes/web.php" -Raw
$newRoutes = @"
Route::get('/about', function () { return Inertia::render('About'); });
Route::get('/services', function () { return Inertia::render('Services'); });
Route::get('/consultancy', function () { return Inertia::render('Consultancy'); });
Route::get('/training', function () { return Inertia::render('Training'); });
Route::get('/insight', function () { return Inertia::render('Insight'); });
Route::get('/article', function () { return Inertia::render('Article'); });
Route::get('/case-study', function () { return Inertia::render('CaseStudy'); });
Route::get('/social-impact', function () { return Inertia::render('SocialImpact'); });
Route::get('/career', function () { return Inertia::render('Career'); });
Route::get('/contact', function () { return Inertia::render('Contact'); });
"@

# Insert new routes before require __DIR__.'/auth.php';
$routesContent = $routesContent -replace "(?s)(require __DIR__.'/auth.php';)", "`n$newRoutes`n`n`$1"
Set-Content "routes/web.php" $routesContent
