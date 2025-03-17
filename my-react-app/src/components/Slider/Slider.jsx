import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Slider = () => {
  const items = [
    {
      title: "Instant Personal Loan",
      description:
        "Need money fast? An instant loan from LoanOK is a quick and easy way to access funds, often within minutes. Perfect for urgent financial needs like medical emergencies, home repairs, or unexpected expenses.",
      image: "Instantnew.png",
      link: "/instance",
    },
    {
      title: "Vehicle Loan",
      description:
        "A vehicle loan lets you borrow funds to purchase a car, motorcycle, or truck, with the vehicle as collateral. Repayments are made in fixed monthly installments over a specified period, offering an affordable way to own a vehicle.",
      image: "carslider.png",
      link: "/Vehicle",
    },
    {
      title: "Debt Consolidation Loan",
      description:
        "A debt consolidation loan combines multiple debts into one, simplifying repayments with a single monthly payment. It’s ideal for those with high-interest debts, like credit cards, helping to better manage finances.",
      image: "debtslider.png",
      link: "/dcloan",
    },
    {
      title: "Marriage Loan",
      description:
        "Your dream wedding, your way. A Marriage Loan from LoanOK helps you celebrate your special day without financial stress. Get quick approval and easy repayment options to fund your wedding expenses.",
      image: "shaadipic.jpeg",
      link: "/marriageloan",
    },
    {
      title: "Gold Loan",
      description:
        "A gold loan is a secured loan where you pledge your gold as collateral for quick funds. It offers lower interest rates, minimal documentation, and flexible repayment options while keeping your gold safe.",
      image: "goldslider.png",
      link: "/goldloan",
    },
    {
      title: "Credit Card Repayment Loan",
      description:
        "A Credit Card Repayment Loan from LoanOK helps consolidate high credit card debt with quick approval and flexible repayment options, making it easier to manage and regain control of your finances.",
      image: "https://www.paymeindia.in/blog/wp-content/uploads/2024/01/credit-card.png",
      link: "/ccrloan",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const navigate = useNavigate();

  const nextSlide = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleReadMore = (link) => {
    navigate(link);
  };

  return (
    <div className="p-2 sm:p-10">
      <div className="max-w-7xl mx-auto"> {/* Added container max-width and centering */}
        <div className="relative w-full h-[90vh] overflow-hidden bg-black rounded-2xl border border-white/10 shadow-xl shadow-gray-950/30">
          {items.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] 
                ${currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`

              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000 ease-out"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent" />
              <div className="relative z-20 h-full flex items-center justify-center">
                <div className="max-w-2xl mx-auto text-center px-4 space-y-6">
                  <h2 className={`text-4xl md:text-5xl font-bold text-white transform transition-all duration-700 delay-150 ease-out ${
                    currentIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    {item.title}
                  </h2>
                  <p className={`text-base md:text-lg text-white/90 transform transition-all duration-700 delay-300 ease-out ${
                    currentIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    {item.description}
                  </p>
                  <button
                    onClick={() => handleReadMore(item.link)}
                    className={`mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium transform transition-all duration-500 delay-500 ease-out hover:from-blue-600 hover:to-blue-700 hover:scale-105 hover:shadow-lg ${
                      currentIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
  
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-lg transition-all duration-300 hover:scale-105"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
  
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-lg transition-all duration-300 hover:scale-105"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
  
          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 ease-out ${
                  currentIndex === index 
                    ? 'w-6 bg-white/90' 
                    : 'w-3 bg-white/50 hover:bg-white/70 hover:w-4'
                }`}
                aria-label={`Go to slide ${index + 1}`}

              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;