<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Statistic;
use App\Models\Client;
use App\Models\CaseStudy;
use App\Models\IndustryCoverage;

class StatisticSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Statistic::truncate();
        
        $clientsCount = Client::count();
        $casesCount = CaseStudy::count();
        $industryCount = IndustryCoverage::count();

        $stats = [
            [
                'num' => '25+',
                'title' => 'Years Experience',
                'description' => 'Combined years of market entry experience',
            ],
            [
                'num' => ($clientsCount > 0 ? $clientsCount : 100) . '+',
                'title' => 'Clients Served',
                'description' => 'Trusted by businesses globally',
            ],
            [
                'num' => ($casesCount > 0 ? $casesCount : 50) . '+',
                'title' => 'Successful Entries',
                'description' => 'Proven track record in Indonesia',
            ],
            [
                'num' => ($industryCount > 0 ? $industryCount : 20) . '+',
                'title' => 'Industry Sectors',
                'description' => 'Deep expertise across sectors',
            ],
        ];

        foreach ($stats as $stat) {
            Statistic::create($stat);
        }
    }
}
