import { motion } from "framer-motion";
import VisionForm from "../VisionForm/VisionForm";

const Vision = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  return (
    <div className="p-2 sm:p-6 mt-10">
      {/* Our Vision Section */}
      <motion.div
        className="flex flex-col items-center justify-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="border text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 max-w-[220px] w-full mx-auto text-center text-white p-2 rounded-lg shadow-lg"
          variants={fadeInUp}
        >
          Our Vision
        </motion.div>

        <motion.div
          className="p-6 mt-4 bg-white rounded-md shadow-lg text-center max-w-[900px] w-full hover:shadow-xl transition-shadow duration-300"
          variants={fadeInUp}
        >
          <p className="text-lg font-semibold text-blue-800 mb-5">
            Jab Bhi Paiso Ki Baat, LoanOK Hai Aapke Saath!
          </p>
          <p className="text-base font-medium text-gray-600">
            At LoanOK, our vision is to simplify borrowing and empower dreams 🚀
          </p>
          <p className="text-base font-medium text-gray-600">
            We connect you with trusted banks, ensuring fast approvals and hassle-free loans tailored to your needs.
          </p>
          <p className="text-base font-medium text-gray-600">
            With our seamless process, get the best rates and faster funds—because your time matters!
          </p>
          <p className="text-base font-medium text-gray-600">
            Whenever money is on your mind, LoanOK is always by your side!
          </p>
        </motion.div>
      </motion.div>

      {/* Three Cards Section */}
      <motion.div
        className="flex flex-col md:flex-row justify-center px-6 mt-20 gap-y-8 md:gap-6 max-w-[1000px] mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section 1 */}
        <motion.div
          className="flex-1 text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          variants={fadeInUp}
        >
          <h1 className="text-lg sm:text-xl font-bold text-blue-800 max-w-[15rem] mx-auto p-2">
            Transparency
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Clear Terms, No Surprises, No Hidden Fees - Straightforward loan agreements for your peace of mind.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          className="flex-1 text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          variants={fadeInUp}
        >
          <h1 className="text-lg sm:text-xl font-bold text-blue-800 max-w-[15rem] mx-auto p-2">
            Reliability
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            We collaborate with reliable financial institutions to deliver credible and high-quality services.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          className="flex-1 text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          variants={fadeInUp}
        >
          <h1 className="text-lg sm:text-xl font-bold text-blue-800 max-w-[15rem] mx-auto p-2">
            Customer-Centricity
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Customer First - We prioritize your needs with flexible repayment plans and competitive interest rates.
          </p>
        </motion.div>
      </motion.div>

      {/* Connect With Section */}
      <motion.div
        className="flex flex-col sm:flex-row items-center sm:justify-center md:justify-start md:pl-20 mt-28"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="border text-lg sm:text-xl font-bold bg-gradient-to-r from-green-700 to-green-600 text-white w-full max-w-[250px] text-center p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          variants={fadeInUp}
        >
          Connect With
        </motion.div>
        <motion.div
          className="border text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 text-white w-full max-w-xs text-center p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          variants={fadeInUp}
        >
          Our Financial Experts
        </motion.div>
      </motion.div>

      {/* Expert Advisors Section */}
      <motion.div
        className="flex items-center justify-center md:justify-start md:pl-16 mt-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-lg sm:text-2xl font-semibold w-full max-w-lg text-center px-8 text-gray-800">
          Our expert financial advisors are here to help you anytime.
        </div>
      </motion.div>

      {/* Vision Form and Image Section */}
      <motion.div
        className="relative flex flex-col md:flex-row items-center md:items-start justify-between px-4 sm:px-6 md:px-10 lg:px-16 mt-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Vision Form */}
        <motion.div
          className="flex-1 min-h-[400px] mt-6 md:mt-0"
          variants={fadeInUp}
        >
          <VisionForm />
        </motion.div>

        {/* Image Positioned to the Right */}
        <motion.div
          className="w-[250px] h-[150px] sm:w-[250px] sm:h-[200px] md:w-[300px] md:h-[250px] lg:w-[380px] lg:h-[300px] mt-6 md:mt-0 md:ml-8 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          variants={fadeInUp}
        >
          <img
            src="/visionpic.webp"
            alt="Flexible EMIs"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Vision;