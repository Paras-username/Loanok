import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

import Dataform from "../components/Dataform/Dataform";

const Calculator = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);

 const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };



  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const [interest, setInterest] = useState(10);
  const [tenure, setTenure] = useState(0);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);

  // Calculate EMI and amortization schedule
  useEffect(() => {
    const calculateEmi = () => {
      if (!amount || !tenure || interest <= 0) return 0;

      const loanAmount = amount;
      const monthlyRate = interest / 100 / 12;
      const noOfMonths = tenure;

      if (monthlyRate === 0) return loanAmount / noOfMonths;

      const EMI =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, noOfMonths)) /
        (Math.pow(1 + monthlyRate, noOfMonths) - 1);

      return Number(EMI).toFixed(0);
    };

    const calculateAmortizationSchedule = (emiValue) => {
      const schedule = [];
      let remainingBalance = amount;

      for (let month = 1; month <= tenure; month++) {
        const interestPayment = (remainingBalance * interest) / 100 / 12;
        const principalPayment = emiValue - interestPayment;
        remainingBalance -= principalPayment;

        schedule.push({
          month,
          principalPayment: principalPayment.toFixed(0),
          interestPayment: interestPayment.toFixed(0),
          remainingBalance: remainingBalance.toFixed(0),
        });
      }

      return schedule;
    };

    const emiValue = calculateEmi();
    setEmi(emiValue);

    if (emiValue > 0 && tenure > 0) {
      const totalAmount = emiValue * tenure;
      const totalInterest = totalAmount - amount;
      setTotalAmount(totalAmount.toFixed(0));
      setTotalInterest(totalInterest.toFixed(0));

      const schedule = calculateAmortizationSchedule(emiValue);
      setAmortizationSchedule(schedule);
    } else {
      setTotalAmount(0);
      setTotalInterest(0);
      setAmortizationSchedule([]);
    }
  }, [amount, interest, tenure]);

  // Pie chart data
  const pieChartData = [
    { name: "Principal", value: parseFloat(amount) },
    { name: "Interest", value: parseFloat(totalInterest) },
  ];

  const COLORS = ["#3b82f6", "#10b981"]; // Blue for principal, Green for interest

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Heading Section */}
      <div className="text-center mb-20 py-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg shadow-inner">
        {/* Main Heading with Gradient Text */}
        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 mb-6 animate-fade-in-up">
          EMI Calculator
        </h1>

        {/* Subheading with Animated Icon */}
        <p className="text-2xl text-green-800 font-semibold mb-8 flex items-center justify-center space-x-3">
          <span className="inline-block animate-bounce"></span>
          <span className="inline-block transform hover:scale-105 transition-transform duration-300">
            Simplify Your Loan Planning
          </span>
          <span className="inline-block animate-bounce"></span>
        </p>

        {/* Description with Gradient Border */}
        <div className="max-w-2xl mx-auto p-1 bg-gradient-to-r from-blue-200 to-green-200 rounded-lg shadow-lg">
          <p className="text-gray-700 text-lg leading-relaxed bg-white p-6 rounded-lg">
            Calculate your monthly or yearly EMIs for personal, car, or home loans instantly with
            LoanOK’s flexible online calculator.
          </p>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Inputs */}
          <div className="space-y-8">
            {/* Loan Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount (₹)</label>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="Enter loan amount"
                  min="0"
                />
                <span className="absolute right-3 top-3 text-gray-400">₹</span>
              </div>
              <input
                type="range"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                min="0"
                max="1000000"
                step="1000"
                className="w-full mt-4 range-slider"
                style={{ accentColor: "#3b82f6" }}
              />
            </div>

            {/* Interest Rate */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (%)</label>
              <div className="relative">
                <input
                  type="number"
                  value={interest}
                  onChange={(e) => setInterest(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="Enter interest rate"
                  min="0"
                />
                <span className="absolute right-3 top-3 text-gray-400">%</span>
              </div>
              <input
                type="range"
                value={interest}
                onChange={(e) => setInterest(Number(e.target.value))}
                min="0"
                max="30"
                step="0.1"
                className="w-full mt-4 range-slider"
                style={{ accentColor: "#3b82f6" }}
              />
            </div>

            {/* Tenure */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tenure (Months)</label>
              <div className="relative">
                <input
                  type="number"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="Enter tenure"
                  min="0"
                />
                <span className="absolute right-3 top-3 text-gray-400">Months</span>
              </div>
              <input
                type="range"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                min="0"
                max="240"
                step="1"
                className="w-full mt-4 range-slider"
                style={{ accentColor: "#3b82f6" }}
              />
            </div>
          </div>

          {/* Right Side - Results */}
          <div className="space-y-8">
            {/* Monthly EMI */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-blue-800">Monthly EMI</h3>
              <p className="text-3xl font-bold text-blue-600 mt-2">₹{emi || 0}</p>
            </div>

            {/* Total Interest */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-green-800">Total Interest</h3>
              <p className="text-3xl font-bold text-green-600 mt-2">₹{totalInterest || 0}</p>
            </div>

            {/* Total Amount Payable */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-black-800">Total Amount Payable</h3>
              <p className="text-3xl font-bold text-black-600 mt-2">₹{totalAmount || 0}</p>
            </div>

            {/* Pie Chart */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Principal vs Interest</h3>
              <PieChart width={300} height={200}>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  key={`pie-${amount}-${totalInterest}`}
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>

            {/* Apply For Loan Button */}
            <button
              onClick={handleModalToggle}

              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
              Apply For Loan
            </button>
          </div>
        </div>
      </div>

      {/* Amortization Table */}
      {amortizationSchedule.length > 0 && (
        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Amortization Schedule</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Month
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Principal (₹)
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Interest (₹)
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Remaining Balance (₹)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {amortizationSchedule.map((row) => (
                  <tr key={row.month} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.month}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.principalPayment}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.interestPayment}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.remainingBalance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {/* Footer Section */}
      <div className="flex flex-col justify-center items-center mt-24 space-y-12 bg-gradient-to-br from-blue-50 to-gray-50 py-16">
        {/* Section Heading */}
        <div className="text-4xl font-bold text-blue-800 text-center p-4 rounded-lg bg-white shadow-lg transform hover:scale-105 transition-transform duration-300">
          What is EMI Calculator?
        </div>
        {/* Section Content */}
        <div className="text-lg max-w-4xl text-center bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <p className="text-gray-700 leading-relaxed">
            The LoanOK EMI Calculator is a powerful financial tool designed to make your loan planning
            effortless and precise. Whether {"you're"} exploring personal loans, home loans, car loans, or
            business loans, our EMI Calculator provides instant calculations of your Equated Monthly
            Instalments (EMIs) based on the loan amount, interest rate, and tenure. This intuitive tool
            empowers you to plan your finances effectively by giving you a clear understanding of your
            monthly commitments. With LoanOK’s EMI Calculator, you can confidently choose the best loan
            option that aligns with your budget and financial goals, ensuring a stress-free borrowing
            experience. Simplify your finances with LoanOK—Loans Simplified!
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-24 space-y-12 bg-gradient-to-br from-green-50 to-white py-16">
        {/* Section Heading */}
        <div className="text-4xl font-bold text-green-800 text-center p-4 rounded-lg bg-white shadow-lg transform hover:scale-105 transition-transform duration-300">
          How to Use LoanOK’s EMI Calculator?
        </div>
        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl px-4">
          {/* Step 1 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl text-blue-800 mb-4">1️⃣</div>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Select Loan Amount</h2>
            <p className="text-gray-700">
              Use the slider to choose the amount you wish to borrow. This is the starting point for calculating your monthly EMI.
            </p>
          </div>
          {/* Step 2 */}
          <div className="bg-green-50 p-6 rounded-lg shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl text-green-800 mb-4">2️⃣</div>
            <h2 className="text-2xl font-bold text-green-800 mb-4">Set the Interest Rate</h2>
            <p className="text-gray-700">
              Adjust the slider to input the applicable interest rate. This helps determine how much interest you’ll pay over the loan tenure.
            </p>
          </div>
          {/* Step 3 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl text-blue-800 mb-4">3️⃣</div>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Choose the Loan Tenure</h2>
            <p className="text-gray-700">
              Move the slider to select the repayment period. The tenure influences both your monthly EMI and total payable amount.
            </p>
          </div>
          {/* Step 4 */}
          <div className="bg-green-50 p-6 rounded-lg shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl text-green-800 mb-4">4️⃣</div>
            <h2 className="text-2xl font-bold text-green-800 mb-4">Get Instant Results</h2>
            <p className="text-gray-700">
              Click on “Calculate” to view your monthly EMI, total interest, and the overall amount payable in just seconds.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-24 space-y-12 bg-gradient-to-br from-blue-50 to-gray-50 py-16">
        {/* Section Heading */}
        <div className="text-4xl font-bold text-blue-800 text-center p-4 rounded-lg bg-white shadow-lg transform hover:scale-105 transition-transform duration-300">
          Key Features and Benefits of {"LoanOK's"} EMI Calculator
        </div>
        {/* Section Content */}
        <div className="text-lg max-w-4xl text-center bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <p className="text-gray-700 leading-relaxed">
            LoanOK simplifies your loan journey with an easy-to-use EMI calculator, providing
            instant and accurate results. Compare various loan options to find the best fit for your
            needs, with full transparency on principal and interest breakdowns. Plan your finances
            better by adjusting loan parameters and exploring different repayment scenarios.
            Whether it’s a home loan, personal loan, or car loan, LoanOK helps you make smarter
            decisions. Take control of your financial future and achieve your goals with confidence!
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center mt-24 px-6 space-y-6 md:space-y-0 md:space-x-6 bg-gradient-to-br from-green-50 to-white py-16">
        {/* Section 1 */}
        <div className="flex-1 text-center bg-blue-50 p-6 rounded-lg shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="text-4xl text-blue-800 mb-4">⚡</div>
          <h1 className="text-2xl font-bold text-blue-800 mb-4">Instant Results, Zero Hassle</h1>
          <p className="text-gray-700">
            <span className="font-semibold">Quick Calculations:</span> Get instant accurate EMI results based on your loan amount, interest rate, and tenure details.
          </p>
          <p className="mt-2 text-gray-700">
            <span className="font-semibold">Stress-Free Process:</span> No complicated steps—just enter your details and get the result instantly, saving time.
          </p>
        </div>

        {/* Section 2 */}
        <div className="flex-1 text-center bg-green-50 p-6 rounded-lg shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="text-4xl text-green-800 mb-4">📊</div>
          <h1 className="text-2xl font-bold text-green-800 mb-4">Plan Smarter, Borrow Better</h1>
          <p className="text-gray-700">
            <span className="font-semibold">Clear Financial Planning:</span> Visualize your monthly repayments to understand how they fit into your overall financial strategy.
          </p>
          <p className="mt-2 text-gray-700">
            <span className="font-semibold">Informed Decisions:</span> With precise EMI figures, you can evaluate loan options and make choices that align with your long-term goals.
          </p>
        </div>

        {/* Section 3 */}
        <div className="flex-1 text-center bg-blue-50 p-6 rounded-lg shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="text-4xl text-blue-800 mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-blue-800 mb-4">Transparency at Its Best</h1>
          <p className="text-gray-700">
            <span className="font-semibold">Detailed Breakdown:</span> View your EMI split into principal and interest, giving you a full understanding of your repayment structure.
          </p>
          <p className="mt-2 text-gray-700">
            <span className="font-semibold">No Hidden Surprises:</span> Understand how much of your payment is reducing the loan principal and how much goes toward the interest.
          </p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <Dataform onClose={handleModalToggle} />}
    </div>
  );
};

export default Calculator;