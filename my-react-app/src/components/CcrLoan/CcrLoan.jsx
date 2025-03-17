import PropTypes from "prop-types";


import { useState } from 'react';
import { FaSyncAlt } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import { FaCreditCard } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { FaKeycdn } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";
import Dataform from "../Dataform/Dataform";
import Carousel from "../Carousel/Carousel";

const Instance = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="mb-16 bg-gradient-to-b from-sky-50 to-emerald-50">
      <div className="px-4 sm:px-6 md:px-8 lg:px-16">
         {/* Hero Section */}
         <div className="mt-10 bg-[linear-gradient(to_right,#6a0097,#ca0097)] rounded-2xl p-8 text-white shadow-xl flex justify-center text-center">
          <h1 className="text-2xl font-bold mb-4 sm:text-4xl sm:font-bold sm:mb-4">
          Credit Card Repayment loan - Pay Smart, Live Easy
          </h1>
        </div>
        

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Content Section */}

                    <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <h2 className="text-2xl font-bold text-emerald-800 flex items-center mb-10">
                                  <FaCreditCard className="mr-2 text-emerald-600 text-3xl" />
                                  Credit Card Repayment Loan
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-8">
                                A Credit Card Repayment Loan consolidates multiple card dues into one manageable payment at lower interest rates. Offered by banks, NBFCs, and fintech platforms, it features quick disbursal, flexible terms, and minimal paperwork. This loan eases financial stress, boosts credit scores with timely payments, and promotes financial stability.
                                </p>
                                <button
                                  onClick={handleModalToggle}
                                  className="bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white px-5 py-2 rounded-full shadow-lg font-bold transform transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
                                >
                                  Apply Now
                                </button>
                              </div>
                    
                              {/* Image Section */}
                              <div className="flex-1 flex justify-center items-center">
                                <img
                                  src="creditgirl.png"
                                  alt="Personal Loan Illustration"
                                  className="w-full max-w-xl lg:max-w-2xl h-auto rounded-2xl shadow-sm"
                                />
                              </div>
                            </div>
          

            {/* Loan Types Section */}
            <div className="bg-white p-8 mt-10 rounded-2xl shadow-sm border border-white">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6">Smart Ways to Repay Your Loan</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {loanTypes.map((type, index) => (
                  <div key={index} className="p-4 border rounded-xl hover:bg-emerald-50 transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <type.icon className="text-emerald-600 mr-2 text-xl" />
                      <h3 className="text-lg font-semibold text-gray-800">{type.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white mt-10 p-8 rounded-2xl shadow-sm border border-white">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6">Why Loan Repayment is Key to Financial Success</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <FaStar className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Boost Your Credit Score</h3>
                    <p className="text-gray-600 text-sm mt-1">Timely loan payments consistently improve your credit history and lender trust.

                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <FaBalanceScale className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Ease Your Financial Burden</h3>
                    <p className="text-gray-600 text-sm mt-1">Regular and timely loan payments gradually reduce overall debt and accumulated interest.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <FaKeycdn className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Secure Better Loan Deals</h3>
                    <p className="text-gray-600 text-sm mt-1">  A strong and stable credit record consistently leads to easier loan approvals and better offers.

                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <FaRocket className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Upgrade Your Borrowing Power</h3>
                    <p className="text-gray-600 text-sm mt-1">Consistent and disciplined repayments strengthen long-term financial health.</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
           {isModalOpen && <Dataform onClose={handleModalToggle} />}
           <div className="py-10"><Carousel/></div>
        </div>

      
        
    
  );
};

const loanTypes = [
  {
    icon: FaSyncAlt,
    title: "Debt Consolidation for Credit Cards",
    description: "Combine multiple credit card debts into one manageable loan with a lower interest rate, simplifying your repayments."
  },
  {
    icon: TbMoneybag ,
    title: "Provident Fund or Insurance Loans",
    description: "Use your savings or policies to settle outstanding debts, ensuring financial stability while easing your repayment burden."
  },
  {
    icon: FaCreditCard,
    title: "Credit Card EMIs",
    description: "Convert credit card dues into easy-to-manage EMIs, spreading the cost over time with lower interest rates and flexible terms."
  },
  {
    icon: FaUniversity,
    title: "Personal Loans for Repayment",
    description: "Use a personal loan to clear high-interest debts quickly, consolidating multiple dues into one affordable payment."
  }
];

Instance.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Instance;
