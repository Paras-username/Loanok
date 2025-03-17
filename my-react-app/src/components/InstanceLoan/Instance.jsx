import { useState } from 'react';
import { FiClock, FiCheckCircle, FiShield, FiHeart, FiBriefcase } from 'react-icons/fi';
import { FaIndianRupeeSign, FaShieldHalved, FaHandshake, FaMoneyBillTrendUp } from 'react-icons/fa6';
import { BsFastForwardCircle } from 'react-icons/bs';
import { PiNotepadFill } from 'react-icons/pi';
import { MdLockPerson } from 'react-icons/md';
import { IoDocumentAttach } from 'react-icons/io5';
import { HiOutlineDocumentCurrencyRupee } from 'react-icons/hi2';
import { RiHomeGearLine } from 'react-icons/ri';
import Dataform from "../Dataform/Dataform";
import Carousel from '../Carousel/Carousel';

const Instance = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const loanTypes = [
    {
      icon: FiClock,
      title: "Short-Term Loans",
      description: "Quick, flexible loans for temporary needs with fast approval.",
    },
    {
      icon: FiHeart,
      title: "Medical Emergency Loans",
      description: "Quick loans for urgent healthcare expenses and treatments.",
    },
    {
      icon: FiBriefcase,
      title: "Salary-Linked Loans",
      description: "Loans based on income, job stability, and quick approval.",
    },
    {
      icon: FaShieldHalved,
      title: "Unsecured Personal Loans",
      description: "No collateral required, based on creditworthiness and stability.",
    },
    {
      icon: HiOutlineDocumentCurrencyRupee,
      title: "Loans Against Securities",
      description: "Instant loans secured by stocks, bonds, mutual funds, and assets.",
    },
    {
      icon: RiHomeGearLine,
      title: "Home Renovation Loans",
      description: "Loans for home improvements, repairs, and renovation projects.",
    },
  ];

  return (
    <div className="mb-16 bg-gradient-to-b from-sky-50 to-emerald-50">
      <div className="px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Hero Section */}
        <div className="mt-10 bg-gradient-to-r from-[#680179] to-[#e0afff] rounded-2xl p-8 text-white shadow-2xl">

          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center sm:text-left">
            Instant Personal Loan – The Smart Way to Borrow!
          </h1>
          <div className="flex flex-wrap gap-4 mb-6 justify-center sm:justify-start">
            <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <FiClock className="mr-2 text-lg" /> Quick Approval
            </div>
            <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <FaIndianRupeeSign className="mr-2 text-lg" /> Secure Loan
            </div>
            <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <FiCheckCircle className="mr-2 text-lg" /> Low Interest
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Loan Description Section */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-emerald-800 flex items-center mb-6">
              <FiShield className="mr-2 text-emerald-600 text-3xl" />
              Instant Personal Loan
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
            An instant personal loan is a fast, unsecured loan with minimal paperwork and quick approval, often within minutes. Ideal for emergencies or urgent expenses, it offers flexible amounts and repayment options. Digital processing enables same-day disbursal, but responsible borrowing is key to protecting your credit score. Reviewing terms carefully ensures a smart financial choice.
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
              src="instantpersonal.png"
              alt="Personal Loan Illustration"
              className="w-full max-w-xl lg:max-w-2xl h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Loan Types Section */}
        <div className="mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-emerald-800 mb-8">Instant Loans for Every Need</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loanTypes.map((type, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-200 rounded-2xl hover:bg-emerald-50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <type.icon className="text-emerald-600 mr-3 text-2xl" />
                    <h3 className="text-xl font-semibold text-gray-800">{type.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-emerald-800 mb-8">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="bg-sky-100 p-3 rounded-lg mr-4">
                <BsFastForwardCircle className="text-sky-600 text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Fast Approval</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Get instant loan approval with minimal documentation and no long delays.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-sky-100 p-3 rounded-lg mr-4">
                <FaHandshake className="text-sky-600 text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Trusted Partners</h3>
                <p className="text-gray-600 text-sm mt-2">
                  We collaborate with reliable banks and financial institutions for secure transactions.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-sky-100 p-3 rounded-lg mr-4">
                <PiNotepadFill className="text-sky-600 text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Transparent Terms</h3>
                <p className="text-gray-600 text-sm mt-2">
                  No hidden fees or surprises – we provide clear, straightforward loan terms.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-sky-100 p-3 rounded-lg mr-4">
                <MdLockPerson className="text-sky-600 text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Integrity & Security</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Your privacy is our priority; we ensure your documents are protected and confidential.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-sky-100 p-3 rounded-lg mr-4">
                <FaMoneyBillTrendUp className="text-sky-600 text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Quick Disbursal</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Receive funds rapidly, so you don’t have to wait long for your financial needs.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-sky-100 p-3 rounded-lg mr-4">
                <IoDocumentAttach className="text-sky-600 text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Easy Application Process</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Apply online in minutes, with minimal paperwork, ensuring a hassle-free experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <Dataform onClose={handleModalToggle} />}
      <div className="py-10"><Carousel/></div>

    </div>
  );
};

export default Instance;