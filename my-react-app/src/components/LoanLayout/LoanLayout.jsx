import { FiClock, FiDollarSign, FiBriefcase, FiHeart, FiShield, FiCheckCircle } from 'react-icons/fi';
import { RiHomeGearLine } from "react-icons/ri";
import { HiOutlineDocumentCurrencyRupee } from "react-icons/hi2";
import { FaShieldHalved } from "react-icons/fa6";
import { MdLockPerson } from "react-icons/md";
import { FaHandshake } from "react-icons/fa6";
import { BsFastForwardCircle } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { PiNotepadFill } from "react-icons/pi";
import { IoDocumentAttach } from "react-icons/io5";

const LoanLayout = () => {

    const loanTypes = [
      {
        icon: FiClock,
        title: "Short-Term Loans",
        description: "Quick, flexible loans for temporary needs with fast approval."
      },
      {
        icon: FiHeart,
        title: "Medical Emergency Loans",
        description: "Quick loans for urgent healthcare expenses and treatments."
      },
      {
        icon: FiBriefcase,
        title: "Salary-Linked Loans ",
        description: "Loans based on income, job stability, and quick approval."
      },
      {
        icon: FaShieldHalved,
        title: "Unsecured Personal Loans",
        description: "No collateral required, based on creditworthiness and stability."
      },
      {
        icon: HiOutlineDocumentCurrencyRupee,
        title: "Loans Against Securities",
        description: "Instant loans secured by stocks, bonds, mutual funds, and assets."
      },
      {
        icon: RiHomeGearLine,
        title: "Home Renovation Loans",
        description: "Loans for home improvements, repairs, and renovation projects."
      }
    ];

  return (
    <div className='pb-8'>

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
                  {/* Content Section */}
                  <div className="flex-1 space-y-8">
                    
        
                    {/* Loan Types Section */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-white">
                      <h2 className="text-2xl font-bold text-emerald-800 mb-6">Instant Loans for Every Need</h2>
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
                      <h2 className="text-2xl font-bold text-emerald-800 mb-6">Why Choose Us?</h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start">
                          <div className="bg-sky-100 p-3 rounded-lg mr-4">
                            <BsFastForwardCircle className="text-sky-600 text-xl" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800">Fast Approval</h3>
                            <p className="text-gray-600 text-sm mt-1">Get instant loan approval with minimal documentation and no long delays.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-sky-100 p-3 rounded-lg mr-4">
                            <FaHandshake className="text-sky-600 text-xl" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800">Trusted Partners</h3>
                            <p className="text-gray-600 text-sm mt-1">We collaborate with reliable banks and financial institutions for secure transactions.</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-sky-100 p-3 rounded-lg mr-4">
                            <PiNotepadFill className="text-sky-600 text-xl" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800">Transparent Terms</h3>
                            <p className="text-gray-600 text-sm mt-1">No hidden fees or surprises – we provide clear, straightforward loan terms.</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-sky-100 p-3 rounded-lg mr-4">
                            <MdLockPerson className="text-sky-600 text-xl" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800">Integrity & Security</h3>
                            <p className="text-gray-600 text-sm mt-1">Your privacy is our priority; we ensure your documents are protected and confidential.</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-sky-100 p-3 rounded-lg mr-4">
                            <FaMoneyBillTrendUp className="text-sky-600 text-xl" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800">Quick Disbursal</h3>
                            <p className="text-gray-600 text-sm mt-1">Receive funds rapidly, so you don’t have to wait long for your financial needs.</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-sky-100 p-3 rounded-lg mr-4">
                            <IoDocumentAttach className="text-sky-600 text-xl" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800">Easy Application Process </h3>
                            <p className="text-gray-600 text-sm mt-1">Apply online in minutes, with minimal paperwork, ensuring a hassle-free experience.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
      
    </div>
  )
}

export default LoanLayout
