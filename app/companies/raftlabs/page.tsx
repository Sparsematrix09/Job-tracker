import SimpleSEO from '@/components/seo/simple-seo';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Raftlabs Careers & Internship Opportunities: Web Development Agency',
    description: 'Learn about Raftlabs company culture, internship requirements, project expectations for SDE interns, and career opportunities at this web development agency.',
    keywords: [
      'raftlabs',
      'raftlabs internship',
      'web development agency',
      'sde intern raftlabs',
      'raftlabs careers',
      'software development company',
      'internship projects',
      'web development jobs',
      'remote internships',
      'tech agency careers'
    ],
  };
}

export default function RaftlabsPage() {
  const seoProps = {
    title: 'Raftlabs Careers & Internship Opportunities: Web Development Agency',
    description: 'Learn about Raftlabs company culture, internship requirements, project expectations for SDE interns, and career opportunities at this web development agency.',
    keywords: [
      'raftlabs',
      'raftlabs internship',
      'web development agency',
      'sde intern raftlabs',
      'raftlabs careers',
      'software development company',
      'internship projects',
      'web development jobs',
      'remote internships',
      'tech agency careers'
    ],
    url: '/companies/raftlabs',
    type: 'website' as const,
  };

  return (
    <>
      <SimpleSEO {...seoProps} />

      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link> &gt; 
          <Link href="/companies" className="hover:text-blue-600 ml-2">Companies</Link> &gt; 
          <span className="ml-2 text-gray-900 font-medium">Raftlabs</span>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
              R
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Raftlabs Careers
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Web Development Agency • Remote • Project-Based Work
              </p>
            </div>
          </div>
          <p className="text-xl text-gray-700">
            Building digital solutions and offering internship opportunities for aspiring developers
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          <main className="md:col-span-2">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Opportunities</h2>
              
              <div className="space-y-4">
                <div className="p-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-xl mb-2">SDE Intern - Project Development</h3>
                      <p className="text-gray-700 mb-3">
                        Build a complete project as part of the internship application process. 
                        Focus on full-stack development with SEO requirements.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium">Next.js</span>
                        <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium">React</span>
                        <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium">SEO</span>
                        <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium">Full-Stack</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">Project-Based</div>
                      <div className="text-sm text-gray-600">Internship</div>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-xl mb-2">Frontend Developer</h3>
                      <p className="text-gray-700 mb-3">
                        Create responsive, user-friendly interfaces for client projects.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium">React</span>
                        <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium">TypeScript</span>
                        <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium">Tailwind</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">Full-time</div>
                      <div className="text-sm text-gray-600">Remote</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Internship Project Requirements</h2>
              <p className="text-gray-700 mb-6">
                Raftlabs requires candidates to build a project as part of the application process. 
                Here are the key requirements:
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-white border rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">1. Complete Full-Stack Application</h3>
                  <p className="text-gray-600">Build a functional web application with frontend and backend components</p>
                </div>
                
                <div className="p-4 bg-white border rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">2. SEO Optimization</h3>
                  <p className="text-gray-600">Implement proper SEO practices including meta tags, structured data, and performance optimization</p>
                </div>
                
                <div className="p-4 bg-white border rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">3. Clean Code & Documentation</h3>
                  <p className="text-gray-600">Write maintainable code with comments and proper documentation</p>
                </div>
                
                <div className="p-4 bg-white border rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">4. Deployment</h3>
                  <p className="text-gray-600">Deploy the application to a cloud platform (Vercel, Netlify, etc.)</p>
                </div>
                
                <div className="p-4 bg-white border rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">5. GitHub Repository</h3>
                  <p className="text-gray-600">Share source code with proper README and commit history</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Process</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Project Submission</h3>
                    <p className="text-gray-700">Build and submit a complete project meeting all requirements</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Technical Review</h3>
                    <p className="text-gray-700">Code review and technical assessment of your project</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Technical Interview</h3>
                    <p className="text-gray-700">Discussion about your project, technologies used, and problem-solving</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Final Decision</h3>
                    <p className="text-gray-700">Offer extended based on project quality and interview performance</p>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <aside className="space-y-6">
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="font-bold text-lg mb-4">Company Overview</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Type</span>
                  <span className="font-semibold">Web Development Agency</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Location</span>
                  <span className="font-semibold">Remote/India</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Focus</span>
                  <span className="font-semibold">Client Projects</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Tech Stack</span>
                  <span className="font-semibold">MERN, Next.js</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="font-bold text-lg mb-4">Skills Required for Interns</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Tailwind CSS</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Git</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">SEO</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Responsive Design</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="font-bold text-lg mb-4">Project Examples</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Job Application Tracker
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  E-commerce Platform
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Blog with CMS
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Portfolio Website
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg text-white">
              <h3 className="font-bold text-lg mb-4">Get Started</h3>
              <Link 
                href="/careers/sde-intern" 
                className="block p-3 bg-white/20 rounded-lg hover:bg-white/30 transition"
              >
                <h4 className="font-semibold">SDE Intern Guide</h4>
                <p className="text-sm text-white/90">Complete preparation roadmap</p>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}