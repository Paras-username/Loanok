// import { useState, useEffect } from "react";
// import { NavLink, Link } from "react-router-dom"; // Import Link from react-router-dom
// import { motion, AnimatePresence } from "framer-motion";
// import { Home, Briefcase, FileText, User, BookOpen, Menu, X } from "lucide-react";
// import Login from "../Loginsite/Login";
// // import Profile from "../Profile/Profile";

// const Header = () => {
//   const [activeTab, setActiveTab] = useState("Home");
//   const [isDropdownLoan, setDropdownLoan] = useState(false);
//   const [isDropdownLearn, setDropdownLearn] = useState(false);
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const [isOpen, setIsOpen] = useState(false);

//   const handleOptionClick = () => {
//     setIsOpen(false); // Close dropdown when an option is clicked
//   };


//   const navItems = [
//     { name: "Home", url: "/", icon: Home },
//     { name: "Loan", url: "#", icon: Briefcase, dropdown: true },
//     { name: "Insurance", url: "/insurance", icon: User },
//     { name: "EMI Calculator", url: "/calculator", icon: FileText },
//     { name: "About Us", url: "/aboutus", icon: User },
//     { name: "Learn", url: "#", icon: BookOpen, dropdown: true },
//   ];

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY >= 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const savedDarkMode = localStorage.getItem("darkMode") === "true";
//     setIsDarkMode(savedDarkMode);
//     document.body.classList.toggle("dark", savedDarkMode);
//   }, []);

//   const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
//   const toggleLoanDropdown = () => setDropdownLoan((prev) => !prev);
//   const toggleLearnDropdown = () => setDropdownLearn((prev) => !prev);
//   const toggleDarkMode = () => {
//     const newDarkMode = !isDarkMode;
//     setIsDarkMode(newDarkMode);
//     document.body.classList.toggle("dark", newDarkMode);
//     localStorage.setItem("darkMode", newDarkMode);
//   };

//   const renderDropdown = (item) => {
//     if (item.name === "Loan") {
//       return (
//         <>
//            <div className="relative">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="block hover:text-blue-500"
//       >
//         Personal Loan
//       </button>
//       {isOpen && (
//         <div className="absolute left-36 top-0 w-48 bg-white shadow-lg border rounded">
//           <ul className="py-1">
//             {[
//               "Home Loan",
//               "Car Loan",
//               "Education Loan",
//               "Business Loan",
//               "Gold Loan",
//               "Medical Loan",
//               "Travel Loan",
//             ].map((item, index) => (
//               <li key={index}>
//                 <NavLink
//                   to={`/loan/${item.toLowerCase().replace(/\s+/g, "-")}`}
//                   className="block px-4 py-2 hover:bg-gray-100"
//                   onClick={handleOptionClick}
//                 >
//                   {item}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//           <NavLink
//             to="/buisnessloan"
//             className="block hover:text-blue-500"
//             onClick={toggleMobileMenu}
//           >
//             Business Loan
//           </NavLink>
//           <NavLink
//             to="/housingloan"
//             className="block hover:text-blue-500"
//             onClick={toggleMobileMenu}
//           >
//             Housing Loan
//           </NavLink>
//           <NavLink
//             to="/educationloan"
//             className="block hover:text-blue-500"
//             onClick={toggleMobileMenu}
//           >
//             Education Loan
//           </NavLink>
//         </>
//       );
//     } else if (item.name === "Learn") {
//       return (
//         <>
//           <NavLink
//             to="/privacy"
//             className="block hover:text-blue-500"
//             onClick={toggleMobileMenu}
//           >
//             Privacy Policy
//           </NavLink>
//           <NavLink
//             to="/terms"
//             className="block hover:text-blue-500"
//             onClick={toggleMobileMenu}
//           >
//             Terms & Conditions
//           </NavLink>
//         </>
//       );
//     }
//     return null;
//   };

//   return (
//     <div
//       className={`sticky top-0 z-50 shadow-md ${
//         isDarkMode ? "bg-gray-700" : "bg-[#FAF3E8]"
//       }`}
//     >
//       {/* Desktop Menu */}
//       <div className="hidden md:flex justify-between items-center  py-4 px-4">
//         <a href="/"><div
//           className="h-8 w-40 bg-cover bg-center"
//           style={{ backgroundImage: "url('/loanoklogo.png')" }}
//         ></div></a>
//         <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-2 rounded-full shadow-lg">
//           {navItems.map((item) => {
//             const Icon = item.icon;
//             const isActive = activeTab === item.name;

