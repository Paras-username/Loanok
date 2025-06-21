// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import Form from "../../Form/Form";
// import WordRotate from "../WordRotate/WordRotate";

// const Home = () => {
//   const navigate = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state

//   const handleNavigate = () => {
//     navigate("/works"); // Replace with your desired path
//   };

//   const handleModalToggle = () => {
//     setIsModalOpen(!isModalOpen); // Toggle the modal visibility
//   };

//   return (
//     <div className="px-1 flex flex-col overflow-x-hidden">
//       {/* Main Container */}
//       <div className="px-4 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 sm:gap-12 w-full max-w-8xl">

//       <div className="px-14 flex-1 space-y-6 sm:space-y-4 flex flex-col items-center text-center sm:items-start sm:text-left">
//   <div>
//     <WordRotate
//       words={["Trusted Partners", "Simple Process", "Quick Loans"]}
//       className="text-xl sm:text-3xl font-bold mt-8 text-green-700"
//     />

//     <h1 className="text-3xl font-bold sm:text-5xl mt-4 text-black-900">
//       Loans Made Easy
//     </h1>
//     <h1 className="text-3xl font-bold sm:text-5xl mt-4 text-blue-900">
//       Approval Made Fast
//     </h1>
//   </div>

//   <p className="pt-2 sm:pt-5 text-sm font-semibold text-gray-700 leading-relaxed w-full max-w-[400px]">
//     Transparent loans, competitive rates, expert guidance. Quick, reliable solutions for all your financial goals.
//   </p>

//   {/* Buttons */}
//   <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:pb-14 ">
//     <button
//       onClick={handleModalToggle}
//       className="sm:mt-4 p-3 px-6 sm:p-4 sm:px-8 font-medium text-white bg-blue-700 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
//     >
//       Apply Now!
//     </button>
//     <button
//       onClick={handleNavigate}
//       className="sm:mt-4 p-3 px-6 sm:p-4 sm:px-8 text-white font-medium bg-blue-700 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
//     >
//       How it works
//     </button>
//   </div>
// </div>

//   <div className="flex-1 flex justify-center">
//     <img
//       src="/girlpurple.webp"
//       alt="Loan Illustration"
//       className="w-[320px] h-[280px] sm:w-[540px] sm:h-[600px] object-contain rounded-2xl shadow-sm"
//     />
// </div>

// </div>

//       {/* Modal Form */}
//       <Form isOpen={isModalOpen} onClose={handleModalToggle} />
//     </div>
//   );
// };

// export default Home;

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import WordRotate from "../WordRotate/WordRotate";
import Dataform from "../Dataform/Dataform";

const Home = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigate = () => {
    navigate("/works");
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    /* Hero section with full‑width background image */
    <div className="min-h-[550px] w-full bg-[url('/round.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="w-full max-w-[1350px] mx-auto flex flex-col md:flex-row items-center px-2 py-12 md:gap-2">
        {/* LEFT — text */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <WordRotate
            words={["Trusted Partners", "Simple Process", "Quick Loans"]}
            className="text-xl sm:text-4xl font-bold text-[#5da881]"
          />
          <h1 className="text-3xl sm:text-5xl font-bold text-black">
            Loans Made Easy
          </h1>
          <h1 className="text-3xl sm:text-5xl font-bold text-green-700">
            Approval Made Fast
          </h1>
          <p className="text-gray-700 max-w-md mx-auto md:mx-0">
            Transparent loans, competitive rates, expert guidance. Quick,
            reliable solutions for all your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={handleModalToggle}
              className="bg-green-700 text-white font-bold px-6 py-3 hover:scale-105"
            >
              Apply Now!
            </button>
            <button
              onClick={handleNavigate}
              className="bg-[#e4f3e0] font-bold px-6 py-3 hover:scale-105"
            >
              How it works
            </button>
          </div>
        </div>

        {/* RIGHT — video */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <video
            src="/homemp4.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[280px] sm:h-[380px] object-contain"
          />
        </div>
      </div>

      {/* Modal Form */}
      {isModalOpen && <Dataform onClose={handleModalToggle} />}
    </div>
  );
};

export default Home;
