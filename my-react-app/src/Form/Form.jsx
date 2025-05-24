import { useState } from 'react';
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

function Form({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    gender: '',
    maritalStatus: '',
    city: '',
    state: '',
    pincode: '',
    monthlyIncome: '',
    loanAmount: '',
    loanPurpose: '',
    employmentType: '',
    loanDuration: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);  // State to manage submission status
  const navigate = useNavigate();  // Hook to navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);  // Set submitting state to true when submitting

    const serviceId = 'service_h77ge4b';
    const templateId = 'template_vlbarhq';
    const publicKey = 'GX_sc30t9BB3Nk3RZ';

    const templateParams = {
      to_name: 'Team LoanOK',  // Replace with your recipient name
      from_name: formData.firstName,
      from_last_name: formData.lastName,
      from_email: formData.email,
      from_mobile: formData.mobile,
      from_gender: formData.gender,
      from_marital_status: formData.maritalStatus,
      from_city: formData.city,
      from_state: formData.state,
      from_pincode: formData.pincode,
      monthly_income: formData.monthlyIncome,
      loan_amount: formData.loanAmount,
      loan_purpose: formData.loanPurpose,
      employment_type: formData.employmentType,
      loan_duration: formData.loanDuration,
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        alert('You have successfully applied for a loan. We will contact you soon!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          mobile: '',
          gender: '',
          maritalStatus: '',
          city: '',
          state: '',
          pincode: '',
          monthlyIncome: '',
          loanAmount: '',
          loanPurpose: '',
          employmentType: '',
          loanDuration: '',
          message: '',
        });
        setIsSubmitting(false);  // Reset submitting state

        // Navigate to the home page
        navigate('/');  // Replace '/' with the correct home page route if needed
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setIsSubmitting(false);  // Reset submitting state in case of error
      });
  };

  // Return the form only if isOpen is true
  if (!isOpen) return null;

  return (
    <div 
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center mb-10 z-50">
      <div 
      style={{
        backgroundImage: 'url(/okok2.webp)', // Reference image from the public folder
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat', // Prevent image repetition
      }}
      
      className="bg-white w-3/4 max-w-4xl p-10 rounded-lg shadow-lg relative overflow-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <h2 className="text-3xl font-semibold text-center mb-8">Loan Application Form</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Your Information */}
          <h3 className="text-2xl font-medium mb-4">Your Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="firstName" placeholder="First Name*" value={formData.firstName} onChange={handleChange} className="input p-4 rounded-md border border-gray-300 w-full" />
            <input type="text" name="lastName" placeholder="Last Name*" value={formData.lastName} onChange={handleChange} className="input p-4 rounded-md border border-gray-300 w-full" />
            <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} className="input p-4 rounded-md border border-gray-300 w-full">
              <option>Marital Status*</option>
              <option>Single</option>
              <option>Married</option>
            </select>
            <input type="email" name="email" placeholder="Email ID*" value={formData.email} onChange={handleChange} className="input p-4 rounded-md border border-gray-300 w-full" />
            <input type="text" name="city" placeholder="City*" value={formData.city} onChange={handleChange} className="input p-4 rounded-md border border-gray-300 w-full" />
            <select name="gender" value={formData.gender} onChange={handleChange} className="input p-4 rounded-md border border-gray-300 w-full">
              <option>Gender*</option>
              <option>Male</option>
              <option>Female</option>
              <option>Prefer Not to Say</option>
            </select>
            <input type="text" name="state" placeholder="State*" value={formData.state} onChange={handleChange} className="input p-4 rounded-md border border-gray-300 w-full" />
            <input type="text" name="pincode" placeholder="Pin Code*" value={formData.pincode} onChange={handleChange} className="input p-4 rounded-md border border-gray-300 w-full" />
            <input type="text" name="mobile" placeholder="Mobile Number*" value={formData.mobile} onChange={handleChange} className="input p-4 rounded-md border border-gray-300 w-full" />
          </div>

          {/* Your Loan Requirement */}
          <h3 className="text-2xl font-medium mb-4">Your Loan Requirement</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="number" name="monthlyIncome" placeholder="Monthly Income (p.a.)*" value={formData.monthlyIncome} onChange={handleChange} className="input p-4 rounded-md border border-gray-300 w-full" />
            <input type="number" name="loanAmount" placeholder="Loan Amount*" value={formData.loanAmount} onChange={handleChange} className="input p-4 rounded-md border border-gray-300 w-full" />
            <select name="loanPurpose" value={formData.loanPurpose} onChange={handleChange} className="input p-4 rounded-md border border-gray-300 w-full">
              <option>Purpose Of Loan*</option>
              <option>Personal</option>
              <option>Business</option>
              <option>Housing</option>
              <option>Education</option>
            </select>
            <select name="employmentType" value={formData.employmentType} onChange={handleChange} className="input p-4 rounded-md border border-gray-300 w-full">
              <option>Employment Type*</option>
              <option>Salaried</option>
              <option>Self-Employed</option>
              <option>Unemployed</option>
            </select>
            <input type="number" name="loanDuration" placeholder="Loan Duration (in months)*" value={formData.loanDuration} onChange={handleChange} className="input p-4 rounded-md border border-gray-300 w-full" />
          </div>

          {/* Message */}
          <textarea name="message" placeholder="Additional Message" value={formData.message} onChange={handleChange} className="input p-4 rounded-md border border-gray-300 w-full"></textarea>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-200">
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Form.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Form;