//             return (
//               <div key={item.name} className="relative">
//                 <NavLink
//                   to={item.url}
//                   onClick={() => {
//                     setActiveTab(item.name);
//                     if (item.dropdown) {
//                       if (item.name === "Loan") toggleLoanDropdown();
//                       if (item.name === "Learn") toggleLearnDropdown();
//                     }
//                   }}
//                   className={`relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors 
//                     ${
//                       isDarkMode
//                         ? "text-white hover:text-blue-400"
//                         : "text-foreground/80 hover:text-blue-800"
//                     } ${isActive ? "bg-muted text-blue-800" : ""}`}
//                 >
//                   <span>{item.name}</span>
//                   {isActive && (
//                     <motion.div
//                       layoutId="lamp"
//                       className="absolute inset-0 w-full bg-blue-100 rounded-full -z-10"
//                       transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                     >
//                       <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-500 rounded-t-full">
//                         <div className="absolute w-12 h-6 bg-blue-200 rounded-full blur-md -top-2 -left-2" />
//                         <div className="absolute w-8 h-6 bg-blue-200 rounded-full blur-md -top-1" />
//                         <div className="absolute w-4 h-4 bg-blue-200 rounded-full blur-sm top-0 left-2" />
//                       </div>
//                     </motion.div>
//                   )}
//                 </NavLink>
//                 {item.dropdown && (
//                   <AnimatePresence>
//                     {(item.name === "Loan" && isDropdownLoan) ||
//                     (item.name === "Learn" && isDropdownLearn) ? (
//                       <motion.div
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         transition={{ duration: 0.2 }}
//                         className={`absolute top-12 left-0 ${
//                           isDarkMode ? "text-black" : "bg-white"
//                         } shadow-lg rounded-md py-2 px-3 space-y-2 min-w-[200px]`}
//                       >
//                         {renderDropdown(item)}
//                       </motion.div>
//                     ) : null}
//                   </AnimatePresence>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//         <div className="flex items-center gap-4">
//           <div
//             id="switch"
//             className={`w-9 h-4 rounded-full relative cursor-pointer transition-all duration-300 ${
//               isDarkMode ? "bg-purple-600" : "bg-gray-300"
//             }`}
//             onClick={toggleDarkMode}
//           >
//             <div
//               id="circle"
//               className={`w-4 h-4 rounded-full absolute top-0 left-0 transform transition-all duration-300 ${
//                 isDarkMode ? "translate-x-6 bg-white" : "translate-x-0 bg-gray-700"
//               }`}
//             ></div>
//           </div>
//           {/* Updated Login/Signup Button */}
         
