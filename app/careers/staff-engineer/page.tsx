import SimpleSEO from '@/components/seo/simple-seo';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Staff Engineer Career Guide 2024: Skills, Salary & Growth',
    description: 'Complete guide to becoming a Staff Engineer. Learn required skills, interview process, salary expectations, and career progression at top tech companies.',
  };
}

export default function StaffEngineerPage() {
  return (
    <>
      <SimpleSEO
        title="Staff Engineer Career Guide 2024: Skills, Salary & Growth"
        description="Complete guide to becoming a Staff Engineer. Learn required skills, interview process, salary expectations, and career progression at top tech companies."
        keywords={['staff engineer', 'senior engineer', 'tech lead', 'system design', 'engineering career']}
        url="/careers/staff-engineer"
        type="article"
        publishedTime="2024-01-01T00:00:00.000Z"
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-gray-600 hover:text-black">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/careers" className="text-gray-600 hover:text-black">Careers</Link>
          <span className="mx-2">/</span>
          <span className="text-black font-medium">Staff Engineer</span>
        </nav>

        <header className="mb-12 border-b pb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Staff Engineer Career Guide
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Senior technical leadership role with focus on system architecture and team mentorship.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded">8+ years experience</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded">$250K - $500K salary</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded">High demand</span>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          <main className="md:col-span-2">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Role Overview</h2>
              <p className="text-gray-700 mb-4">
                Staff Engineers are senior technical leaders responsible for system architecture, 
                technical strategy, and mentoring other engineers. They bridge the gap between 
                technical execution and organizational leadership.
              </p>
              <p className="text-gray-700">
                Unlike Engineering Managers, Staff Engineers remain hands-on with code while 
                guiding technical decisions that impact product direction and team productivity.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Key Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Design and review system architecture</li>
                <li>Set technical standards and best practices</li>
                <li>Mentor senior and junior engineers</li>
                <li>Make critical technical decisions</li>
                <li>Collaborate across teams and departments</li>
                <li>Drive technical strategy and innovation</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Required Skills</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3">Technical Skills</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      System Design & Architecture
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      Distributed Systems
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      Cloud Infrastructure
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      Performance Optimization
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Leadership Skills</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      Technical Strategy
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      Mentoring & Coaching
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      Stakeholder Management
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      Decision Making
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Interview Process</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-gray-300 pl-4 py-2">
                  <h3 className="font-medium">1. Technical Screening</h3>
                  <p className="text-gray-600 text-sm">Coding problems and system design basics</p>
                </div>
                <div className="border-l-4 border-gray-400 pl-4 py-2">
                  <h3 className="font-medium">2. System Design Round</h3>
                  <p className="text-gray-600 text-sm">Design scalable systems (Twitter, Uber, etc.)</p>
                </div>
                <div className="border-l-4 border-gray-500 pl-4 py-2">
                  <h3 className="font-medium">3. Architecture Discussion</h3>
                  <p className="text-gray-600 text-sm">Deep dive into past projects and decisions</p>
                </div>
                <div className="border-l-4 border-gray-600 pl-4 py-2">
                  <h3 className="font-medium">4. Behavioral & Leadership</h3>
                  <p className="text-gray-600 text-sm">Mentoring, conflict resolution, leadership</p>
                </div>
              </div>
            </section>
          </main>

          <aside>
            <div className="bg-gray-50 p-6 rounded border mb-6">
              <h3 className="font-semibold mb-4">Salary Range</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Base Salary</span>
                    <span className="font-medium">$180K - $250K</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded h-2">
                    <div className="bg-blue-600 h-2 rounded w-3/4"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Stock & Bonus</span>
                    <span className="font-medium">$70K - $250K</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded h-2">
                    <div className="bg-green-600 h-2 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded border mb-6">
              <h3 className="font-semibold mb-4">Top Hiring Companies</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/companies/amazon" className="flex items-center hover:text-blue-600">
                    <div className="w-8 h-8 bg-orange-100 text-orange-800 rounded flex items-center justify-center mr-3">A</div>
                    <div>
                      <div className="font-medium">Amazon</div>
                      <div className="text-sm text-gray-600">Workday Bench, AWS</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-red-100 text-red-800 rounded flex items-center justify-center mr-3">G</div>
                    <div>
                      <div className="font-medium">Google</div>
                      <div className="text-sm text-gray-600">L6+ Engineering</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded border">
              <h3 className="font-semibold mb-4">Career Path</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Senior Engineer</span>
                    <span className="text-sm font-medium">5-7 years</span>
                  </div>
                  <div className="text-xs text-gray-600">Team leadership, complex features</div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Staff Engineer</span>
                    <span className="text-sm font-medium">8-10 years</span>
                  </div>
                  <div className="text-xs text-gray-600">Cross-team impact, architecture</div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Principal Engineer</span>
                    <span className="text-sm font-medium">10+ years</span>
                  </div>
                  <div className="text-xs text-gray-600">Organization-wide strategy</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}