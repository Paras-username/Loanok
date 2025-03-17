import PropTypes from "prop-types";
import { useState } from 'react';
import { RiBuilding2Line } from "react-icons/ri";
// import LoanForm from "../LoanForm/LoanForm";

import SliderB from "../SliderB/SliderB";

import Dataform from "../Dataform/Dataform";
import Carousel from "../Carousel/Carousel";

const BuisnessLoan = () => {

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
            Vyaapar Ki Lo Udaan, Safalta Ho Tumhara Pehchaan
            </h1>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-12 mt-12">
            {/* Loan Description Section */}
            <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-emerald-800 flex items-center mb-6">
                <RiBuilding2Line className="mr-2 text-emerald-600 text-3xl" />
                Business Loan
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
              A business loan is a financial product that provides funding to businesses for various purposes, such as expansion, working capital, equipment purchase, or operational costs. It can be secured (requiring collateral) or unsecured and is repaid with interest over a fixed tenure.


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
                src="businessmen.png"
                alt="Personal Loan Illustration"
                className="w-full max-w-xl lg:max-w-2xl h-auto rounded-2xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>

       {isModalOpen && <Dataform onClose={handleModalToggle} />}
      <SliderB />
     
      <div className="py-10"><Carousel/></div>
    </div>
  );
};

BuisnessLoan.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BuisnessLoan;