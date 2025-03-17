import { motion } from "framer-motion";

const images = [
  "axis.png",
  "sbilogo.png",
  "centralbank.png",
  "pnb.png",
  "canara.png",
  "boi.png",
  "icici.png",
  "crgb.png",
  "kotak.png",
  "union.png",
  "uco.png",
  "idfc.png",
  "hdfc.png",
  "lichfl.webp",
];

const Carousel = () => {
  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        Associated With Public & Private Banks
      </motion.h2>

      

        {/* Carousel */}
        <div className="relative overflow-hidden h-[150px] sm:h-[180px] md:h-[220px] flex items-center">
          <motion.div
            className="flex space-x-6 sm:space-x-8"
            animate={{ x: ["10%", "-55%"] }}
            transition={{ 
              ease: "linear", 
              repeat: Infinity,
              repeatType: "loop", 
              duration: 12
            }}
          >
            {images.map((src, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 24px -6px rgba(0, 100, 255, 0.3)"
                }}
                className="w-[140px] h-[110px] sm:w-[180px] sm:h-[140px] md:w-[220px] md:h-[170px] border border-blue-100 rounded-2xl shadow-xl bg-white overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-blue-200 hover:shadow-2xl"
              >
                <img
                  src={src}
                  alt={`Bank Logo ${index + 1}`}
                  className="w-full h-full object-contain p-4 hover:saturate-100 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Animated Glow Effect */}
        <div className="absolute inset-0 bg-radial-gradient from-blue-200 to-transparent opacity-20 pointer-events-none" />
      </div>
    
  );
};

export default Carousel;