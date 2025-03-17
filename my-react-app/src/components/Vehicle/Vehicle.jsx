import PropTypes from "prop-types";
import { useState } from "react";
import { IoDocumentAttach } from "react-icons/io5";
import { GiScooter } from "react-icons/gi";
import { FaCarAlt, FaTaxi, FaTruck, FaTractor, FaCar } from "react-icons/fa";
import { MdElectricCar, MdCalendarMonth } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { FaCreativeCommonsZero } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import Dataform from "../Dataform/Dataform";
import Carousel from "../Carousel/Carousel";

const Instance = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  const loanTypes = [
    {
      icon: GiScooter,
      title: "Two-Wheeler Loan",
      description: "Financing for motorcycles, scooters, and e-bikes with flexible repayment terms.",
    },
    {
      icon: FaCarAlt,
      title: "New Car Loan",
      description: "Loan for purchasing brand-new cars, including electric vehicles (EVs).",
    },
    {
      icon: FaTaxi,
      title: "Resale Car Loan",
      description: "Financing for pre-owned cars with competitive interest rates.",
    },
    {
      icon: MdElectricCar,
      title: "Electric Vehicle Loan",
      description: "Specialized loans for eco-friendly electric vehicles.",
    },
    {
      icon: FaTruck,
      title: "Commercial Vehicle Loan",
      description: "Financing for business vehicles like trucks and vans.",
    },
    {
      icon: FaTractor,
      title: "Tractor Loan",
      description: "Loans for agricultural equipment with flexible terms.",
    },
  ];

  const benefits = [
    {
      icon: MdCalendarMonth,
      title: "Flexible Tenures",
      description: "Repayment options from 1 to 7 years to suit your budget.",
    },
    {
      icon: TbMoneybag,
      title: "High Funding",
      description: "Get up to 100% financing for selected models.",
    },
    {
      icon: FaCar,
      title: "Used Vehicles",
      description: "Competitive rates for quality pre-owned vehicles.",
    },
    {
      icon: BsGraphUp,
      title: "Better Rates",
      description: "Lower interest rates for good credit scores (750+).",
    },
    {
      icon: FaCreativeCommonsZero,
      title: "Zero Down Payment",
      description: "Special schemes with no upfront payment required.",
    },
    {
      icon: IoDocumentAttach,
      title: "Tax Benefits",
      description: "Claim interest as business expense for commercial vehicles.",
    },
  ];

  return (
    <div className="mb-16 bg-gradient-to-b from-sky-50 to-emerald-50">
      <div className="px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Hero Section */}
        <div className="mt-10 bg-[linear-gradient(to_right,#18390b,#c99a5b)] rounded-2xl p-8 text-white shadow-xl">
          <h1 className="text-2xl font-bold mb-4 sm:text-4xl sm:font-bold sm:mb-4 text-center">
            Vehicle Loan - Ab Har Safar Apna Hoga
          </h1>

        </div>

        {/* Main Content */}
        <div className="flex flex-wrap-reverse justify-center sm:flex sm:flex-wrap sm:justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-12 mt-8 w-full max-w-8xl">
            {/* Loan Description Section */}
            <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-white space-y-4">
              <h2 className="text-2xl font-bold text-emerald-800 flex items-center">
                <FaCar className="mr-2 text-emerald-600" />
                Vehicle Financing
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Get flexible financing solutions for new and pre-owned vehicles. Our loans cover cars, 
                bikes, commercial vehicles, and agricultural equipment with competitive interest rates 
                and repayment tenures up to 7 years. Enjoy quick approvals, high loan-to-value ratios, 
                and special schemes for electric vehicles.
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
                src="cargirl.png"
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
              <h2 className="text-2xl font-bold text-emerald-800 mb-6">Vehicle Loan Options</h2>
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
              <h2 className="text-2xl font-bold text-emerald-800 mb-6">Why Choose Our Vehicle Loans?</h2>
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
        {/* <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={handleModalToggle}
            className="bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white px-8 py-4 rounded-full shadow-lg font-bold transform transition-all hover:scale-105 active:scale-95"
            aria-label="Apply for vehicle loan"
          >
            Apply Now
          </button>
        </div> */}

        {/* Loan Form Modal */}
        {/* {isModalOpen && (
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
        )} */}
      </div>
      {isModalOpen && <Dataform onClose={handleModalToggle} />}
      <div className="py-10"><Carousel/></div>
    </div>
  );
};

Instance.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Instance;