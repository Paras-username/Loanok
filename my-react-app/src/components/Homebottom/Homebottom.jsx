import Carousel from "../Carousel/Carousel";
import Vision from "../Vision/Vision";
import Works from "../Works/Works";


const Homebottom = () => {
  return (
    
    <div className="p-1 pt-24 mt-16 sm:p-6 sm:pt-20 bg-gradient-to-r from-[#ffffff] via-white to-[#ffffff]">
      <div className="flex justify-center text-3xl sm:text-5xl font-bold text-blue-800 ">
        <div><span className="text-green-700">Key</span> Features</div>
      </div>
      <div className="flex justify-center pt-6 text-lg sm:text-xl font-semibold">
        <div>Redefine Your Financial Goals</div>
      </div >
      <div className="flex justify-center pt-12 px-4">
  <div className="w-[1400px] bg-white text-gray-700 shadow-2xl rounded-lg border border-gray-300 flex flex-wrap justify-evenly items-center gap-6 py-6">
    {/* Section 1 */}
    <div className="text-center flex flex-col items-center max-w-xs">
      <img
        src="/person1.png"
        alt="Flexible EMIs"
        className="w-20 h-18 mx-auto"
      />
      <h2 className="text-xl font-bold mt-3 text-zinc-700">Personalized Loan</h2>
      <p className="text-zinc-500 text-lg font-medium">
        Get expert help, anytime, to secure your ideal loan.
      </p>
    </div>

    {/* Section 2 */}
    <div className="text-center flex flex-col items-center max-w-xs">
      <img
        src="/tick1.png"
        alt="Flexible EMIs"
        className="w-16 h-16 mx-auto"
      />
      <h2 className="text-xl font-bold mt-3 text-zinc-700">One Form for All Loans</h2>
      <p className="text-zinc-500 text-lg font-medium">
        One platform simplifies access to multiple loan types.
      </p>
    </div>

    {/* Section 3 */}
    <div className="text-center flex flex-col items-center max-w-xs">
      <img
        src="/hand1.png"
        alt="Fast Approvals"
        className="w-17 h-16 mx-auto"
      />
      <h2 className="text-xl font-bold mt-3 text-zinc-700">Fast Approvals</h2>
      <p className="text-zinc-500 text-lg font-medium">
        Fast processing for immediate access to funds.
      </p>
    </div>

    {/* Section 4 */}
    <div className="text-center flex flex-col items-center max-w-xs">
      <img
        src="/money.png"
        alt="No Hidden Charges"
        className="w-16 h-16 mx-auto"
      />
      <h2 className="text-xl font-bold mt-3 text-zinc-700">No Hidden Charges</h2>
      <p className="text-zinc-500 text-lg font-medium">
        Clear and simple with complete transparency.
      </p>
    </div>
  </div>
</div>

<div className="flex justify-center px-4">
  <div className="w-[1400px] bg-white text-gray-700 shadow-2xl rounded-lg border border-gray-300 flex flex-wrap justify-evenly items-center gap-6 py-6">
    {/* Section 1 */}
    <div className="text-center flex flex-col items-center max-w-xs">
      <img
        src="/phone.png"
        alt="Loan EMI Calculator"
        className="w-16 h-14 mx-auto"
      />
      <h2 className="text-xl font-bold mt-3 text-zinc-700">Loan EMI Calculator</h2>
      <p className="text-zinc-500 text-lg font-medium">
        Plan your loan easily with an in-app Calculator for EMI estimates.
      </p>
    </div>

    {/* Section 2 */}
    <div className="text-center flex flex-col items-center max-w-xs">
      <img
        src="/clock1.png"
        alt="24/7 Accessibility"
        className="w-17 h-16 mx-auto"
      />
      <h2 className="text-xl font-bold mt-3 text-zinc-700">24/7 Accessibility</h2>
      <p className="text-zinc-500 text-lg font-medium">
        Apply for loans anytime, anywhere—from your convenience.
      </p>
    </div>

    {/* Section 3 */}
    <div className="text-center flex flex-col items-center max-w-xs">
      <img
        src="/security.png"
        alt="Safe and Secure"
        className="w-17 h-16 mx-auto"
      />
      <h2 className="text-xl font-bold mt-3 text-zinc-700">Safe and Secure</h2>
      <p className="text-zinc-500 text-lg font-medium">
        Your data and transactions are always secure.
      </p>
    </div>

    {/* Section 4 */}
    <div className="text-center flex flex-col items-center max-w-xs">
      <img
        src="/support1.png"
        alt="Friendly Customer Support"
        className="w-17 h-16 mx-auto"
      />
      <h2 className="text-xl font-bold mt-3 text-zinc-700">
        Friendly Customer Support
      </h2>
      <p className="text-zinc-500 text-lg font-medium">
        Always ready to help with your questions or concerns.
      </p>
    </div>
  </div>
</div>


<div className="mt-16">
  <Works/>
  <Vision/>
  <Carousel/>
</div>






    </div>
  );
};

export default Homebottom;
