import SimpleSEO from '@/components/seo/simple-seo';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'SDE Intern: How to Land Your First Tech Internship in 2024',
    description: 'Complete guide to securing a Software Development Engineer (SDE) internship. Learn application strategies, interview preparation, project requirements, and tips for success.',
    keywords: [
      'sde intern',
      'software engineering internship',
      'tech internship',
      'student jobs',
      'entry level programming',
      'internship interview',
      'college internships',
      'coding internship',
      'summer intern',
      'computer science internship'
    ],
  };
}

export default function SDEInternPage() {
  const seoProps = {
    title: 'SDE Intern: How to Land Your First Tech Internship in 2024',
    description: 'Complete guide to securing a Software Development Engineer (SDE) internship. Learn application strategies, interview preparation, project requirements, and tips for success.',
    keywords: [
      'sde intern',
      'software engineering internship',
      'tech internship',
      'student jobs',
      'entry level programming',
      'internship interview',
      'college internships',
      'coding internship',
      'summer intern',
      'computer science internship'
    ],
    url: '/careers/sde-intern',
    type: 'article' as const,
    publishedTime: '2024-01-15T00:00:00.000Z',
  };

  return (
    <>
      <SimpleSEO {...seoProps} />

      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link> &gt; 
          <Link href="/careers" className="hover:text-blue-600 ml-2">Careers</Link> &gt; 
          <span className="ml-2 text-gray-900 font-medium">SDE Intern</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            SDE Internship Guide 2024
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Your complete roadmap to securing a Software Development Engineer internship
          </p>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Stipend: $6K-$10K/month
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              For Students
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              Summer 2024
            </span>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          <main className="md:col-span-2">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What is an SDE Intern?</h2>
              <p className="text-gray-700 mb-4">
                A Software Development Engineer (SDE) Intern works alongside full-time engineers 
                on real projects, contributing code, attending team meetings, and experiencing 
                the software development lifecycle firsthand.
              </p>
              <p className="text-gray-700">
                Top companies like Raftlabs, Amazon, Google, and Microsoft offer SDE internships 
                that can lead to full-time return offers and are essential for building your 
                professional network and portfolio.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Timeline</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold mr-4">
                    Aug
                  </div>
                  <div>
                    <h3 className="font-semibold">August - October</h3>
                    <p className="text-gray-600">Prepare resume, practice coding, build projects</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 text-green-800 rounded-full flex items-center justify-center font-bold mr-4">
                    Nov
                  </div>
                  <div>
                    <h3 className="font-semibold">November - January</h3>
                    <p className="text-gray-600">Apply to internships, attend career fairs</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-100 text-yellow-800 rounded-full flex items-center justify-center font-bold mr-4">
                    Feb
                  </div>
                  <div>
                    <h3 className="font-semibold">February - April</h3>
                    <p className="text-gray-600">Interviews, technical assessments</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 text-purple-800 rounded-full flex items-center justify-center font-bold mr-4">
                    May
                  </div>
                  <div>
                    <h3 className="font-semibold">May - August</h3>
                    <p className="text-gray-600">Internship period</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Required Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Technical Skills</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Data Structures & Algorithms</li>
                    <li>Programming Language (Java/Python/JavaScript)</li>
                    <li>Version Control (Git)</li>
                    <li>Basic Web Development</li>
                    <li>Problem Solving</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Soft Skills</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Communication</li>
                    <li>Teamwork</li>
                    <li>Time Management</li>
                    <li>Learning Agility</li>
                    <li>Professionalism</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Interview Preparation</h2>
              <div className="space-y-4">
                <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                  <h3 className="font-semibold text-lg">1. Online Assessment (OA)</h3>
                  <p className="text-gray-700">1-2 coding problems, 60-90 minutes, LeetCode easy/medium</p>
                </div>
                <div className="p-4 border-l-4 border-green-500 bg-green-50">
                  <h3 className="font-semibold text-lg">2. Technical Phone Screen</h3>
                  <p className="text-gray-700">Basic algorithms, data structures, problem-solving</p>
                </div>
                <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
                  <h3 className="font-semibold text-lg">3. Virtual On-site</h3>
                  <p className="text-gray-700">2-3 technical rounds, behavioral questions</p>
                </div>
                <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50">
                  <h3 className="font-semibold text-lg">4. Project Discussion</h3>
                  <p className="text-gray-700">Discuss your projects, technologies used, challenges</p>
                </div>
              </div>
            </section>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Project Requirements</h3>
              <p className="text-gray-700 mb-4">
                Many companies like Raftlabs require you to build a project as part of the application process.
                Here's what you need:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Complete full-stack application</li>
                <li>SEO optimization (as per requirements)</li>
                <li>Clean code and documentation</li>
                <li>Deployed and accessible online</li>
                <li>Source code on GitHub</li>
              </ul>
            </div>
          </main>

          <aside className="space-y-6">
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="font-bold text-lg mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Monthly Stipend</span>
                  <span className="font-semibold">$6K - $10K</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold">10-12 weeks</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Eligibility</span>
                  <span className="font-semibold">Bachelors/Masters</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Return Offer Rate</span>
                  <span className="font-semibold text-green-600">60-80%</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="font-bold text-lg mb-4">Top Companies Hiring</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <Link href="/companies/raftlabs" className="hover:text-blue-600">Raftlabs</Link>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <Link href="/companies/amazon" className="hover:text-blue-600">Amazon</Link>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  Google
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Microsoft
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li className="text-sm">• LeetCode (Top 100 Easy/Medium)</li>
                <li className="text-sm">• NeetCode 150</li>
                <li className="text-sm">• GitHub Student Pack</li>
                <li className="text-sm">• Cracking the Coding Interview</li>
                <li className="text-sm">• Glassdoor Interview Questions</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}