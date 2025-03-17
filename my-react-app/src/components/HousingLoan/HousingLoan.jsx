import PropTypes from "prop-types";
import LoanForm from "../LoanForm/LoanForm";
import { useState } from 'react';
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { MdConstruction } from "react-icons/md";
import { TbHomeSpark } from "react-icons/tb";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdExtension } from "react-icons/md";
import { TbHome2 } from "react-icons/tb";
import { PiSealPercentFill, PiPhoneCallFill } from "react-icons/pi";
import { FaFastForward, FaAngleDoubleUp } from "react-icons/fa";
import Dataform from "../Dataform/Dataform";
import Carousel from "../Carousel/Carousel";

const LoanCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 border rounded-xl hover:bg-gradient-to-br from-sky-50 to-emerald-50 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer group relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-all"></div>
    <div className="flex items-center mb-4">
      <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-3 rounded-lg mr-4">
        <Icon className="text-white text-2xl" />
      </div>
      <h3 className="text-lg font-semibold">
        <span className="text-black">{title.split(" - ")[0]}</span>{" "}
        <span className="text-blue-600">- {title.split(" - ")[1]}</span>
      </h3>
    </div>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const BenefitCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-start p-6 border rounded-xl hover:bg-gradient-to-br from-sky-50 to-emerald-50 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer relative overflow-hidden">
    <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-3 rounded-lg mr-4">
      <Icon className="text-white text-2xl" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </div>
  </div>
);

const Instance = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

 const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="mb-16 bg-gradient-to-b from-sky-50 to-emerald-50 px-4 sm:px-6 md:px-8 lg:px-16">
      {/* Hero Section */}
      <div className="mt-10 bg-gradient-to-r from-blue-900 to-blue-600 rounded-2xl p-8 text-white shadow-2xl text-center transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-cover opacity-10"></div>
        <h1 className="text-2xl font-bold sm:text-4xl">Babumoshai, Ghar Bada Hona Chaheye - Home Loan Process Nahi</h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto mt-4">
          Get your dream home with our hassle-free home loan solutions.
        </p>
        <button 
          onClick={handleModalToggle} 
          className="mt-6 bg-gradient-to-r from-emerald-500 to-sky-500 text-white px-6 py-2 rounded-full shadow-lg font-bold transform hover:scale-105 transition-all"
        >
          Apply Now
        </button>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        <div className="flex-1 space-y-8">
          {/* Housing Loan Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center gap-12">
              {/* Text Content */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-emerald-800 flex items-center">
                  <SiHomeassistantcommunitystore className="mr-2 text-emerald-600 text-3xl" />
                  Housing Loan
                </h2>
                <p className="text-gray-700 leading-relaxed mt-4">
                  A home loan is a secured loan from banks or NBFCs to help individuals buy property, 
                  with the property as collateral. It offers significant funding, competitive rates, 
                  and long repayment terms. Borrowers repay through EMIs, and ownership is transferred 
                  once the loan is fully repaid. With rising property prices, home loans are popular 
                  in India, offering fixed, floating, or hybrid rate options based on borrower preferences.
                </p>
              </div>

              {/* Image Section */}
              <div className="flex-1 flex justify-center items-start">
                <img
                  src="housinggirl.png"
                  alt="Housing Loan Illustration"
                  className="w-full max-w-[500px] h-auto rounded-2xl shadow-sm object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Types of Home Loans */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-black">Types of Home Loans </span>
              <span className="text-blue-600">Based on Purpose</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {loanTypes.map((type, index) => (
                <LoanCard key={index} {...type} />
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <h2 className="text-2xl font-bold text-emerald-800 mb-6">Why Choose Us for Your Home Loan?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Apply Button */}
      {/* <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={toggleModal} 
          className="bg-gradient-to-r from-emerald-500 to-sky-500 text-white px-8 py-4 rounded-full shadow-lg font-bold transform hover:scale-105 flex items-center gap-2"
        >
          <PiPhoneCallFill className="text-xl" /> Apply Now
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
       {isModalOpen && <Dataform onClose={handleModalToggle}/>}
       <div className="py-10"><Carousel/></div>
    </div>
  );
};

const loanTypes = [
  { icon: BiSolidPurchaseTag, title: "Land Purchase Loan - Secure Your Ideal Plot", description: "A land purchase loan helps you acquire the perfect location for your dream home." },
  { icon: MdConstruction, title: "Home Construction Loan - Build Your Dream Home", description: "Financially support your construction project with low-interest rates." },
  { icon: TbHomeSpark, title: "Home Renovation Loan - Transform Your Space", description: "Update your living space with quick approvals and flexible repayment options." },
  { icon: FaMoneyBillTransfer, title: "Home Loan Balance Transfer - Switch and Save", description: "Transfer your home loan for lower interest rates and reduced EMIs." },
  { icon: MdExtension, title: "Home Extension Loan - Expand Your Home", description: "Add space to your home with an affordable home extension loan." },
  { icon: TbHome2, title: "Basic Home Loan - Your Dream Home, Made Easy", description: "Simplify homeownership with competitive rates and flexible repayment plans." },
];

const benefits = [
  { icon: PiSealPercentFill, title: "Quick Processing", description: "Fast approvals with minimal paperwork." },
  { icon: FaFastForward, title: "Low Interest Rates", description: "Competitive rates with affordable EMIs." },
  { icon: FaAngleDoubleUp, title: "High Loan Amount", description: "Substantial funding for your dream home." },
  { icon: PiPhoneCallFill, title: "Customer Support", description: "Personalized assistance at every step." },
];

Instance.propTypes = { name: PropTypes.string.isRequired };

export default Instance;