import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
const CareerPortal = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Initialize job data
  useEffect(() => {
    const jobData = [
      {
        id: 1,
        title: "Lead Collector Intern",
        company: "Loan OK Connect",
        department: "Sales & Marketing",
        location: "Shikshak Nagar, Kohka, Bhilai (Remote Work From Home)",
        description:
          "Collect potential leads from various online platforms and directories, verify and validate contact details, and collaborate with the marketing team to funnel quality leads.",
        timePosted: "Just now",
        applicants: 0,
        salary:
          "Performance Based (Starting unpaid, performance-based increment later)",
        experience: "Fresher",
        type: "Internship (3/6 months)",
        companySize: "Small-sized team",
        skills: [
          "Research",
          "Data Entry",
          "LinkedIn",
          "Google",
          "B2B platforms",
          "CRM",
        ],
        logo: "lead-collector-logo",
      },
      {
        id: 2,
        title: "Software Tester Intern",
        company: "Loan OK Connect",
        department: "Quality Assurance",
        location: "Shikshak Nagar, Kohka, Bhilai (Remote Work From Home)",
        description:
          "Test software/web/mobile applications, create test plans and test cases, and collaborate with developers to resolve issues.",
        timePosted: "Just now",
        applicants: 0,
        salary:
          "Performance Based (Starting unpaid, performance-based increment later)",
        experience: "Fresher",
        type: "Internship (3/6 months)",
        companySize: "Small-sized team",
        skills: [
          "Manual Testing",
          "Bug Reporting",
          "Jira",
          "Selenium",
          "Analytical Skills",
        ],
        logo: "tester-logo",
      },
      {
        id: 3,
        title: "Web Developer Intern",
        company: "Loan OK Connect",
        department: "Web Development",
        location: "Shikshak Nagar, Kohka, Bhilai (Remote Work From Home)",
        description:
          "Assist in developing and maintaining websites/web applications, work on front-end and back-end modules, and collaborate with design and content teams.",
        timePosted: "Just now",
        applicants: 0,
        salary:
          "Performance Based (Starting unpaid, performance-based increment later)",
        experience: "Fresher",
        type: "Internship (3/6 months)",
        companySize: "Small-sized team",
        skills: ["React", "Node.js", "Express.js", "React", "Node.js", "GitHub"],
        logo: "web-developer-logo",
      },
      {
        id: 4,
        title: "Graphic Designer Intern",
        company: "Loan OK Connect",
        department: "Design",
        location: "Shikshak Nagar, Kohka, Bhilai (Remote Work From Home)",
        description:
          "Create visuals for social media, website, and print materials, and collaborate with the marketing team for creative storytelling.",
        timePosted: "Just now",
        applicants: 0,
        salary:
          "Performance Based (Starting unpaid, performance-based increment later)",
        experience: "Fresher",
        type: "Internship (3/6 months)",
        companySize: "Small-sized team",
        skills: ["Canva", "Photoshop", "Illustrator", "Figma", "Creativity"],
        logo: "graphic-designer-logo",
      },
      {
        id: 5,
        title: "App Development Intern",
        company: "Loan OK Connect",
        department: "Mobile Development",
        location: "Shikshak Nagar, Kohka, Bhilai (Remote Work From Home)",
        description:
          "Assist in mobile app development, write clean code, and collaborate with UI/UX and backend teams.",
        timePosted: "Just now",
        applicants: 0,
        salary:
          "Performance Based (Starting unpaid, performance-based increment later)",
        experience: "Fresher",
        type: "Internship (3/6 months)",
        companySize: "Small-sized team",
        skills: [
          "Flutter",
          "React Native",
          "Java",
          "Kotlin",
          "Android Studio",
          "Xcode",
        ],
        logo: "app-developer-logo",
      },
      {
        id: 6,
        title: "Google Ads Campaign Intern",
        company: "Loan OK Connect",
        department: "Digital Marketing",
        location: "Shikshak Nagar, Kohka, Bhilai (Remote Work From Home)",
        description:
          "Assist in creating and managing Google Ads campaigns, do keyword research, and optimize for better ROI.",
        timePosted: "Just now",
        applicants: 0,
        salary:
          "Performance Based (Starting unpaid, performance-based increment later)",
        experience: "Fresher",
        type: "Internship (3/6 months)",
        companySize: "Small-sized team",
        skills: ["Google Ads", "SEM", "Analytics", "Excel", "Ad Copywriting"],
        logo: "google-ads-logo",
      },
      {
        id: 7,
        title: "Marketing Intern",
        company: "Loan OK Connect",
        department: "Marketing",
        location: "Shikshak Nagar, Kohka, Bhilai (Remote Work From Home)",
        description:
          "Support marketing campaigns, create presentations and emailers, and coordinate with content and design teams.",
        timePosted: "Just now",
        applicants: 0,
        salary:
          "Performance Based (Starting unpaid, performance-based increment later)",
        experience: "Fresher",
        type: "Internship (3/6 months)",
        companySize: "Small-sized team",
        skills: ["Communication", "Presentation", "Digital Marketing Basics"],
        logo: "marketing-logo",
      },
      {
        id: 8,
        title: "Sales Intern",
        company: "Loan OK Connect",
        department: "Sales",
        location: "Shikshak Nagar, Kohka, Bhilai (Remote Work From Home)",
        description:
          "Identify prospects, pitch products/services, and maintain sales CRM and follow-ups.",
        timePosted: "Just now",
        applicants: 0,
        salary:
          "Performance Based (Starting unpaid, performance-based increment later)",
        experience: "Fresher",
        type: "Internship (3/6 months)",
        companySize: "Small-sized team",
        skills: ["Sales", "CRM", "Presentation", "Communication"],
        logo: "sales-logo",
      },
      {
        id: 9,
        title: "Social Media Content Creator Intern",
        company: "Loan OK Connect",
        department: "Social Media",
        location: "Shikshak Nagar, Kohka, Bhilai (Remote Work From Home)",
        description:
          "Research and write engaging social media content, assist in planning calendars, and create creative formats.",
        timePosted: "Just now",
        applicants: 0,
        salary:
          "Performance Based (Starting unpaid, performance-based increment later)",
        experience: "Fresher",
        type: "Internship (3/6 months)",
        companySize: "Small-sized team",
        skills: ["Writing", "Creativity", "Social Media Trends", "SEO Basics"],
        logo: "social-content-logo",
      },
      {
        id: 10,
        title: "Social Media Handler Intern",
        company: "Loan OK Connect",
        department: "Social Media",
        location: "Shikshak Nagar, Kohka, Bhilai (Remote Work From Home)",
        description:
          "Manage daily posting, track analytics, and coordinate with content creators.",
        timePosted: "Just now",
        applicants: 0,
        salary:
          "Performance Based (Starting unpaid, performance-based increment later)",
        experience: "Fresher",
        type: "Internship (3/6 months)",
        companySize: "Small-sized team",
        skills: [
          "Instagram",
          "LinkedIn",
          "YouTube",
          "Analytics",
          "Engagement Tools",
        ],
        logo: "social-handler-logo",
      },
      {
        id: 11,
        title: "Business Development Intern",
        company: "Loan OK Connect",
        department: "Business Development",
        location: "Shikshak Nagar, Kohka, Bhilai (Remote Work From Home)",
        description:
          "Identify new business opportunities, assist in client onboarding, and support strategic planning.",
        timePosted: "Just now",
        applicants: 0,
        salary:
          "Performance Based (Starting unpaid, performance-based increment later)",
        experience: "Fresher",
        type: "Internship (3/6 months)",
        companySize: "Small-sized team",
        skills: [
          "Negotiation",
          "Client Handling",
          "Communication",
          "Problem-solving",
        ],
        logo: "business-dev-logo",
      },
      {
        id: 12,
        title: "Document Verification Intern",
        company: "Loan OK Connect",
        department: "Operations",
        location: "Shikshak Nagar, Kohka, Bhilai (Remote Work From Home)",
        description:
          "Verify documents, maintain records, and ensure confidentiality and data security.",
        timePosted: "Just now",
        applicants: 0,
        salary:
          "Performance Based (Starting unpaid, performance-based increment later)",
        experience: "Fresher",
        type: "Internship (3/6 months)",
        companySize: "Small-sized team",
        skills: [
          "Attention to Detail",
          "Data Entry",
          "MS Excel",
          "Confidentiality",
        ],
        logo: "document-verification-logo",
      },
      {
        id: 13,
        title: "Office Intern",
        company: "Loan OK Connect",
        department: "Administration",
        location: "Shikshak Nagar, Kohka, Bhilai (On-site)",
        description:
          "Assist with general administrative tasks, filing, and documentation support.",
        timePosted: "Just now",
        applicants: 0,
        salary:
          "Performance Based (Starting unpaid, performance-based increment later)",
        experience: "Fresher",
        type: "Internship (3/6 months)",
        companySize: "Small-sized team",
        skills: ["MS Office", "Organization", "Communication"],
        logo: "office-intern-logo",
      },
      {
        id: 14,
        title: "Operations Intern",
        company: "Loan OK Connect",
        department: "Operations",
        location: "Shikshak Nagar, Kohka, Bhilai (Remote Work From Home)",
        description:
          "Assist with daily business operations, logistics, task coordination, and process optimization.",
        timePosted: "Just now",
        applicants: 0,
        salary:
          "Performance Based (Starting unpaid, performance-based increment later)",
        experience: "Fresher",
        type: "Internship (3/6 months)",
        companySize: "Small-sized team",
        skills: ["Excel", "Operations", "Multitasking", "Analytical Mindset"],
        logo: "operations-logo",
      },
      {
        id: 15,
        title: "Digital Marketing Intern",
        company: "Loan OK Connect",
        department: "Digital Marketing",
        location: "Shikshak Nagar, Kohka, Bhilai (Remote Work From Home)",
        description:
          "Execute digital campaigns, SEO/SEM activities, and assist in performance tracking and optimization.",
        timePosted: "Just now",
        applicants: 0,
        salary:
          "Performance Based (Starting unpaid, performance-based increment later)",
        experience: "Fresher",
        type: "Internship (3/6 months)",
        companySize: "Small-sized team",
        skills: ["Digital Marketing", "SEO", "SEM", "Google Ads", "Analytics"],
        logo: "digital-marketing-logo",
      },
      {
        id: 16,
        title: "Content Creation Intern",
        company: "Loan OK Connect",
        department: "Content",
        location: "Shikshak Nagar, Kohka, Bhilai (Remote Work From Home)",
        description:
          "Research and write engaging articles, blogs, and social media content, collaborating with SEO and design teams.",
        timePosted: "Just now",
        applicants: 0,
        salary:
          "Performance Based (Starting unpaid, performance-based increment later)",
        experience: "Fresher",
        type: "Internship (3/6 months)",
        companySize: "Small-sized team",
        skills: ["Writing", "Creativity", "SEO", "Proofreading"],
        logo: "content-creation-logo",
      },
    ];

    setJobs(jobData);
    setFilteredJobs(jobData);
  }, []);

  // Filter jobs based on search criteria
  useEffect(() => {
    let results = jobs;

    if (searchTerm) {
      results = results.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.company.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedDepartment) {
      results = results.filter((job) => job.department === selectedDepartment);
    }

    if (selectedLocation) {
      results = results.filter((job) =>
        job.location.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }

    if (selectedExperience) {
      results = results.filter((job) => job.experience === selectedExperience);
    }

    setFilteredJobs(results);
  }, [
    searchTerm,
    selectedDepartment,
    selectedLocation,
    selectedExperience,
    jobs,
  ]);

  // Get unique departments and locations for dropdowns
  const departments = [...new Set(jobs.map((job) => job.department))];
  const locations = [...new Set(jobs.map((job) => job.location))];
  const experienceLevels = ["Entry Level", "Mid Level", "Senior Level"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image */}
      <div className="relative h-[50vh] min-h-[360px] max-h-[720px] w-full">
        {/* Background Image */}
        <div className="w-full h-[50vh] min-h-[360px] max-h-[720px] overflow-hidden">
          <img
            src="/boycareer.jpg"
            alt="Career Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Search Section - Overlayed on Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job title or keyword
              </label>
              <input
                type="text"
                placeholder="Search for jobs"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country or time zone
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="">All Locations</option>
                {locations.map((loc, index) => (
                  <option key={index} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end space-x-3">
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedLocation("");
                  setSelectedDepartment("");
                  setSelectedExperience("");
                }}
                className="h-[46px] px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Clear
              </button>
              <button className="h-[46px] flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-gray-900">Filters</h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="md:hidden text-blue-600 font-medium"
                >
                  {showFilters ? "Hide" : "Show"} Filters
                </button>
              </div>

              <div
                className={`${
                  showFilters ? "block" : "hidden"
                } md:block space-y-6`}
              >
                {/* Experience Level */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Experience Level
                  </h3>
                  <div className="space-y-2">
                    {experienceLevels.map((level, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          id={`experience-${index}`}
                          name="experience"
                          type="radio"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          checked={selectedExperience === level}
                          onChange={() => setSelectedExperience(level)}
                        />
                        <label
                          htmlFor={`experience-${index}`}
                          className="ml-3 text-sm text-gray-700"
                        >
                          {level}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Department */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Department
                  </h3>
                  <div className="space-y-2">
                    {departments.map((dept, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          id={`dept-${index}`}
                          name="department"
                          type="radio"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          checked={selectedDepartment === dept}
                          onChange={() => setSelectedDepartment(dept)}
                        />
                        <label
                          htmlFor={`dept-${index}`}
                          className="ml-3 text-sm text-gray-700"
                        >
                          {dept}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Job Type */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Job types
                  </h3>
                  <div className="space-y-2">
                    {["Internship"].map((type, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          id={`type-${index}`}
                          name="job-type"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label
                          htmlFor={`type-${index}`}
                          className="ml-3 text-sm text-gray-700"
                        >
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Salary */}
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-gray-900">
                Recommended jobs{" "}
                <span className="text-blue-600">{filteredJobs.length}</span>
              </h2>
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">Sort by:</span>
                <select className="border-none text-sm font-medium text-blue-600 focus:ring-0 bg-transparent">
                  <option>Last updated</option>
                  <option>Most relevant</option>
                  <option>Highest salary</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-shadow hover:shadow-lg"
                  >
                    <div className="p-6">
                      <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start">
                            <div className="border-2 rounded-xl w-16 h-16 overflow-hidden flex items-center justify-center">
                              <img
                                src="okok1.png"
                                alt="Your Logo"
                                className="w-full h-full object-contain"
                              />
                            </div>

                            <div className="ml-4 flex-1">
                              <h3 className="text-xl font-bold text-gray-900">
                                {job.title}
                              </h3>
                              <div className="flex flex-wrap items-center mt-1">
                                <span className="text-gray-700 font-medium">
                                  {job.company}
                                </span>
                                <span className="mx-2 text-gray-300 hidden sm:inline">
                                  •
                                </span>
                                <span className="text-gray-500 mt-1 sm:mt-0">
                                  {job.location}
                                </span>
                                <span className="mx-2 text-gray-300 hidden sm:inline">
                                  •
                                </span>
                                <span className="text-gray-500 mt-1 sm:mt-0">
                                  {job.timePosted}
                                </span>
                              </div>
                            </div>
                          </div>

                          <p className="mt-4 text-gray-700 line-clamp-2">
                            {job.description}
                          </p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {job.skills.slice(0, 3).map((skill, index) => (
                              <span
                                key={index}
                                className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                              >
                                {skill}
                              </span>
                            ))}
                            {job.skills.length > 3 && (
                              <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                                +{job.skills.length - 3} more
                              </span>
                            )}
                          </div>

                          <div className="mt-4 flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center">
                              <span>{job.type}</span>
                            </div>
                            <div className="flex items-center">
                              <span>{job.experience}</span>
                            </div>
                            <div className="flex items-center">
                              <span>{job.salary}</span>
                            </div>
                            <div className="flex items-center">
                              <span>{job.companySize}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end sm:items-start sm:flex-row gap-4 sm:gap-0">
                          <button className="text-black-500 hover:text-gray-700 sm:self-start">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                              ></path>
                            </svg>
                          </button>

                          <Link to="/careerform">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors sm:ml-4">
                              Apply now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-lg shadow-md p-12 text-center">
                  <svg
                    className="w-16 h-16 text-gray-400 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <h3 className="mt-6 text-xl font-medium text-gray-900">
                    No jobs found
                  </h3>
                  <p className="mt-2 text-gray-500">
                    We {"couldn't"} find any positions matching your criteria.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedLocation("");
                      setSelectedDepartment("");
                      setSelectedExperience("");
                    }}
                    className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPortal;
