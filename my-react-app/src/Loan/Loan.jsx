// import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from 'react';
import { GiTakeMyMoney } from "react-icons/gi";

// import LoanForm from "../components/LoanForm/LoanForm";

import Slider from "../components/Slider/Slider";

import Dataform from "../components/Dataform/Dataform";
import Carousel from "../components/Carousel/Carousel";

const Loan = () => {

  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen); // Toggle the modal visibility
  };

  return (
    <div className="mb-16">
      <div className="pb-5">
        <div className="px-4 sm:px-6 md:px-8 lg:px-16">
          {/* Hero Section */}
          <div className="mt-10 bg-gradient-to-r from-[#05378d] to-[#cf8136] rounded-2xl p-8 text-white shadow-2xl">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center ">
              Aapke Har Zaroorat Ka Hal – Personal Loan Turant Aur Saral!
            </h1>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-12 mt-12">
            {/* Loan Description Section */}
            <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-emerald-800 flex items-center mb-6">
                <GiTakeMyMoney className="mr-2 text-emerald-600 text-3xl" />
                Personal Loan
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
              A personal loan is an unsecured loan that provides quick funds without requiring collateral. It can be used for various expenses like medical emergencies, education, travel, or home renovations. Lenders approve loans based on credit score, income, and repayment capacity. Personal loans offer flexible tenure, but interest rates and fees vary. Comparing lenders helps in getting the best deal.
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
                src="purse.png"
                alt="Personal Loan Illustration"
                className="w-full max-w-xl lg:max-w-2xl h-auto rounded-2xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <Dataform onClose={handleModalToggle}/>}
      
      <Slider />
      <div className="py-10"><Carousel/></div>
    </div>
  );
};

Loan.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Loan;