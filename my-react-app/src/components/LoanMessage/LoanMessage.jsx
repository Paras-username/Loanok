import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const LoanMessage = () => {
  return (
    <div>
      {/* Main message section */}
      <div className="bg-[#FAF3E8] fixed z-50 bottom-0 left-0 w-full p-1 sm:p-4 border rounded-t-2xl space-x-5 flex justify-center items-center flex-col md:flex-row md:space-x-5">
        <div className="text-xs sm:text-lg font-medium text-center md:text-left">
          Hey! Get your custom loan with one message or call
        </div>
        <div className="border-2 border-green-500 rounded-3xl px-3 py-1 text-xs sm:text-lg font-medium text-green-500 flex items-center shadow-md mt-2 md:mt-0">
          <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
          <a href="https://wa.me/8109952379" className="block md:inline">
            +91 8109952379
          </a>
        </div>
      </div>

      
      {/* Emoji image */}
<div
  className="fixed z-50 left-0  bottom-0 w-[110px] h-[90px] sm:w-[130px] sm:h-[110px] bg-transparent md:w-[150px] md:h-[130px]"
  style={{
    backgroundImage: "url('/emoji.png')",
    backgroundSize: "cover",
  
    // left: "260px", // Custom right positioning
  }}
></div>
    </div>
  );
};

export default LoanMessage;