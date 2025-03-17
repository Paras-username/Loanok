import PropTypes from "prop-types";
import LoanForm from "../LoanForm/LoanForm";
import { FiShield } from "react-icons/fi";

import { useState } from 'react';
import { RiBankFill } from "react-icons/ri"; // Low-Interest Credit Cards
import { HiCurrencyRupee } from "react-icons/hi2"; // Personal Loans
import { FaRepeat } from "react-icons/fa6"; // Balance Transfer Cards
import { AiFillHome } from "react-icons/ai"; // Home Equity Line of Credit (HELOC)
import { FaClipboardList } from "react-icons/fa"; // Debt Management Plans
import { FaRegCreditCard } from "react-icons/fa"; // Debt Consolidation Loans
import { IoBarChartSharp } from "react-icons/io5";  // 📊 (Bar Chart)
import { LiaPercentageSolid } from "react-icons/lia";  // 💰 (Money with Wings)
import { PiChartLineUpLight } from "react-icons/pi";  // 📈 (Chart Increasing)
import { FaShieldAlt } from "react-icons/fa";  // 🛡️ (Shield)
import { GiMoneyStack } from "react-icons/gi";
import Dataform from "../Dataform/Dataform";
import Carousel from "../Carousel/Carousel";


const SectionContainer = ({ children, className = "" }) => (
  <div className={`bg-white p-8 rounded-2xl shadow-sm border border-white ${className}`}>
    {children}
  </div>
);

const BenefitItem = ({ icon: Icon, title, description }) => (
  <div className="flex items-start">
    <div className="bg-sky-100 p-3 rounded-lg mr-4">
      <Icon className="text-sky-600 text-xl" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </div>
  </div>
);

const LoanTypeItem = ({ icon: Icon, title, description }) => (
  <div className="p-4 border rounded-xl hover:bg-emerald-50 transition-all duration-300">
    <div className="flex items-center mb-2">
      <Icon className="text-emerald-600 mr-2 text-xl" />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const Instance = ({ name }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  

  return (
    <div className="mb-16 bg-gradient-to-b from-sky-50 to-emerald-50">
      <div className="px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Hero Section */}
        <div className="mt-10 bg-[linear-gradient(to_right,#2e0089,#84fffb)] rounded-2xl p-8 text-white shadow-xl text-center">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">
            Simplify Debt with Consolidation Loans
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 mt-8">

          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                      <h2 className="text-2xl font-bold text-emerald-800 flex items-center mb-10">
                        <GiMoneyStack className="mr-2 text-emerald-600 text-3xl" />
                        Debt Consolidation Loan
                      </h2>
                      <p className="text-gray-700 leading-relaxed mb-8">
                      Debt consolidation combines multiple debts into a single loan, simplifying repayment by reducing the number of payments and interest rates. It helps borrowers manage finances better, lower interest costs, and create a more manageable payment plan.
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
                        src="debtgirl.png"
                        alt="Personal Loan Illustration"
                        className="w-full max-w-xl lg:max-w-2xl h-auto rounded-2xl shadow-sm"
                      />
                    </div>
                  </div>
          
           
            

            <SectionContainer className="mt-10">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6">
                Ways to Consolidate Debt
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {loanTypes.map((type, index) => (
                  <LoanTypeItem key={`loan-type-${index}`} {...type} />
                ))}
              </div>
            </SectionContainer>

            <SectionContainer className="mt-10">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6">
              Advantages of Debt Consolidation
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <BenefitItem key={`benefit-${index}`} {...benefit} />
                ))}
              </div>
            </SectionContainer>
            
          </div>
          {isModalOpen && <Dataform onClose={handleModalToggle}/>}
          <div className="py-10"><Carousel/></div>
          
        </div>

       
    
  
  );
};

const loanTypes = [
  { icon: RiBankFill, title: "Low-Interest Credit Cards",
    description: "Transfer existing balances to credit cards with 0% intro rates for significant interest savings." },
  { icon: HiCurrencyRupee, title: "Personal Loans",
    description: "Pay off multiple outstanding debts with a single loan at a fixed lower interest rate." },
  { icon: FaRepeat, title: "Balance Transfer Cards",
    description: "Shift high-interest balances to lower-rate credit cards to reduce monthly financial burdens." },
  { icon: AiFillHome, title: "Home Equity Line of Credit (HELOC)",
    description: "Use home equity as collateral to consolidate debt with lower interest and potential tax benefits." },
  { icon: FaClipboardList, title: "Debt Management Plans",
    description: "Work with professional financial agencies to negotiate reduced interest rates and structured plans." },
  { icon: FaRegCreditCard, title: "Debt Consolidation Loans",
    description: "Combine multiple debts into a structured loan with fixed payments for better financial management." }
];

const benefits = [
  { icon: IoBarChartSharp, title: "Simplified Financial Management",
    description: "Merge multiple debts into one manageable payment, making budgeting easier and reducing overall financial stress." },
  { icon: LiaPercentageSolid, title: "Lower Interest Costs",
    description: "Consolidate high-interest debts into a single loan with lower rates, saving money on overall repayment over time." },
  { icon: PiChartLineUpLight, title: "Improved Credit Score",
    description: "Regular, timely payments on a consolidated loan help boost your credit score and enhance future borrowing options." },
  { icon: FaShieldAlt, title: "No Collateral Requirement",
    description: "Unsecured consolidation loans allow you to repay debt without risking personal assets or property as collateral." }
];
Instance.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Instance;