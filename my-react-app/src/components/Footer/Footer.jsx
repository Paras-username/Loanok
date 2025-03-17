import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footerupdate = () => {
  return (
    <div className="p-2 bg-[#101F30] font-[Lato] pb-32">
      <p className="text-lg pt-6 sm:text-xl font-bold max-w-5xl mx-auto text-center p-2 ">
        <span className="text-white">Fast Approvals, Easy Way - LoanOK is Here To Save Your Day.</span>
      </p>

      <div className="pt-10 pl-6 space-y-6 flex flex-col flex-start sm:flex-row sm:space-y-0 sm:flex-wrap sm:justify-center sm:gap-20"
      >
        <div>
          <h3 className="text-white text-lg font-bold">Services</h3>
          <ul className="space-y-2 pt-2 text-[#00AEEF]">
  <li>
    <a href="/Loan" className="hover:text-white hover:underline transition duration-200 cursor-pointer">
      Personal Loan
    </a>
  </li>
  <li>
    <a href="/housingloan" className="hover:text-white hover:underline transition duration-200 cursor-pointer">
      Housing Loan
    </a>
  </li>
  <li>
    <a href="buisnessloan" className="hover:text-white hover:underline transition duration-200 cursor-pointer">
      Business Loan
    </a>
  </li>
  <li>
    <a href="msmeloan" className="hover:text-white hover:underline transition duration-200 cursor-pointer">
      MSME Loan
    </a>
  </li>
  <li>
    <a href="/Vehicle" className="hover:text-white hover:underline transition duration-200 cursor-pointer">
      Vehicle Loan
    </a>
  </li>
  <li>
    <a href="/insurance" className="hover:text-white hover:underline transition duration-200 cursor-pointer">
      Insurance
    </a>
  </li>
  {/* <li>
    <a href="#" className="hover:text-white hover:underline transition duration-200 cursor-pointer">
      Finance
    </a>
  </li> */}
</ul>

        </div>

        <div className='sm:border-l-2 sm:border-gray-600 sm:pl-4'>
          <h3 className="text-white text-lg font-bold ">Quick Links</h3>
          <ul className="space-y-2 pt-2 text-[#00AEEF]">
  <li>
    <a href="mailto:support@loanok.com" className="hover:text-white hover:underline transition duration-200 cursor-pointer">
      Customer Care/Support
    </a>
  </li>
  <li>
    <a href="/terms" className="hover:text-white hover:underline transition duration-200 cursor-pointer">
      Terms & Conditions
    </a>
  </li>
  <li>
    <a href="/privacy" className="hover:text-white hover:underline transition duration-200 cursor-pointer">
      Privacy Policy
    </a>
  </li>
  <li>
    <a href="aboutus" className="hover:text-white hover:underline transition duration-200 cursor-pointer">
      About Us
    </a>
  </li>
</ul>

        </div>

        <div className='sm:border-l-2 sm:border-gray-600 sm:pl-4'>
          <h3 className="text-white text-lg font-bold">Contact Us</h3>
          <ul className="space-y-2 pt-2 text-[#00AEEF]">
            <li className="hover:text-white hover:underline transition duration-200 cursor-pointer">
             Shikshak Nagar, Kohka, Bhilai <br /> Chhattisgarh 
            </li>
            <li>
              <a href="mailto:support@loanok.com" className="hover:text-white hover:underline transition duration-200">
                support@loanok.com
              </a>
            </li>
            <li className="hover:text-white hover:underline transition duration-200 cursor-pointer">+91-8109952379</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-bold">Follow Us</h3>
          <div className="flex gap-3 pt-2">
            <a href="https://www.instagram.com/loanok_official/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition duration-200">
              <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl sm:text-3xl" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition duration-200">
              <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl sm:text-3xl" />
            </a>
            <a href="mailto:support@loanok.in" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition duration-200">
              <FontAwesomeIcon icon={faEnvelope} className="text-white text-2xl sm:text-3xl" />
            </a>
          </div>
        </div>

        
      </div>
      <div className="text-xs text-[#848E92] sm:text-sm max-w-[810px] mx-auto text-left p-2 mt-14 ">

        <div className='pl-4 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:flex-wrap sm:justify-between'>
            <div>Made in India Copyright 2025 Loanok</div>
            <div className='flex gap-2'>
                <div><a href="/privacy">Privacy policy</a></div>
                <div><a href="/terms">Terms of service</a></div>
            </div>
        </div>
       
    
        </div>
    </div>
  );
};

export default Footerupdate;
