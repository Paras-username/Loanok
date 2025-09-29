import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoanMessage from "./components/LoanMessage/LoanMessage";
import Contactus from "./components/Contactus/Contactus"; // Adjust the path accordingly
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReviewsSection from "./components/ReviewsSection/ReviewsSection";

const Layout = () => {
  const location = useLocation(); // Get the current route location

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on every route change
  }, [location.pathname]); // Trigger effect when path changes

  return (
    <>
      <Header />
      <Contactus />
      <Outlet />
      <LoanMessage />
      {/* <ReviewsSection/> */}
      <Footer />
    </>
  );
};

export default Layout;
