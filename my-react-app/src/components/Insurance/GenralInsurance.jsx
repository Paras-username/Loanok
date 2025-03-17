// import { GiTakeMyMoney } from "react-icons/gi";
import { useState } from "react";
import Dataform from "../Dataform/Dataform";

const GenralInsurance = () => {

    const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state
    
      const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen); // Toggle the modal visibility
      };
  return (
    <div className="bg-gradient-to-r from-[#f2efe4] to-[#e3dacb]">
       <div className="pb-5 py-10">
              <div className="px-4 sm:px-6 md:px-8 lg:px-16">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-[#7c746e] to-[#7c746e] rounded-2xl p-6 text-white shadow-2xl">
                  <h1 className=" text-white text-3xl sm:text-4xl font-bold mb-3 text-center ">
                  Aaj Hi Beema Karao - Apne Future Ko Secure Banao
                  </h1>
                </div>

                <div className="bg-[#9b958d] transform transition duration-300 hover:scale-105 hover:shadow-xl mt-8 max-w-[770px] py-3 mr-auto text-center border rounded-2xl text-3xl sm:text-6xl text-white font-bold ">
                GENERAL INSURANCE
                </div>
      
                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-12 mt-12">
                  {/* Loan Description Section */}
                  <div className="flex-1 p-1 ">
                    
                    <p className="text-slate leading-relaxed mb-8">
                    General insurance is a contract between a policyholder and an insurer that
 protects non-life assets like vehicles, homes, health, and travel from risks such as
 accidents, theft, fire, and natural disasters. It provides financial compensation for
 damages through policies like motor, health, fire, marine, and liability insurance,
 ensuring security against unforeseen losses and reducing financial burdens. Unlike
 life insurance, which covers human lives, general insurance focuses on tangible
 assets, offering peace of mind by mitigating financial risks associated with
 unexpected events.
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
                      src="general.png"
                      alt="Personal Loan Illustration"
                      className="w-full max-w-lg lg:max-w-2xl h-auto rounded-2xl shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
            {isModalOpen && <Dataform onClose={handleModalToggle}/>}
    </div>
  )
}

export default GenralInsurance
