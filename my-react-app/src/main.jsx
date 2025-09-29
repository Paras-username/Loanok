import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';  // Import Auth0Provider
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import Homebottom from './components/Homebottom/Homebottom.jsx';
import Loan from './Loan/Loan.jsx';
import Calculator from './Calculator/Calculator.jsx';
import Works from './components/Works/Works.jsx';
import Instance from './components/InstanceLoan/Instance.jsx';
import Vehicle from './components/Vehicle/Vehicle.jsx';
import DcLoan from './components/DcLoan/DcLoan.jsx';
import MarriageLoan from './components/MarriageLoan/MarriageLoan.jsx';
import CcrLoan from './components/CcrLoan/CcrLoan.jsx';
import CoperateLoan from './components/CoperateLoan/CoperateLoan.jsx';
import MsmeLoan from './components/MsmeLoan/MsmeLoan.jsx';
import HousingLoan from './components/HousingLoan/HousingLoan.jsx';
import BuisnessLoan from './components/BuisnessLoan/BuisnessLoan.jsx';
import EducationLoan from './components/EducationLoan/EducationLoan.jsx';
import Privacy from './components/Privacy/Privacy.jsx';
import Terms from './components/Terms/Terms.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Insurance from './components/Insurance/Insurance.jsx';
import LifeInsurance from './components/Insurance/LifeInsurance.jsx';
import HomeInsurance from './components/Insurance/HomeInsurance.jsx';
import GenralInsurance from './components/Insurance/GenralInsurance.jsx';
import HealthInsurance from './components/Insurance/HealthInsurance.jsx';
import VehicleInsurance from './components/Insurance/VehicleInsurance.jsx';
import Goldloan from './components/Goldloan/Goldloan.jsx';
import LoanStatus from './components/LoanStatus/LoanStatus.jsx';
import Dataform from './components/Dataform/Dataform.jsx';
import Adminpanel from './components/Adminpanel/Adminpanel.jsx';
import Blog from './components/Blogs/Blogs.jsx';
import CareerForm from './components/CareerForm/CareerForm.jsx';
import CareerAdminPanel from './components/CareerAdminPanel/CareerAdminPanel.jsx';
import CareerPortal from './components/Careerportal/CareerPortal.jsx';
// import Centraladminpanel from './components/CentralAdminPanel/Centraladminpanel.jsx';
import Log from './components/Auth/Log.jsx';
import Register from './components/Auth/Register.jsx';
// import CibilForm from './components/CibilForm/CibilForm.jsx';
// import CibilAdmin from './components/CibilAdmin/CibilAdmin.jsx';
// import ReviewsSection from './components/ReviewsSection/ReviewsSection.jsx';
// import Adminreviews from './components/Adminreviews/Adminreviews.jsx';
// import LeadForm from './components/LeadForm/LeadForm.jsx';
// import DocumentUploadForm from './components/DocumentUploadForm/DocumentUploadForm.jsx';
// import LeadAdminPanel from './components/LeadAdminPanel/LeadAdminPanel.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: "", element: <><Home /><Homebottom /></> },
      { path: "Loan", element: <Loan name="Personal" /> },
      { path: "calculator", element: <Calculator /> },
      { path: "works", element: <Works /> },
      { path: "instance", element: <Instance name="Instant Personal" /> },
      { path: "Vehicle", element: <Vehicle name="Vehicle" /> },
      { path: "dcloan", element: <DcLoan name="Dept Consolidation" /> },
      { path: "marriageloan", element: <MarriageLoan name="Marriage" /> },
      { path: "ccrloan", element: <CcrLoan name="Credit Card Repayment" /> },
      { path: "corporateloan", element: <CoperateLoan name="Corporate" /> },
      { path: "msmeloan", element: <MsmeLoan name="Msme" /> },
      { path: "housingloan", element: <HousingLoan name="Housing" /> },
      { path: "buisnessloan", element: <BuisnessLoan name="Buisness" /> },
      { path: "educationloan", element: <EducationLoan name="Education" /> },
      { path: "privacy", element: <Privacy /> },
      { path: "terms", element: <Terms /> },
      { path: "aboutus", element: <AboutUs /> },
      { path:"insurance" , element: <Insurance/>},
      { path: "lifeinsurance" , element:<LifeInsurance/>},
      {path: "homeinsurance" , element: <HomeInsurance/>},
      {path: "genralinsurance" , element: <GenralInsurance/>},
      {path: "healthinsurance" , element: <HealthInsurance/>},
      {path: "vehicleinsurance" , element: <VehicleInsurance/>},
      {path: "goldloan" , element: <Goldloan/>},
      {path: "loanstatus" , element: <LoanStatus/>},
      {path: "dataform" , element: <Dataform/>},
      {path: "adminpanel" , element: <Adminpanel/>},
      {path: "blogs" , element: <Blog/>},
      {path: "careersportal" , element: <CareerPortal/>},
      {path: "careerform", element: <CareerForm/>},
      {path: "adminpanel/career", element: <CareerAdminPanel/>},
      // {path: "CentralAdminPanel", element: <Centraladminpanel/>},
      // {path: "cibil_score_checker", element: <CibilForm/>},
      // {path: "cibil_admin", element: <CibilAdmin/>},
      // {path: "customer_reviews", element: <ReviewsSection/>},
      // {path: "reviews_admin", element: <Adminreviews/>},
      // {path: "Application_Form", element: <LeadForm/>},
      // {path: "document_upload", element: <DocumentUploadForm/>},
      // {path: "lead_admin", element: <LeadAdminPanel/>},


      
      {path: "login" , element: <Log/>},
      {path : "register", element: <Register/>},

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-6kcupbuua4xnqtq1.us.auth0.com"
      clientId="NNX2YcJ9Z5e6pqsjgdSeBFNiLihSfrGR"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </StrictMode>,
);





