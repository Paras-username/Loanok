import PropTypes from "prop-types";
import { useState } from "react";
// import { IoDocumentAttach } from "react-icons/io5";
// import { GiScooter } from "react-icons/gi";
// import { FaCarAlt, FaTaxi, FaTruck, FaTractor, FaCar } from "react-icons/fa";
// import { MdElectricCar, MdCalendarMonth } from "react-icons/md";
// import { TbMoneybag } from "react-icons/tb";
// import { FaCreativeCommonsZero } from "react-icons/fa";
// import { BsGraphUp } from "react-icons/bs";

import { GiGoldBar } from "react-icons/gi";
import { HiMiniShieldCheck } from "react-icons/hi2";
import { AiFillFileText } from "react-icons/ai";
import { PiClockClockwiseDuotone } from "react-icons/pi";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { LuRefreshCw } from "react-icons/lu";
// import { BiSolidZap } from "react-icons/bi";
import { RiDiscountPercentFill } from "react-icons/ri";
import { HiBadgeCheck } from "react-icons/hi";
import { BsShieldLockFill } from "react-icons/bs";
import { IoMdBriefcase } from "react-icons/io";
import Dataform from "../Dataform/Dataform";
import Carousel from "../Carousel/Carousel";
const Goldloan = () => {



  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const loanTypes = [
    {
      icon: HiMiniShieldCheck,
      title: "Secured & Affordable ",
      description: "Gold Loans are secured, making them cheaper than unsecured loans with lower interest rates. The lender holds gold as collateral, reducing risk and ensuring better terms.",
    },
    {
      icon: AiFillFileText,
      title: "Minimal Documentation",
      description: "Requires only ID proof, address proof, and photographs, with no need for credit score or income verification, making it accessible to a wide range of borrowers.",
    },
    {
      icon: HiMiniCurrencyRupee,
      title: "Additional Charges",
      description: "Includes processing fees, documentation charges, overdue penalties, foreclosure, and renewal fees, which vary among lenders and impact the overall repayment cost.",
    },
    {
      icon: PiClockClockwiseDuotone,
      title: "Quick Disbursal",
      description: "Loan is approved instantly after gold valuation, ensuring fast access to funds, making it an excellent option for urgent financial needs.",
    },
    {
      icon: TbAlertTriangleFilled,
      title: "Ideal for Emergencies",
      description: "With easy approval and flexible repayment, Gold Loans provide a quick financial solution without a credit check, offering instant liquidity in crisis situations.",
    },
    {
      icon: LuRefreshCw,
      title: "Flexible Repayment Options",
      description: " Borrowers can choose from multiple repayment methods, including bullet payments or EMI-based repayment, depending on their financial situation.",
    },
    
  ];

  const benefits = [
    {
      icon: RiDiscountPercentFill,
      title: "Low Interest Rates",
      description: "Enjoy lower rates than personal loans, as gold loans are secured and feasible.",
    },
    {
      icon: HiBadgeCheck,
      title: "No Credit Score Require",
      description: "Gold loans are granted on gold value, allowing individuals with low or no credit score.",
    },
    {
      icon: BsShieldLockFill,
      title: "Safe & Secure Storage",
      description: "Your gold remains protected in high-security, bank-grade vaults with insurance coverage.",
    },
    {
      icon: IoMdBriefcase,
      title: "Use for Any Purpose",
      description: " Utilize the loan for business, education, medical emergencies, or personal expenses.",
    }
  ];

  return (
    <div className="mb-16 bg-gradient-to-b from-sky-50 to-emerald-50">
      <div className="px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Hero Section */}
        <div className="mt-10 bg-[linear-gradient(to_right,#0054ad,#ffc0cb)] rounded-2xl p-8 text-white shadow-xl">
          <h1 className="text-2xl font-bold mb-4 sm:text-4xl sm:font-bold sm:mb-4 text-center">
            Gold Ho Jab Apna - Sapna Ho Sach Apna
          </h1>

        </div>

        {/* Main Content */}
        <div className="flex flex-wrap-reverse justify-center sm:flex sm:flex-wrap sm:justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-12 mt-8 w-full max-w-8xl">
            {/* Loan Description Section */}
            <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-white space-y-4">
              <h2 className="text-2xl font-bold text-emerald-800 flex items-center">
                <GiGoldBar className="mr-2 text-emerald-600" />
                Gold Loan
              </h2>
              <p className="text-gray-700 leading-relaxed">
              Unlock the power of your gold, get cash with ease!" Your gold is more than just jewelry—it’s your key to instant cash! With low interest rates and quick approvals, a Gold Loan helps you meet financial needs like business, education, or emergencies. Your gold stays safe as a bank locker, while you get instant funds with minimal paperwork. Simply pledge your gold and get cash hassle-free! With flexible repayment options, make your gold work for you and turn dreams into reality!
              </p>
              <button
                onClick={handleModalToggle}
                className="bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white px-5 py-2 rounded-full shadow-lg font-bold transform transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                Apply Now
              </button>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex justify-center">
              <img
                src="gold.png"
                alt="Vehicle Loan Illustration"
                className="max-w-full h-auto rounded-2xl shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Loan Types Section */}
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <div className="flex-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-white">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6">Gold Loans: A Smart Borrowing Choice</h2>
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
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-white">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6">Why Choose a Gold Loan?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-sky-100 p-3 rounded-lg mr-4">
                      <benefit.icon className="text-sky-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Apply Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={handleModalToggle}
            className="bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white px-8 py-4 rounded-full shadow-lg font-bold transform transition-all hover:scale-105 active:scale-95"
            aria-label="Apply for vehicle loan"
          >
            Apply Now
          </button>
        </div>

        {/* Loan Form Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-2xl w-full max-w-lg relative">
              <button
                onClick={handleModalToggle}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
              >
                &times;
              </button>
              
            </div>
          </div>
        )}
      </div>
      {isModalOpen && <Dataform onClose={handleModalToggle}/>}
      <div className="py-10"><Carousel/></div>
    </div>
  )
}
Goldloan.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Goldloan;