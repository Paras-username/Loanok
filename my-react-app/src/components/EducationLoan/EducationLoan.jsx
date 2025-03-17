import PropTypes from "prop-types";



import { useState } from 'react';
import { FaGraduationCap } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai"; // Federal Student Loans
import { TbMoneybag } from "react-icons/tb"; // Direct Subsidized & Unsubsidized Loans
import { PiStudentBold } from "react-icons/pi"; // PLUS Loans for Graduate Students & Parents
import { BsBank } from "react-icons/bs"; // Private Student Loans

import { RiGlobalLine } from "react-icons/ri";

import { FaCalendarAlt } from "react-icons/fa";
import { FaAnglesUp } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
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
         <div className="mt-10 bg-[linear-gradient(to_right,#2e0089,#84fffb)] rounded-2xl p-8 text-white shadow-xl flex justify-center text-center">
          <h1 className="text-2xl font-bold mb-4 sm:text-4xl sm:font-bold sm:mb-4">
          Gyaan Ka Deep Jalao, Andhkaar Mitaao
          </h1>
        </div>
        

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Content Section */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <h2 className="text-2xl font-bold text-emerald-800 flex items-center mb-10">
                                  <FaGraduationCap className="mr-2 text-emerald-600 text-3xl" />
                                  Education Loan
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                Education loans help cover tuition, books, and living expenses, reducing students financial burden. Federal loans offer lower rates and flexible repayment, while private loans may have stricter terms. Deferred payments and a six-month grace period allow students to focus on studies and repay after employment, easing future debt.
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
                                  src="educationgirl.png"
                                  alt="Personal Loan Illustration"
                                  className="w-full max-w-xl lg:max-w-2xl h-auto rounded-2xl shadow-sm"
                                />
                              </div>
                            </div>

            {/* Loan Types Section */}
            <div className="bg-white p-8 mt-10 rounded-2xl shadow-sm border border-white">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6">Types Of Education Loan </h2>
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
                    <FaAnglesUp className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">High Loan Coverage</h3>
                    <p className="text-gray-600 text-sm mt-1"> Covers tuition fees, living expenses, books, and other educational costs.

                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <FaCalendarAlt className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Flexible Repayment</h3>
                    <p className="text-gray-600 text-sm mt-1">Easy repayment options with moratorium periods until course completion.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <RiGlobalLine className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Global Reach</h3>
                    <p className="text-gray-600 text-sm mt-1">  Loans available for studies in India and abroad at top universities.

                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <PiPhoneCallFill className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Dedicated Support</h3>
                    <p className="text-gray-600 text-sm mt-1">Expert guidance throughout the application and repayment process.</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
           {isModalOpen && <Dataform onClose={handleModalToggle} />}
           <div className="py-10"><Carousel/></div>
        </div>

    //     {/* Floating Apply Button */}
    //     <div className="fixed bottom-6 right-6 z-50">
    //       <button 
    //         onClick={handleModalToggle}
    //         className="bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white px-8 py-4 rounded-full shadow-lg font-bold transform transition-all hover:scale-105 active:scale-95"
    //       >
    //         Apply Now
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};



const loanTypes = [
  {
    icon: AiFillBank, // Replaced with AiFillBank
    title: "Federal Student Loans",
    description: "Federal loans offer low-interest rates and benefits like subsidized interest during enrollment. They cover tuition and other academic expenses, with easy eligibility via FAFSA. Options include Direct Subsidized, Unsubsidized, PLUS, and Consolidation Loans."
  },
  {
    icon: TbMoneybag, // Replaced with TbMoneybag
    title: "Direct Subsidized & Unsubsidized Loans",
    description: "Subsidized loans provide interest relief during school for those with financial need, while unsubsidized loans are available to all students but don’t offer interest subsidies."
  },
  {
    icon: PiStudentBold, // Replaced with PiStudentBold
    title: "PLUS Loans for Graduate Students & Parents",
    description: "Direct PLUS Loans help graduate students or parents of undergraduates with additional funding, subject to credit checks, ensuring flexible support for higher education costs."
  },
  {
    icon: BsBank, // Replaced with BsBank
    title: "Private Student Loans",
    description: "Offered by banks and credit unions, private loans come with higher interest rates and require a credit check. Funds are sent to schools first, with any extra distributed to the borrower for additional expenses."
  }
];

Instance.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Instance;
