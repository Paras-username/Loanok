import  { useState, useEffect } from 'react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState(null);

  // Blog categories
  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'loans', name: 'Loans' },
    { id: 'investments', name: 'Investments' },
    { id: 'banking', name: 'Banking' },
    { id: 'tips', name: 'Financial Tips' },
    { id: 'credit', name: 'Credit' },
    { id: 'fintech', name: 'Fintech' }
  ];

  // Blog data with full content
  const blogPosts = [
    {
      id: 1,
    title: "Beat Inflation Like a Pro: Smart Money Moves to Survive the Rising Cost of Living",
    excerpt: "Combat rising costs and protect your financial future with these practical money-saving strategies during inflation.",
    content: [
      "The rising cost of living isn’t just a statistic—it’s a daily challenge impacting households, professionals, students, and business owners alike. As inflation drives up the prices of essentials, savings lose value, and fixed incomes become increasingly strained.",
      "In this comprehensive guide, you'll uncover the most effective, actionable strategies to protect your finances in a high-inflation environment. We explore how to tighten your financial foundation, manage expenses strategically, boost your earning potential, and preserve the long-term value of your money. Whether you're trying to make ends meet or looking to future-proof your wealth, this guide is your roadmap to navigating economic uncertainty with confidence and control.",

      "🛠 Step 1: Strengthen Your Financial Foundation",
      "✅ Monitor & Manage Cash Flow\nUnderstanding how your income is allocated is critical in inflationary periods. Creating a categorized breakdown of monthly spending helps reveal areas of overspending or misalignment.",
      "✅ Establish a Flexible Emergency Fund\nA dynamic emergency fund should be capable of absorbing unexpected increases in essential expenses. It ensures continuity and peace of mind in times of income disruption or sudden cost hikes.",
      "✅ Review Financial Agreements Regularly\nPeriodically revisit loan structures, financial obligations, and subscription commitments for recalibration based on market realities.",

      "💡 Step 2: Optimize Lifestyle and Spending Habits",
      "✅ Minimize Non-Essential Consumption\nFocus on needs over wants. Reassess recurring expenses and ensure alignment with long-term benefit.",
      "✅ Implement Budget-Conscious Routines\nPlan monthly expenditures around essentials and adopt smarter purchasing habits to save significantly over time.",
      "✅ Lower Utility and Household Overheads\nEvaluate daily operations such as energy usage and communication services. Sustainable patterns help lower long-term costs.",

      "📉 Step 3: Manage and Minimize Debt Obligations",
      "✅ Reduce High-Interest Debt Exposure\nDuring inflation, prioritize repayment of liabilities with high interest to safeguard cash flow.",
      "✅ Explore Refinancing or Restructuring Options\nNegotiate better terms to lower monthly burdens and free up capital for essentials or investments.",
      "✅ Maintain a Low-Credit-Risk Profile\nLimit borrowing and build a strong repayment history for future financial flexibility.",

      "📈 Step 4: Increase and Diversify Income Sources",
      "✅ Upskill for High-Value Roles\nInvest in new skills to access better-paying opportunities and increase resilience against job volatility.",
      "✅ Seek Supplementary Income Streams\nSide income helps offset rising costs and supports savings goals.",
      "✅ Maximize Existing Opportunities\nBoost your productivity and performance to unlock incentives or promotions within your current job.",

      "💹 Step 5: Safeguard and Grow Your Wealth",
      "✅ Prioritize Inflation-Resistant Investments\nInvest in assets that preserve purchasing power and help your money grow.",
      "✅ Maintain a Balanced Financial Portfolio\nSpread investments across diverse risk categories to stabilize returns.",
      "✅ Avoid Idle Capital\nRedirect unused funds from low-interest accounts into productive instruments for wealth preservation.",

      "🧠 Step 6: Cultivate a Smart Financial Mindset",
      "✅ Embrace Strategic Living\nAlign spending with values and goals to make more meaningful financial decisions.",
      "✅ Automate Positive Financial Behaviors\nAuto-schedule savings and repayments to stay consistent without emotional friction.",
      "✅ Stay Financially Informed\nUnderstanding inflation, taxation, and investment trends enables quicker and better decision-making.",

      "🤝 How Loan OK Connect Supports Your Financial Resilience",
      "Loan OK Connect is committed to empowering individuals and families during economic uncertainty. Our services help you stay in control and access credit responsibly.",
      "- Expert financial planning for navigating inflation\n- Tailored loan solutions with flexible repayment options\n- Debt consolidation and EMI management support\n- Resources for skill development and income growth\n- Personalized consultations to strengthen credit profiles",

      "💼 Loan OK Connect: Your partner in achieving long-term financial health—no matter the economy.",
      "👉 Visit www.loanok.in to learn more or apply today."
    ],

      category: 'loans',
      date: 'June 5, 2025',
      readTime: '5 min read',
      thumbnail: '/postnew1.png',
      author: "Michael Chen",
      authorRole: "Business Financing Expert"
    },
    {
      id: 2,
      title: "Understanding Home Loan Interest Rates in 2025",
      excerpt: "Current market trends show home loan rates stabilizing after last year's fluctuations. Learn how to secure the best rate...",
      content: [
        "Current market trends show home loan rates stabilizing after last year's fluctuations. To secure the best rate, start by improving your credit score, as even a 20-point increase can save thousands over the loan term.",
        "Consider different loan types - fixed-rate mortgages provide stability while adjustable-rate mortgages offer lower initial rates. Government-backed loans (FHA, VA, USDA) often have more flexible qualification requirements.",
        "Make a larger down payment to reduce your loan-to-value ratio, which often qualifies you for better rates. Shop around with multiple lenders and don't hesitate to negotiate. Remember that the lowest advertised rate isn't always the best deal - consider all fees and closing costs when comparing offers.",
        "In 2025, we're seeing these key trends:",
        "- Rates stabilizing between 6.2% and 6.8% for 30-year fixed mortgages",
        "- Increased popularity of 7/1 and 10/1 ARMs",
        "- More lenders offering digital mortgage experiences",
        "- Green energy incentives for eco-friendly homes",
        "Lock your rate at the right time by monitoring economic indicators like the Federal Reserve's actions, inflation reports, and employment data. Consider using a mortgage rate lock agreement for 60-90 days during your home search."
      ],
      category: 'loans',
      date: 'June 1, 2025',
      readTime: '6 min read',
      thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      author: "Sarah Johnson",
      authorRole: "Mortgage Analyst"
    },
    {
      id: 3,
      title: "Investment Strategies for Long-Term Growth",
      excerpt: "Building wealth requires a disciplined approach. Discover proven investment strategies that withstand market volatility...",
      content: [
        "Building wealth requires a disciplined approach. Proven investment strategies that withstand market volatility include dollar-cost averaging, diversification across asset classes, and a long-term perspective that ignores short-term market noise.",
        "Successful investors focus on fundamentals rather than chasing trends. This means analyzing company financials, understanding industry dynamics, and evaluating management quality before making investment decisions.",
        "Key principles for long-term growth:",
        "- Start early to benefit from compound interest",
        "- Maintain a diversified portfolio across geographies and sectors",
        "- Rebalance your portfolio annually",
        "- Keep investment costs low with index funds and ETFs",
        "The most successful investors stick to their strategy through market ups and downs. Emotional decisions often lead to buying high and selling low - the exact opposite of a profitable approach."
      ],
      category: 'investments',
      date: 'May 28, 2025',
      readTime: '8 min read',
      thumbnail: 'https://images.unsplash.com/photo-1468254095679-bbcba94a7066?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      author: "Robert Kim",
      authorRole: "Wealth Manager"
    },
    {
      id: 4,
      title: "Digital Banking Trends Transforming the Financial Industry",
      excerpt: "From AI-powered chatbots to blockchain security, explore the innovations reshaping how we manage our finances...",
      content: [
        "The financial industry is undergoing a digital revolution, with innovations like AI-powered chatbots, blockchain security, and open banking APIs reshaping how we manage our finances.",
        "AI is transforming customer service with chatbots that handle routine inquiries 24/7 while freeing human agents for complex issues. Machine learning algorithms detect fraudulent transactions in real-time, significantly reducing financial fraud.",
        "Key trends to watch:",
        "- Biometric authentication replacing passwords",
        "- Personalized financial advice through robo-advisors",
        "- Blockchain for secure cross-border payments",
        "- Embedded finance in non-financial platforms",
        "Open banking is creating new opportunities by allowing third-party developers to build applications around financial institutions. This leads to more personalized services but requires careful attention to data privacy and security regulations."
      ],
      category: 'banking',
      date: 'May 24, 2025',
      readTime: '4 min read',
      thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      author: "Amanda Lee",
      authorRole: "Fintech Analyst"
    },
    // Additional posts would follow the same pattern
  ];

  // Filter blog posts by category
  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  // Full post view component
  const FullPostView = () => (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <button
          onClick={() => setSelectedPost(null)}
          className="flex items-center text-blue-700 font-medium mb-8 hover:text-blue-900 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Blog
        </button>

        {/* Thumbnail */}
        <div className="h-96 rounded-xl overflow-hidden mb-8">
          <img
            src={selectedPost.thumbnail}
            alt={selectedPost.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex justify-between items-center mb-6">
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
            {selectedPost.category.charAt(0).toUpperCase() + selectedPost.category.slice(1)}
          </span>
          <span className="text-gray-500 text-sm">{selectedPost.date} · {selectedPost.readTime}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{selectedPost.title}</h1>

        <div className="prose max-w-none mb-10">
          {selectedPost.content.map((paragraph, index) => (
            <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
          ))}
        </div>

        <div className="flex items-center border-t border-gray-200 pt-6">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
          <div className="ml-4">
            <p className="font-semibold">{selectedPost.author}</p>
            <p className="text-sm text-gray-600">{selectedPost.authorRole}</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Featured post - first post in the array
  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {selectedPost && <FullPostView />}

      <div className>
        {/* Updated Hero Section with Image */}
        <div className="relative h-[50vh] min-h-[360px] max-h-[720px] w-full">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src="/blog3.jpg"
              alt="Financial Planning"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-5"></div>
        </div>
      </div>


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-blue-700 text-white shadow-lg'
                  : 'bg-white text-blue-900 hover:bg-blue-50 shadow'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-[#2b669b] p-12 flex flex-col justify-center text-white">
              <span className="bg-white bg-opacity-20 rounded-full px-4 py-1 text-sm w-fit mb-4">
                Featured Article
              </span>
              <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
              <p className="mb-6 text-blue-100">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <p className="font-semibold">{featuredPost.author}</p>
                  <p className="text-sm text-blue-200">{featuredPost.authorRole}</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <p className="text-gray-600 mb-4">
                {featuredPost.content[0]}
              </p>
              <p className="text-gray-600 mb-6">
                {featuredPost.content[1]}
              </p>
              <button
                onClick={() => setSelectedPost(featuredPost)}
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors w-fit"
              >
                Read Full Article
              </button>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              {/* Thumbnail Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                  </span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="text-blue-700 font-medium hover:text-blue-900 transition-colors"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-[#2b669b] rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Financial Insights</h3>
            <p className="mb-6 text-blue-100">
              Subscribe to our newsletter for the latest articles on loans, investments, and banking trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;