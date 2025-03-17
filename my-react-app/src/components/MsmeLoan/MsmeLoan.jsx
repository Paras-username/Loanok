import PropTypes from "prop-types";

import { useState } from 'react';

import { TbMoneybag } from "react-icons/tb";
import { FaKeycdn } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";
import { FaFastForward } from "react-icons/fa";
import { LiaPercentageSolid } from "react-icons/lia";
import { RiRecycleFill } from "react-icons/ri";
import { BsBank } from "react-icons/bs";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { PiBuildingsFill } from "react-icons/pi";
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
         <div className="mt-10 bg-[linear-gradient(to_right,#02508f,#b9d1ff)] rounded-2xl p-8 text-white shadow-xl flex justify-center text-center">
          <h1 className="text-2xl font-bold mb-4 sm:text-4xl sm:font-bold sm:mb-4">
          Apna Sapna Ho Apna Business, MSME Dega Success Ka Witness
          </h1>
        </div>
        

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Content Section */}

          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <h2 className="text-2xl font-bold text-emerald-800 flex items-center mb-10">
                                  <PiBuildingsFill className="mr-2 text-emerald-600 text-3xl" />
                                  MSME Loan
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-8">
                                MSME loans support Micro, Small, and Medium Enterprises in India by providing essential funding for working capital, equipment, and expansion. With government-backed benefits like low interest rates and flexible repayment, they ensure affordable credit access, boosting growth and driving economic development.
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
                                  src="msmeboy.png"
                                  alt="Personal Loan Illustration"
                                  className="w-full max-w-xl lg:max-w-2xl h-auto rounded-2xl shadow-sm"
                                />
                              </div>
                            </div>
         

            {/* Loan Types Section */}
            <div className="bg-white p-8 mt-10 rounded-2xl shadow-sm border border-white">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6">Types of MSME Loans</h2>
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
              <h2 className="text-2xl font-bold text-emerald-800 mb-6">Benefits of MSME Loans</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <LiaPercentageSolid className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Affordable Rates</h3>
                    <p className="text-gray-600 text-sm mt-1">Lower rates due to government support, making loans more affordable than personal loans or traditional bank loans.

                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <RiRecycleFill className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Flexible Repayment</h3>
                    <p className="text-gray-600 text-sm mt-1">Customizable repayment plans to suit your {"business's"} cash flow, ensuring manageable monthly payments.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <FaKeycdn className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Higher Amounts</h3>
                    <p className="text-gray-600 text-sm mt-1">  Provides higher funding for significant business growth, expansion, and meeting large-scale operational needs.

                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <BsBank className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Government Subsidies</h3>
                    <p className="text-gray-600 text-sm mt-1">Interest subvention schemes reduce borrowing costs, making loans more accessible for small businesses.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <FaFastForward className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Quick Access to Capital</h3>
                    <p className="text-gray-600 text-sm mt-1">Fast loan approval and quick disbursal to meet urgent business needs, reducing delays in operations and boosting growth.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <FaRocket className="text-sky-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Encourages Growth</h3>
                    <p className="text-gray-600 text-sm mt-1"> Supports entrepreneurship, business innovation, and long-term development for sustainability and profitability.</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          {isModalOpen && <Dataform onClose={handleModalToggle}/>}
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
    icon: BsSuitcaseLgFill,
    title: "Working Capital Loans",
    description: "Funds for daily operational expenses like inventory, raw materials, wages, and utility bills."
  },
  {
    icon: TbMoneybag ,
    title: "Term Loans",
    description: "Long-term loans for capital investments like machinery, infrastructure, or technology upgrades."
  },
  {
    icon: FaRegCalendarAlt,
    title: "Startup Business Loans",
    description: "Tailored for new businesses with lenient terms, lower interest rates, and flexible repayment options."
  },
  {
    icon: BsBank2,
    title: "Government-Sponsored Loans",
    description: "Collateral-free loans under schemes like PMMY, CGTMSE, and Stand-Up India for MSME growth."
  },
  {
    icon: IoSettings,
    title: " Equipment Financing",
    description: "Loans for purchasing essential machinery, tools, vehicles, or specialized equipment."
  },
  {
    icon: BsGlobeCentralSouthAsia,
    title: "Export/Import Financing",
    description: " Loans for MSMEs involved in international trade, covering shipping, customs duties, and forex risks."
  }
];

Instance.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Instance;
