import PropTypes from "prop-types";
// import LoanForm from "../LoanForm/LoanForm";
// import { FiShield } from "react-icons/fi";
import { FaBriefcase } from "react-icons/fa6";
import { useState } from 'react';
import { FaCalendarCheck } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaBuildingShield } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaFileAlt } from "react-icons/fa";
import { PiFileMagnifyingGlassFill } from "react-icons/pi"
import { FaCheckCircle } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { FaFlagCheckered } from "react-icons/fa6";
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
         <div className="mt-10 bg-[linear-gradient(to_right,#083e86,#ffde59)] rounded-2xl p-8 text-white shadow-xl flex justify-center text-center">
          <h1 className="text-2xl font-bold mb-4 sm:text-4xl sm:font-bold sm:mb-4">
          Karobar Bade, Sapne Saakaar – Corporate Loan Se Ho Aap Taiyaar!
          </h1>
        </div>
        

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Content Section */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                      <h2 className="text-2xl font-bold text-emerald-800 flex items-center mb-10">
                        <FaBriefcase className="mr-2 text-emerald-600 text-3xl" />
                        Corporate Loan
                      </h2>
                      <p className="text-gray-700 leading-relaxed mb-8">
                      A corporate loan  is designed to meet the financial needs of large businesses. Offered by banks, financial institutions, and NBFCs, these loans provide higher amounts than regular business loans. They can be used for purposes like expansion, infrastructure, working capital, or equipment financing. Typically secured with collateral, corporate loans offer flexible repayment terms, competitive interest rates, and customized solutions to fit the unique needs of businesses.
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
                        src="corpman.png"
                        alt="Personal Loan Illustration"
                        className="w-full max-w-xl lg:max-w-2xl h-auto rounded-2xl shadow-sm"
                      />
                    </div>
                  </div>

            {/* Loan Types Section */}
            <div className="bg-white p-8 mt-10 rounded-2xl shadow-sm border border-white">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6">Celebrate Love Without Financial Worries</h2>
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
            <div className="bg-white p-8 rounded-2xl mt-8 shadow-sm border border-white">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6">How Does a Corporate Loan Work?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <FaFileAlt className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Application</h3>
                    <p className="text-gray-600 text-sm mt-1">Businesses submit a loan application detailing their financial history, plans, and use of funds.

                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <PiFileMagnifyingGlassFill className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Underwriting</h3>
                    <p className="text-gray-600 text-sm mt-1">Lenders assess the borrower’s creditworthiness by evaluating financials, flow, collateral.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <FaCheckCircle className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Approval</h3>
                    <p className="text-gray-600 text-sm mt-1"> Based on the borrower’s financial health and risk profile, the lender approves the loan.

                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <FaMoneyBillTransfer className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Disbursement</h3>
                    <p className="text-gray-600 text-sm mt-1"> Funds are disbursed as a lump sum or in instalments based on the {"loan's"} purpose.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <FaWallet className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Repayment</h3>
                    <p className="text-gray-600 text-sm mt-1"> Borrowers repay the loan through instalments (principal + interest) as per the schedule.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <FaFlagCheckered className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Completion</h3>
                    <p className="text-gray-600 text-sm mt-1">Upon full repayment, the loan agreement concludes, and the borrower fulfills their obligations.</p>
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
    icon: FaCalendarCheck,
    title: "Term Loans",
    description: "Lump-sum loans repaid over a fixed tenure, ideal for long-term investments like expansion or assets."
  },
  {
    icon: FaCreditCard ,
    title: "Business Line of Credit",
    description: "Provides access to funds up to a maximum limit, with interest charged only on the amount utilized."
  },
  {
    icon: FaTools,
    title: "Equipment Loans",
    description: "Specifically for purchasing machinery or equipment, often using the equipment as collateral."
  },
  {
    icon: FaBuildingShield,
    title: "Commercial Mortgages",
    description: " Used to purchase or refinance business properties, with the property serving as collateral."
  },
  {
    icon: RiMoneyRupeeCircleFill,
    title: "Working Capital Loans",
    description: "Short-term loans to manage daily operational costs, providing quick liquidity for smooth cash flow."
  },
  {
    icon: FaShoppingCart,
    title: "Merchant Cash Advances",
    description: "Short-term funding repaid through a percentage of future sales proceeds."
  }
];

Instance.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Instance;