//           <Login/>
      
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className="md:hidden flex justify-between items-center p-4">
//         <a href="/"><div
//           className="h-10 w-40 bg-cover bg-center"
//           style={{ backgroundImage: "url('/loanoklogo.png')" }}
//         ></div></a>
//         <button onClick={toggleMobileMenu} className="p-2">
//           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isMobileMenuOpen && (
//         <div className="flex flex-col bg-white shadow-lg p-4 space-y-4 md:hidden">
//           <NavLink
//             to="/"
//             className="text-black hover:text-blue-800"
//             onClick={toggleMobileMenu}
//           >
//             Home
//           </NavLink>
//           <div>
//             <div
//               className="text-black hover:text-blue-800 cursor-pointer"
//               onClick={toggleLoanDropdown}
//             >
//               Loan
//             </div>
//             {isDropdownLoan && (
//               <div className="pl-4 p-1">
//                 <NavLink
//                   to="Loan"
//                   className="block text-gray-700 hover:text-blue-500"
//                   onClick={toggleMobileMenu}
//                 >
//                   Personal Loan
//                 </NavLink>
//                 <NavLink
//                   to="buisnessloan"
//                   className="block text-gray-700 hover:text-blue-500"
//                   onClick={toggleMobileMenu}
//                 >
//                   Business Loan
//                 </NavLink>
//                 <NavLink
//                   to="/housingloan"
//                   className="block text-gray-700 hover:text-blue-500"
//                   onClick={toggleMobileMenu}
//                 >
//                   Housing Loan
//                 </NavLink>
//                 <NavLink
//                   to="/educationloan"
//                   className="block text-gray-700 hover:text-blue-500"
//                   onClick={toggleMobileMenu}
//                 >
//                   Education Loan
//                 </NavLink>
//               </div>
//             )}
//           </div>
//           <div>
//           <NavLink
//             to="/insurance"
//             className="text-black hover:text-blue-800"
//             onClick={toggleMobileMenu}
//           >
//           Insurance
//           </NavLink>
//           </div>
//           <NavLink
//             to="/calculator"
//             className="text-black hover:text-blue-800"
//             onClick={toggleMobileMenu}
//           >
//             EMI Calculator
//           </NavLink>
//           <NavLink
//             to="/aboutus"
//             className="text-black hover:text-blue-800"
//             onClick={toggleMobileMenu}
//           >
//             About Us
//           </NavLink>
//           {/* Learn Dropdown for Mobile */}
//           <div>
//             <div
//               className="text-black hover:text-blue-800 cursor-pointer"
//               onClick={toggleLearnDropdown}
//             >
//               Learn
//             </div>
//             {isDropdownLearn && (
//               <div className="pl-4">
//                 <NavLink
//                   to="/privacy"
//                   className="block text-gray-700 hover:text-blue-500"
//                   onClick={toggleMobileMenu}
//                 >
//                   Privacy Policy
//                 </NavLink>
//                 <NavLink
//                   to="/terms"
//                   className="block text-gray-700 hover:text-blue-500"
//                   onClick={toggleMobileMenu}
//                 >
//                   Terms & Conditions
//                 </NavLink>
//               </div>
//             )}
//           </div>
//           {/* Login/Signup Button for Mobile */}
//           <Login/>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, FileText, User, BookOpen, Menu, X } from "lucide-react";
import Login from "../Loginsite/Login";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isDropdownLoan, setDropdownLoan] = useState(false);
  const [isDropdownLearn, setDropdownLearn] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

 

  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "Loan", url: "#", icon: Briefcase, dropdown: true },
    { name: "Insurance", url: "/insurance", icon: User },
    { name: "EMI Calculator", url: "/calculator", icon: FileText },
    { name: "About Us", url: "/aboutus", icon: User },
    { name: "Learn", url: "#", icon: BookOpen, dropdown: true },
  ];

  const loanSubmenus = {
    personal: [
      { name: "Instant Personal Loan", url: "/instance" },
      { name: "Vehicle Loan", url: "/Vehicle" },
      { name: "Debt Consolidation Loan", url: "/dcloan" },
      { name: "Marriage Loan", url: "/marriageloan" },
      { name: "Gold Loan", url: "/goldloan" },
      { name: "Credit Card Repayment Loan", url: "/ccrloan" },
    ],
    business: [
      { name: "Corporate Loan", url: "/corporateloan" },
      { name: "MSME Loan", url: "/msmeloan" },
    ],
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY >= 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);
    document.body.classList.toggle("dark", savedDarkMode);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const toggleLoanDropdown = () => setDropdownLoan((prev) => !prev);
  const toggleLearnDropdown = () => setDropdownLearn((prev) => !prev);
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.body.classList.toggle("dark", newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };
  const toggleMobileSubmenu = (menu) => setMobileSubmenu(mobileSubmenu === menu ? null : menu);

  const renderDesktopDropdown = (item) => {
    if (item.name === "Loan") {
      return (
        <div className="grid grid-cols-2 gap-4 p-4">
          <div className="space-y-2">
            <div 
              className="relative"
              onMouseEnter={() => setSubmenuOpen('personal')}
              onMouseLeave={() => setSubmenuOpen(null)}
            >
              <NavLink
                to="/Loan"
                className="block hover:text-blue-500 text-sm"
              >
                Personal Loan
              </NavLink>
              <AnimatePresence>
                {submenuOpen === 'personal' && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className={`absolute left-full top-0 ml-2 ${
                      isDarkMode ? "hover:bg-white" : "bg-white"
                    } shadow-xl rounded-lg p-4 min-w-[300px] grid grid-cols-1 gap-2`}
                  >
                    {loanSubmenus.personal.map((loan) => (
                      <NavLink 
                        key={loan.url}
                        to={loan.url}
                        className="hover:text-blue-500 text-sm p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#FAF3E8]"
                      >
                        {loan.name}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setSubmenuOpen('business')}
              onMouseLeave={() => setSubmenuOpen(null)}
            >
              <NavLink
                to="/buisnessloan"
                className="block hover:text-blue-500 text-sm"
              >
                Business Loan
              </NavLink>
              <AnimatePresence>
                {submenuOpen === 'business' && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className={`absolute left-full top-0 ml-2 ${
                      isDarkMode ? "hover:bg-white" : "bg-white"
                    } shadow-xl rounded-lg p-4 min-w-[250px]`}
                  >
                    {loanSubmenus.business.map((loan) => (
                      <NavLink 
                        key={loan.url}
                        to={loan.url}
                        className="hover:text-blue-500 text-sm p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#FAF3E8] block"
                      >
                        {loan.name}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/housingloan" className="block  text-sm hover:text-blue-500 ">
              Housing Loan
            </NavLink>
            <NavLink to="/educationloan" className="block  text-sm hover:text-blue-500 ">
              Education Loan
            </NavLink>
          </div>
        </div>
      );
    }
    
    if (item.name === "Learn") {
      return (
        <>
          <NavLink to="/privacy" className="block hover:text-blue-500">
            Privacy Policy
          </NavLink>
          <NavLink to="/terms" className="block hover:text-blue-500">
            Terms & Conditions
          </NavLink>
        </>
      );
    }
    return null;
  };

  const renderMobileLoanMenu = () => (
    <div className="pl-4 p-1 space-y-2">
      <div className="cursor-pointer" onClick={() => toggleMobileSubmenu('personal')}>
        <NavLink
          to="/Loan"
          className="block text-gray-700 hover:text-blue-500 dark:text-gray-300"
          onClick={toggleMobileMenu}
        >
          <span className="flex justify-between items-center">
            Personal Loan
            <span className="transform rotate-90">{">"}</span>
          </span>
        </NavLink>
        {mobileSubmenu === 'personal' && (
          <div className="pl-4 space-y-2">
            {loanSubmenus.personal.map((loan) => (
              <NavLink
                key={loan.url}
                to={loan.url}
                className="block text-gray-500 hover:text-blue-500 dark:text-gray-400"
                onClick={toggleMobileMenu}
              >
                {loan.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>

      <div className="cursor-pointer" onClick={() => toggleMobileSubmenu('business')}>
        <NavLink
          to="/buisnessloan"
          className="block text-gray-700 hover:text-blue-500 dark:text-gray-300"
          onClick={toggleMobileMenu}
        >
          <span className="flex justify-between items-center">
            Business Loan
            <span className="transform rotate-90">{">"}</span>
          </span>
        </NavLink>
        {mobileSubmenu === 'business' && (
          <div className="pl-4 space-y-2">
            {loanSubmenus.business.map((loan) => (
              <NavLink
                key={loan.url}
                to={loan.url}
                className="block text-gray-500 hover:text-blue-500 dark:text-gray-400"
                onClick={toggleMobileMenu}
              >
                {loan.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>

      <NavLink 
        to="/housingloan" 
        className="block text-gray-700 hover:text-blue-500 dark:text-gray-300"
        onClick={toggleMobileMenu}
      >
        Housing Loan
      </NavLink>
      <NavLink 
        to="/educationloan" 
        className="block text-gray-700 hover:text-blue-500 dark:text-gray-300"
        onClick={toggleMobileMenu}
      >
        Education Loan
      </NavLink>
    </div>
  );

  return (
    <div className={`sticky top-0 z-50 shadow-md ${isDarkMode ? "bg-gray-800" : "bg-[#FAF3E8]"}`}>
    {/* Desktop Menu */}
    <div className="hidden md:flex justify-between items-center py-4 px-4">
      <a href="/"><div
        className="h-8 w-40 bg-cover bg-center"
        style={{ backgroundImage: "url('/loanoklogo.png')" }}
      ></div></a>
      
      <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-2 rounded-full shadow-lg">
      {navItems.map((item) => {
  const Icon = item.icon;
  const isActive = activeTab === item.name;

  return (
    <div key={item.name} className="relative">
      <NavLink
        to={item.url}
        onClick={() => {
          setActiveTab(item.name);
          if (item.dropdown) {
            if (item.name === "Loan") toggleLoanDropdown();
            if (item.name === "Learn") toggleLearnDropdown();
          }
        }}
        className={`relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors 
          ${isDarkMode ? "text-white hover:text-blue-400" : "text-foreground/80 hover:text-blue-800"}
          ${isActive ? "bg-muted text-blue-800" : ""}`}
      >
        <span>{item.name}</span>
      </NavLink>

      {/* Dropdown for Loan */}
      {item.name === "Loan" && isDropdownLoan && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-12 left-0 ${
              isDarkMode ? "bg-white" : "bg-white"
            } shadow-xl rounded-lg py-1 px-2 min-w-[300px]`}
            onMouseEnter={() => setDropdownLoan(true)}
            onMouseLeave={() => setDropdownLoan(false)}
          >
            {renderDesktopDropdown(item)}
          </motion.div>
        </AnimatePresence>
      )}

      {/* Dropdown for Learn */}
      {item.name === "Learn" && isDropdownLearn && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-12 left-0 ${
              isDarkMode ? "bg-white" : "bg-white"
            } shadow-xl rounded-lg py-1 px-2 min-w-[200px]`}
            onMouseEnter={() => setDropdownLearn(true)}
            onMouseLeave={() => setDropdownLearn(false)}
          >
            <NavLink to="/privacy" className="block text-sm px-4 py-1 rounded-lg hover:text-blue-500 dark:hover:bg-[#FAF3E8]">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="block text-sm px-4 py-1 rounded-lg hover:text-blue-500 dark:hover:bg-[#FAF3E8]">
              Terms & Conditions
            </NavLink>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
})}

      </div>

      <div className="flex items-center gap-4">
        <div
          className={`w-9 h-4 rounded-full relative cursor-pointer transition-all duration-300 ${
            isDarkMode ? "bg-purple-600" : "bg-gray-300"
          }`}
          onClick={toggleDarkMode}
        >
          <div
            className={`w-4 h-4 rounded-full absolute top-0 left-0 transform transition-all duration-300 ${
              isDarkMode ? "translate-x-6 bg-white" : "translate-x-0 bg-gray-900"
            }`}
          ></div>
        </div>
        <Login />
      </div>
    </div>

    {/* Mobile Menu */}
    <div className="md:hidden flex justify-between items-center p-4">
      <a href="/"><div
        className="h-10 w-40 bg-cover bg-center"
        style={{ backgroundImage: "url('/loanoklogo.png')" }}
      ></div></a>
      <button onClick={toggleMobileMenu} className="p-2">
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>


      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className={`flex flex-col shadow-lg p-4 space-y-4 md:hidden ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}>
          <NavLink to="/" className="hover:text-blue-800" onClick={toggleMobileMenu}>
            Home
          </NavLink>
          
          <div>
            <div
              className="hover:text-blue-800 cursor-pointer"
              onClick={toggleLoanDropdown}
            >
              Loan
            </div>
            {isDropdownLoan && renderMobileLoanMenu()}
          </div>

          <NavLink
            to="/insurance"
            className="hover:text-blue-800"
            onClick={toggleMobileMenu}
          >
            Insurance
          </NavLink>

          <NavLink
            to="/calculator"
            className="hover:text-blue-800"
            onClick={toggleMobileMenu}
          >
            EMI Calculator
          </NavLink>

          <NavLink
            to="/aboutus"
            className="hover:text-blue-800"
            onClick={toggleMobileMenu}
          >
            About Us
          </NavLink>

          <div>
            <div
              className="hover:text-blue-800 cursor-pointer"
              onClick={toggleLearnDropdown}
            >
              Learn
            </div>
            {isDropdownLearn && (
              <div className="pl-4">
                <NavLink
                  to="/privacy"
                  className="block hover:text-blue-500"
                  onClick={toggleMobileMenu}
                >
                  Privacy Policy
                </NavLink>
                <NavLink
                  to="/terms"
                  className="block hover:text-blue-500"
                  onClick={toggleMobileMenu}
                >
                  Terms & Conditions
                </NavLink>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between mt-4">
            <div
              className={`w-9 h-4 rounded-full relative cursor-pointer transition-all duration-300 ${
                isDarkMode ? "bg-purple-600" : "bg-gray-300"
              }`}
              onClick={toggleDarkMode}
            >
              <div
                className={`w-4 h-4 rounded-full absolute top-0 left-0 transform transition-all duration-300 ${
                  isDarkMode ? "translate-x-6 bg-white" : "translate-x-0 bg-gray-800"
                }`}
              ></div>
            </div>
            <Login mobileView={true} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;