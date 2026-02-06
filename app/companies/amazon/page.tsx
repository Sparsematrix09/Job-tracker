import SimpleSEO from '@/components/seo/simple-seo';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Amazon Engineering Careers: Interview Process & Job Opportunities',
    description: 'Complete guide to Amazon engineering jobs, interview process, leadership principles, and career opportunities for software engineers.',
  };
}

export default function AmazonPage() {
  return (
    <>
      <SimpleSEO
        title="Amazon Engineering Careers: Interview Process & Job Opportunities"
        description="Complete guide to Amazon engineering jobs, interview process, leadership principles, and career opportunities for software engineers."
        keywords={['amazon jobs', 'amazon interview', 'aws careers', 'faang', 'software engineer amazon']}
        url="/companies/amazon"
        type="article"
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-gray-600 hover:text-black">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/companies" className="text-gray-600 hover:text-black">Companies</Link>
          <span className="mx-2">/</span>
          <span className="text-black font-medium">Amazon</span>
        </nav>

        <header className="mb-12 border-b pb-8">
          <div className="flex items-center gap-6 mb-4">
            <div className="w-16 h-16 bg-orange-600 text-white rounded flex items-center justify-center text-2xl font-bold">
              A
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Amazon Engineering Careers
              </h1>
              <p className="text-gray-600 mt-2">Seattle, WA • Global • Since 1994</p>
            </div>
          </div>
          <p className="text-lg text-gray-700">
            One of the world's largest technology companies, offering diverse engineering roles 
            across e-commerce, AWS, Alexa, and more.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          <main className="md:col-span-2">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Engineering Roles</h2>
              <div className="space-y-4">
                <div className="border rounded p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lg mb-2">Staff Engineer</h3>
                      <p className="text-gray-600 mb-3">Workday Bench, AWS teams</p>
                      <div className="flex gap-2">
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded">System Design</span>
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded">Leadership</span>
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded">Architecture</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">$300K - $500K</div>
                      <div className="text-sm text-gray-600">Total Comp</div>
                    </div>
                  </div>
                </div>

                <div className="border rounded p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lg mb-2">SDE II/III</h3>
                      <p className="text-gray-600 mb-3">Various AWS service teams</p>
                      <div className="flex gap-2">
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded">Distributed Systems</span>
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded">Cloud</span>
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded">Scalability</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">$180K - $350K</div>
                      <div className="text-sm text-gray-600">Total Comp</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Interview Process</h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Online Assessment', desc: '2-3 coding problems, 90 minutes' },
                  { step: '2', title: 'Phone Screen', desc: 'Technical questions and behavioral' },
                  { step: '3', title: 'Virtual On-site', desc: '4-5 rounds including coding and design' },
                  { step: '4', title: 'System Design', desc: 'Design scalable systems' },
                  { step: '5', title: 'Bar Raiser', desc: 'Final round with senior engineer' }
                ].map((item) => (
                  <div key={item.step} className="flex items-start">
                    <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center font-medium mr-4">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Leadership Principles</h2>
              <p className="text-gray-700 mb-6">
                Amazon interviews evaluate candidates against 16 Leadership Principles. 
                Prepare STAR (Situation, Task, Action, Result) stories for each.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Customer Obsession',
                  'Ownership', 
                  'Invent and Simplify',
                  'Are Right, A Lot',
                  'Learn and Be Curious',
                  'Hire and Develop the Best'
                ].map((principle) => (
                  <div key={principle} className="border rounded p-3">
                    <div className="font-medium">{principle}</div>
                  </div>
                ))}
              </div>
            </section>
          </main>

          <aside>
            <div className="bg-gray-50 p-6 rounded border mb-6">
              <h3 className="font-semibold mb-4">Amazon Overview</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Founded</span>
                  <span className="font-medium">1994</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Headquarters</span>
                  <span className="font-medium">Seattle, WA</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Employees</span>
                  <span className="font-medium">1.5M+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">CEO</span>
                  <span className="font-medium">Andy Jassy</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded border mb-6">
              <h3 className="font-semibold mb-4">Salary by Level</h3>
              <div className="space-y-3">
                {[
                  { level: 'SDE I', salary: '$140K - $180K', width: '40%' },
                  { level: 'SDE II', salary: '$180K - $250K', width: '55%' },
                  { level: 'SDE III', salary: '$250K - $350K', width: '70%' },
                  { level: 'Principal', salary: '$350K - $600K+', width: '85%' }
                ].map((item) => (
                  <div key={item.level}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.level}</span>
                      <span className="font-medium">{item.salary}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded h-2">
                      <div className="bg-orange-600 h-2 rounded" style={{ width: item.width }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded border">
              <h3 className="font-semibold mb-4">Interview Resources</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  <Link href="/guides/technical-interview-prep" className="hover:text-blue-600">
                    Technical Interview Guide
                  </Link>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  <Link href="/careers/staff-engineer" className="hover:text-blue-600">
                    Staff Engineer Guide
                  </Link>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  <div>LeetCode Amazon tagged</div>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  <div>Leadership Principles examples</div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}