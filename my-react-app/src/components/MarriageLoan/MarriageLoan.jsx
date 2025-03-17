import PropTypes from "prop-types";
import { useState } from 'react';
import { MdCalendarMonth } from "react-icons/md";
import { GiBigDiamondRing } from "react-icons/gi";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaPuzzlePiece } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaLock } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import { IoIosCalculator } from "react-icons/io";
import { FaCheckSquare } from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";
import { FaFileContract } from "react-icons/fa";
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
         <div className="mt-10 bg-[linear-gradient(to_right,#e29012,#00a8bf)] rounded-2xl p-8 text-white shadow-xl flex justify-center text-center">
          <h1 className="text-2xl font-bold mb-4 sm:text-4xl sm:font-bold sm:mb-4">
          Shaadi Ka Sapna, Ab Hoga Apna
          </h1>
        </div>
        

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 mt-8">

          {/* Content Section */}
           <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <h2 className="text-2xl font-bold text-emerald-800 flex items-center mb-10">
                                  <GiBigDiamondRing className="mr-2 text-emerald-600 text-3xl" />
                                  Marriage Loan
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-8">
                                A Marriage Loan is an unsecured personal loan designed to cover wedding expenses like venue, catering, attire, and decorations. No collateral is required, making it a hassle-free option to fund your dream wedding. Loan amounts and repayment terms are flexible, tailored to your financial profile, allowing you to focus on creating unforgettable memories without the stress.

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
                                  src="shaadi.png"
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
            <div className="bg-white p-8 mt-10 rounded-2xl shadow-sm border border-white">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6">Why Choose Us?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <MdCalendarMonth className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Your Wedding, Our Priority</h3>
                    <p className="text-gray-600 text-sm mt-1">Customized loans for your big day, from venue to destination. Quick approval, flexible repayment—celebrate stress-free.

                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <IoMdCheckmarkCircle className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Zero Stress Loan Process</h3>
                    <p className="text-gray-600 text-sm mt-1">A straightforward, hassle-free process designed for your convenience, peace of mind, quick approval, and easy disbursal.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <FaPuzzlePiece className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Tailored Financial Solutions</h3>
                    <p className="text-gray-600 text-sm mt-1"> Every loan is customized to suit your needs and goals, ensuring flexibility, affordability, and a smooth repayment experience.

                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <SlCalender className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Simple Repayment Plans</h3>
                    <p className="text-gray-600 text-sm mt-1">Every loan is customized to suit your needs and goals, ensuring flexibility, affordability, and a smooth repayment experience.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <FaLock className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Peace of Mind Financing</h3>
                    <p className="text-gray-600 text-sm mt-1"> Your privacy and security are our top priorities, ensuring a safe, smooth, and hassle-free loan experience every step of the way.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <IoDocument className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Easy Documentation</h3>
                    <p className="text-gray-600 text-sm mt-1">Minimal paperwork needed for a smoother, faster process, ensuring quick approval and hassle-free loan disbursal.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {isModalOpen && <Dataform onClose={handleModalToggle}/>}
          <div className="py-10"><Carousel/></div>
          
        </div>

      //   {/* Floating Apply Button */}
      //   <div className="fixed bottom-6 right-6 z-50">
      //     <button 
      //       onClick={handleModalToggle}
      //       className="bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white px-8 py-4 rounded-full shadow-lg font-bold transform transition-all hover:scale-105 active:scale-95"
      //     >
      //       Apply Now
      //     </button>
      //   </div>
      // </div>
    
  );
};

const loanTypes = [
  {
    icon: IoIosCalculator,
    title: "Estimate Loan Needs",
    description: "Calculate total wedding expenses and decide on the loan amount based on your repayment ability."
  },
  {
    icon: FaCheckSquare ,
    title: "Check Eligibility",
    description: "Ensure you meet the age (21–60 years), income, and employment criteria set by the lender."
  },
  {
    icon: FaFileContract,
    title: "Prepare Documents",
    description: "Gather identity, address, income proof, and optionally wedding-related documents."
  },
  {
    icon: IoDocumentsSharp,
    title: "Apply Online or Offline",
    description: "Submit your application through the lender’s website, app, or branch with your loan details."
  }
];

Instance.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Instance;
