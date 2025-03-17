const AboutUs = () => {
  return (
    <div className="p-4 sm:p-8">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-800">
          Helping You Reach <span className="text-green-700">Your Financial Goals</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Your Future - Funded Today
        </p>
      </div>

      {/* Introduction Section */}
      <div className="mt-12 px-4 sm:px-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to <span className="font-bold text-blue-800">LoanOK</span>: Simplifying Your Financial Journey
          </p>
          <p className="mt-6 text-base text-gray-700 leading-relaxed">
            At LoanOK, we are revolutionizing the loan application process to make it seamless, efficient, and customer-focused. By partnering with a trusted network of banks and financial institutions, we bring you a diverse range of loan options tailored to your needs. Whether it’s a personal loan for unexpected expenses, a home loan to fulfill your dream of owning a house, a business loan to fuel your entrepreneurial aspirations, or an education loan to invest in your future, we’ve got you covered. Our competitive interest rates and customized financial solutions ensure that you get the best deals while maintaining transparency and quality.
          </p>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-700">
          Our Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            {
              icon: "/Innovation.png",
              title: "Innovation",
              description: "Ensuring faster loan approvals and improving features based on consumer feedback.",
            },
            {
              icon: "/trust1.png",
              title: "Trust",
              description: "Transparent loan terms with no hidden charges, supported by customer testimonials.",
            },
            {
              icon: "/Effi.png",
              title: "Efficiency",
              description: "Fast loan approvals, quick disbursals, and a simple application process.",
            },
            {
              icon: "/sheild.png",
              title: "Security",
              description: "Strong data protection and regular checks to keep customer information safe.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <img src={item.icon} alt={item.title} className="w-16 h-16 mx-auto" />
              <h3 className="mt-4 text-xl font-bold text-blue-800">{item.title}</h3>
              <p className="mt-2 text-gray-700 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Empowering Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800">
          Empowering Your Financial Journey
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Every Step Of The Way
        </p>
        <div className="mt-8 px-4 sm:px-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-base text-gray-700 leading-relaxed">
              LoanOK: Your Partner in Financial Success: When you choose LoanOK, you are choosing more than just a lending platform—you are choosing reliability, efficiency, and peace of mind. We are committed to supporting your financial aspirations by providing unmatched convenience and tailored solutions that cater to your unique needs. Whether you’re taking the first step toward achieving your dreams, like buying your first home or starting a business, or navigating unforeseen financial challenges, LoanOK is here to make it happen with ease and confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose LoanOK Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-700">
          Why Choose LoanOK?
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Transparent Terms", description: "No hidden fees or surprises! We provide clear, straightforward loan agreements for complete peace of mind." },
            { title: "Flexible Loan Options", description: "Choose from a variety of loan types and repayment plans tailored to your unique financial needs." },
            { title: "Secure and Confidential", description: "Your data is safe with us. We use advanced encryption to protect your information." },
            { title: "High Approval Rate", description: "Our customer-centric policies ensure a higher chance of approval, even for first-time borrowers." },
            { title: "Trusted Partner Network", description: "Collaborating with leading banks and financial institutions ensures the best options for you." },
            { title: "Empowering Financial Growth", description: "Beyond lending, we’re here to help you achieve your financial goals through strategic support." },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-blue-800">{item.title}</h3>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;