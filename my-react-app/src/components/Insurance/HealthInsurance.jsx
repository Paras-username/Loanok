// import { GiTakeMyMoney } from "react-icons/gi";
import { useState } from "react";
import Dataform from "../Dataform/Dataform";

const HealthInsurance = () => {

    const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state
    
      const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen); // Toggle the modal visibility
      };
  return (
    <div className="bg-gradient-to-r from-[#f2efe4] to-[#e3dacb]
">
       <div className="pb-5 py-10">
              <div className="px-4 sm:px-6 md:px-8 lg:px-16">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-[#7c746e] to-[#7c746e] rounded-2xl p-6 text-white shadow-2xl">
                  <h1 className="text-white text-3xl sm:text-4xl font-bold mb-3 text-center ">
                  Bimari Ho Ya Iiaj Ka kharcha - Health Insurance Kare Suraksha
                  </h1>
                </div>

                <div className="bg-[#9b958d] transform transition duration-300 hover:scale-105 hover:shadow-xl mt-8 max-w-[740px] py-3 mr-auto text-center border rounded-2xl text-3xl sm:text-6xl text-white font-bold ">
                HEALTH INSURANCE
                </div>
      
                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-12 mt-12">
                  {/* Loan Description Section */}
                  <div className="flex-1 p-1 ">
                    
                    <p className="text-slate leading-relaxed mb-8">
                    Health insurance is a contract where an insurer covers medical expenses in
 exchange for regular premium payments, ensuring financial protection against
 rising healthcare costs. It helps cover expenses related to illness, injury, pregnancy,
 hospitalization, treatments, and preventive care, reducing out-of-pocket costs.
 Typically renewed annually, it makes quality healthcare more affordable and
 accessible. Many policies offer features like cashless hospitalization, critical illness
 cover, maternity benefits, and wellness programs. By safeguarding against
 unexpected medical expenses, health insurance promotes financial stability, timely
 care, and overall well-being.
                    </p>
                    <button
                      onClick={handleModalToggle}
                      className="bg-gradient-to-r from-[#4e3e2e] to-[#4e3e2e] text-white px-5 py-2 border rounded-full shadow-lg font-bold transform transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
                    >
                      Apply Now
                    </button>
                  </div>
      
                  {/* Image Section */}
                  <div className="flex-1 flex justify-center items-center">
                    <img
                      src="health.png"
                      alt="Personal Loan Illustration"
                      className="w-full max-w-xl lg:max-w-2xl h-auto rounded-2xl shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
      {isModalOpen && <Dataform onClose={handleModalToggle}/>}
    </div>
  )
}

export default HealthInsurance
