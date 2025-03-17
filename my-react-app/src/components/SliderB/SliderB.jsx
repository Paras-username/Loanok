import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Slider = () => {
  const items = [
    {
      title: "Corporate Loans",
      description:
        "A corporate loan is a financial product provided to businesses for funding operations, expansion, or working capital. It helps cover expenses like raw materials, asset purchases, and daily costs. Businesses must meet specific eligibility requirements to qualify.",
      image: "corp.jpeg",
      link: "/corporateloan",
    },
    {
      title: "MSME Loans",
      description:
        "MSME loans are crucial for fostering entrepreneurship and innovation, which are vital for economic growth. By providing financial assistance, MSME loans help small businesses overcome financial barriers, allowing them to invest in technology, infrastructure, and human resources.",
      image: "msmepic.png ",
      link: "/msmeloan",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleReadMore = (link) => {
    // Use navigate to go to the link
    navigate(link); 
  };

  return (
    <div className="p-10">
        <div className="relative w-full h-screen max-w-7xl mx-auto overflow-hidden bg-black rounded-2xl border border-white/10">
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out
            ${currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:`url(${item.image})` }}
            
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-20 h-full flex items-center justify-center">
            <div className="max-w-2xl text-xl mx-auto text-center px-4">
              <h2 className="text-4xl font-bold mb-4 text-white">{item.title}</h2>
              <p className="mt-8 mb-6 text-white/90">{item.description}</p>
              <button
                onClick={() => handleReadMore(item.link)}
                className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors duration-300"
        aria-label="Previous slide"
      >
        <span className="text-2xl text-white">←</span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors duration-300"
        aria-label="Next slide"
      >
        <span className="text-2xl text-white">→</span>
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300
              ${currentIndex === index ? "bg-white" : "bg-white/50 hover:bg-white/70"}`}
            aria-label={`Go to slide ${index + 1}`}

          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Slider;