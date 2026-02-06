import SimpleSEO from '@/components/seo/simple-seo';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Technical Interview Preparation Guide 2024',
    description: 'Complete 8-week study plan for technical interviews. Learn coding, system design, and behavioral interview strategies.',
  };
}

export default function InterviewPrepPage() {
  return (
    <>
      <SimpleSEO
        title="Technical Interview Preparation Guide 2024"
        description="Complete 8-week study plan for technical interviews. Learn coding, system design, and behavioral interview strategies."
        keywords={['technical interview', 'coding interview', 'system design', 'leetcode', 'interview prep']}
        url="/guides/technical-interview-prep"
        type="article"
        publishedTime="2024-01-10T00:00:00.000Z"
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-gray-600 hover:text-black">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/guides" className="text-gray-600 hover:text-black">Guides</Link>
          <span className="mx-2">/</span>
          <span className="text-black font-medium">Technical Interview Prep</span>
        </nav>

        <header className="mb-12 border-b pb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Interview Preparation Guide
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            8-week structured plan to prepare for coding, system design, and behavioral interviews.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded">8-week plan</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded">300+ problems</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded">FAANG focused</span>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          <main className="md:col-span-2">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-6">Study Plan Timeline</h2>
              <div className="space-y-6">
                {[
                  { weeks: 'Weeks 1-2', title: 'Data Structures', items: ['Arrays & Strings', 'Linked Lists', 'Trees & Graphs', 'Hash Tables'], color: 'blue' },
                  { weeks: 'Weeks 3-4', title: 'Algorithms', items: ['Sorting & Searching', 'Dynamic Programming', 'Recursion', 'Greedy Algorithms'], color: 'green' },
                  { weeks: 'Weeks 5-6', title: 'System Design', items: ['Scalability', 'Database Design', 'Caching', 'API Design'], color: 'purple' },
                  { weeks: 'Weeks 7-8', title: 'Mock Interviews', items: ['Practice Problems', 'Behavioral Questions', 'Timed Tests', 'Peer Reviews'], color: 'orange' }
                ].map((phase) => (
                  <div key={phase.weeks} className="border rounded p-5">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 bg-${phase.color}-100 text-${phase.color}-800 rounded flex items-center justify-center font-medium mr-4`}>
                        {phase.weeks.split('-')[0].replace('Weeks ', '')}
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{phase.weeks}: {phase.title}</h3>
                      </div>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {phase.items.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className={`w-2 h-2 bg-${phase.color}-600 rounded-full mr-3`}></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Common Interview Questions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3">Coding Problems</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      Two Sum variations
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      Merge Intervals
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      LRU Cache
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      Valid Parentheses
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-3">System Design</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      Design Twitter
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      Design URL Shortener
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      Design Uber backend
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      Design Netflix
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </main>

          <aside>
            <div className="bg-gray-50 p-6 rounded border mb-6">
              <h3 className="font-semibold mb-4">Daily Schedule</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Morning (2 hours)</span>
                    <span className="text-sm font-medium">New Concepts</span>
                  </div>
                  <div className="text-xs text-gray-600">Learn new data structures/algorithms</div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Afternoon (2 hours)</span>
                    <span className="text-sm font-medium">Practice</span>
                  </div>
                  <div className="text-xs text-gray-600">Solve problems on LeetCode</div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Evening (1 hour)</span>
                    <span className="text-sm font-medium">Review</span>
                  </div>
                  <div className="text-xs text-gray-600">Review mistakes and notes</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded border mb-6">
              <h3 className="font-semibold mb-4">Recommended Resources</h3>
              <ul className="space-y-3">
                <li>
                  <div className="font-medium">LeetCode</div>
                  <div className="text-sm text-gray-600">Top 150 Interview Questions</div>
                </li>
                <li>
                  <div className="font-medium">NeetCode 150</div>
                  <div className="text-sm text-gray-600">Video explanations</div>
                </li>
                <li>
                  <div className="font-medium">Grokking System Design</div>
                  <div className="text-sm text-gray-600">Design patterns</div>
                </li>
                <li>
                  <div className="font-medium">Pramp</div>
                  <div className="text-sm text-gray-600">Free mock interviews</div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded border">
              <h3 className="font-semibold mb-4">Success Rate</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">1-2 months prep</span>
                    <span className="text-sm font-medium">40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded h-2">
                    <div className="bg-yellow-600 h-2 rounded w-2/5"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">3-4 months prep</span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded h-2">
                    <div className="bg-green-600 h-2 rounded w-2/3"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">5-6 months prep</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded h-2">
                    <div className="bg-blue-600 h-2 rounded w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}