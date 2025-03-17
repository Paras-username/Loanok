import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Works = () => {
  // Animation variants for steps
  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  // Animation variants for video
  const videoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, delay: 0.5 } },
  };

  // Staggered animation for steps
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Intersection observer for animations
  const [ref, inView] = useInView({ triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="bg-gradient-to-br from-white-50 to-green-50 py-16">
      <div className="pt-1 text-2xl font-bold text-center sm:pt-4 sm:text-base md:pt-10 md:text-5xl">
        <span className="text-blue-800">Get Your Loan in</span>{" "}
        <span className="text-green-800">4 Easy Steps</span>
      </div>
      <div className="mt-2 text-m font-bold text-center text-blue-900 sm:mt-4 sm:text-sm md:mt-5 md:text-3xl">
        Instant{" "}
        <span className="border p-1 bg-gradient-to-r from-green-600 to-green-800 text-white sm:p-2 rounded-lg">
          Loan
        </span>{" "}
        Anywhere, Anytime.
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center md:items-start mt-12 px-4 py-8 md:px-10 lg:px-24">
        {/* Steps Section */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {[
            {
              icon: "/Login.png",
              title: "Step 1: Sign Up & Login",
              description: "Visit the LoanOK website and create an account or log in.",
            },
            {
              icon: "/calling1.png",
              title: "Step 2: Get Expert Consultation",
              description: "Connect with our loan advisors for personalized guidance.",
            },
            {
              icon: "/Apply.png",
              title: "Step 3: Apply for a Loan",
              description: "Choose the best loan option and submit your application.",
            },
            {
              icon: "/Mark.png",
              title: "Step 4: Track Your Application",
              description: "Monitor your loan status with your application number.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="flex items-center md:items-start bg-white p-4 rounded-xl border-2 border-transparent hover:border-gradient-to-r hover:from-blue-500 hover:to-green-500 shadow-md hover:shadow-lg transition-all duration-300"
              variants={stepVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-12 h-12 md:w-16 md:h-16"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold md:text-xl text-blue-900">{step.title}</h3>
                <p className="text-sm text-gray-600 md:text-lg">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center md:justify-end"
          variants={videoVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="relative w-[300px] h-[600px] sm:w-[400px] sm:h-[400px] md:w-[300px] md:h-[600px] lg:w-[650px] lg:h-[500px]">
            <video
              src="/workedit.mp4"
              className="w-full h-full object-contain "
              autoPlay
              
              muted
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;