import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons"; // Import specific icon
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contactus = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  // Toggle the visibility of the dropdown
  const toggleDropdown = () => {
    setMenuVisible(!menuVisible);
  };

  // Close the dropdown
  const closeDropdown = () => {
    setMenuVisible(false);
  };

  return (
    <div className="relative ">
      {/* Clickable image as a button */}
      <div className="fixed right-0 ">
        <button
          onClick={toggleDropdown}
          className="w-[40px] h-[40px] bg-white text-gray-700 shadow-xl rounded-lg border border-gray-300 mt-8 p-0">
          <img src="/phone.webp" alt="Phone" className="w-[40px] h-[40px] p-1" />
        </button>
      </div>

      {/* Dropdown menu */}
      {menuVisible && (
        <div className="fixed top-20 right-0 z-50 bg-white shadow-lg rounded-md p-4 w-64">
          {/* Header with Contact Us and Close Button */}
          <div className="flex justify-between items-center mb-4 z-50">
            <p className="h3 text-gray-800 font-semibold">Contact Us</p>
            <button onClick={closeDropdown} className="text-gray-700">
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </button>
          </div>

          {/* Dropdown Items */}
          <a
            href="tel:8109952379"
            className="flex items-center text-gray-700 hover:text-blue-500 mb-2"
          >
            <i
              aria-hidden="true"
              className="material-icons text-blue-500"
              style={{ fontSize: "28px" }}
            >
            <FontAwesomeIcon icon={faPhone} size="sm" />
            </i>
            <span className="ml-4 font-medium">+91-8109952379</span>
          </a>

          <a
            href="mailto:support@loanok.in"
            className="flex items-center text-gray-700 hover:text-blue-500 mb-2"
          >
            <i
              aria-hidden="true"
              className="material-icons text-blue-500"
              style={{ fontSize: "28px" }}
            >
            <FontAwesomeIcon icon={faEnvelope} size="sm" />
            </i>
            <span className="ml-4 font-medium">support@loanok.in</span>
          </a>

     
          <a
            href="https://www.instagram.com/loanok_official/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-blue-500 mb-2"
          >
                      <i
              aria-hidden="true"
              className="material-icons text-blue-500"
              style={{ fontSize: "28px" }}
            >
            <FontAwesomeIcon icon={faInstagram} size="sm" />
            </i>
            <span className="ml-4 font-medium">@Instagram</span>
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-blue-500"
          >
            <i
              aria-hidden="true"
              className="material-icons text-blue-500"
              style={{ fontSize: "28px" }}
            >
            <FontAwesomeIcon icon={faFacebook} size="sm" />
            </i>
            <span className="ml-4 font-medium">Facebook</span>
          </a>
          
        </div>
      )}
    </div>
  );
};

export default Contactus;
