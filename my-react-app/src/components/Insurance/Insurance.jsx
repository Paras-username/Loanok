

const Insurance = () => {
  return (
    <div className="bg-gradient-to-r from-[#f2efe4] to-[#e3dacb] ">
      {/* Header Section */}
      <div className="pt-14">
        <div className="text-slate text-3xl sm:text-5xl font-bold max-w-6xl text-center mx-auto">
          Insurance Made Easy - Protection Made Strong
        </div>
        <div className="text-slate text-2xl mt-7 p-1 font-medium max-w-lg text-center mx-auto">
          What matters most to you?
        </div>
      </div>

      {/* Insurance Cards Section */}
      <div className="flex flex-wrap justify-center gap-10 mt-14">
        <a href="/lifeinsurance" className="transform transition duration-300 hover:scale-105">
          <div className="relative w-60 h-56 bg-gradient-to-r from-[#968273] to-[#74665c] rounded-xl shadow-lg overflow-visible">
            <p className="text-center text-2xl font-medium text-white pt-3">Life Insurance</p>
            <div className="bg-gradient-to-r from-[#4e3e2e] to-[#4e3e2e] border text-center text-sm w-fit mx-auto text-white p-1 px-6 rounded-2xl mt-3">
              Life Covered
            </div>
            <img
              src="lifelogo.png"
              alt="Life Insurance"
              className="absolute -bottom-6 -right-16 w-30 h-30 object-contain"
            />
          </div>

        </a>

        <a href="/genralinsurance" className="transform transition duration-300 hover:scale-105">
          <div className="relative w-60 h-56 bg-gradient-to-r from-[#968273] to-[#74665c] rounded-xl shadow-lg overflow-visible">
            <p className="text-center text-2xl font-medium text-white pt-3">General Insurance</p>
            <div className="bg-gradient-to-r from-[#4e3e2e] to-[#4e3e2e] border text-center text-sm w-fit mx-auto text-white p-1 px-6 rounded-2xl mt-3">
              Shield Your Assets
            </div>
            <img
              src="generallogo.png"
              alt="Life Insurance"
              className="absolute -bottom-6 -right-20 w-30 h-30 object-contain"
            />
          </div>
        </a>

        <a href="/healthinsurance" className="transform transition duration-300 hover:scale-105">
          <div className="relative w-60 h-56 bg-gradient-to-r from-[#968273] to-[#74665c] rounded-xl shadow-lg overflow-visible">
            <p className="text-center text-2xl font-medium text-white pt-3">Health Insurance</p>
            <div className="bg-gradient-to-r from-[#4e3e2e] to-[#4e3e2e] border text-center text-sm w-fit mx-auto text-white p-1 px-6 rounded-2xl mt-3">
              Care Assured
            </div>
            <img
              src="healthlogo.png"
              alt="Life Insurance"
              className="absolute -bottom-7 -right-20 w-30 h-30 object-contain"
            />
          </div>
        </a>

        <a href="/homeinsurance" className="transform transition duration-300 hover:scale-105">
          <div className="relative w-60 h-56 bg-gradient-to-r from-[#968273] to-[#74665c] rounded-xl shadow-lg overflow-visible">
            <p className="text-center text-2xl font-medium text-white pt-3">Home Insurance</p>
            <div className="bg-gradient-to-r from-[#4e3e2e] to-[#4e3e2e] border text-center text-sm w-fit mx-auto text-white p-1 px-6 rounded-2xl mt-3">
              Protect Shelter
            </div>
            <img
              src="homelogo.png"
              alt="Life Insurance"
              className="absolute -bottom-3 -right-20 w-26 h-26 object-contain"
            />
          </div>
        </a>

        <a href="/vehicleinsurance" className="transform transition duration-300 hover:scale-105">
          <div className="relative w-60 h-56 bg-gradient-to-r from-[#968273] to-[#74665c] rounded-xl shadow-lg overflow-visible">
            <p className="text-center text-2xl font-medium text-white pt-3">Vehicle Insurance</p>
            <div className="bg-gradient-to-r from-[#4e3e2e] to-[#4e3e2e] border text-center text-sm w-fit mx-auto text-white p-1 px-6 rounded-2xl mt-3">
              Safe Journey
            </div>
            <img
              src="scooterlogo.png"
              alt="Life Insurance"
              className="absolute -bottom-3 -right-20 w-26 h-26 object-contain"
            />
          </div>
        </a>
      </div>


      {/* Footer Section */}
      <div className="text-slate-750 bg-[#cdc4bb] border text-3xl mt-14 p-4 font-bold w-full text-center">
        Save 50% On Your Life Insurance Policy
      </div>


     <div className="mt-16 p-4">
  <div className="flex flex-col md:flex-row justify-center items-center gap-x-44 p-6">
    {/* Left Side - Grid Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 grid-rows-4 gap-6 max-w-xl w-full">
      {[
        {
          title: "ENSURE FINANCIAL SECURITY",
          text: " Provides a financial cushion against unexpected expenses like medical emergencies, accidents, or job loss, while helping manage daily expenses during challenging times.",
          bg: "bg-white",
          textColor: "text-black",
        },
        {
          title: "PROTECT YOUR LOVED ONES",
          text: "Provides your family with financial stability in your absence, ensuring they maintain their lifestyle without financial stress through life insurance.",
          bg: "bg-[#7c746e]",
          textColor: "text-white",
        },
        {
          title: "SUPPORT LONG TERM GOALS",
          text: " Certain policies offer both protection and savings, helping you plan for major milestones like buying a home or your child’s education.",
          bg: "bg-[#7c746e]",
          textColor: "text-white",
        },
        {
          title: "COVERS MEDICAL EMERGENCIES",
          text: "Health insurance ensures affordable access to quality healthcare, covering medical expenses without draining your hardearned savings",
          bg: "bg-white",
          textColor: "text-black",
        },
        {
          title: "ENCOURAGES FINANCIAL DISCIPLINE",
          text: "Protects valuable assets like your home, car, and business against damage, theft, natural disasters, or unexpected financial loss, ensuring long-term security.",
          bg: "bg-white",
          textColor: "text-black",
        },
        {
          title: "SECURES YOUR ASSETS",
          text: " Premiums paid towards various insurance policies are eligible for tax deductions, helping you save money while securing your future.",
          bg: "bg-[#7c746e]",
          textColor: "text-white",
        },
        {
          title: "OFFERS TAX BENEFITS",
          text: " Regular premium payments instill disciplined saving habits, ensuring long-term stability and helping you build a secure, stress-free financial future.",
          bg: "bg-[#7c746e]",
          textColor: "text-white",
        },
        {
          title: "ACCESS VALUE BENEFITS",
          text: " Policies often include perks like wellness programs, discounts, free health check-ups, preventive care benefits, and lifestyle rewards.",
          bg: "bg-white",
          textColor: "text-black",
        },
      ].map((item, index) => (
        <div
          key={index}
          className={`border rounded-3xl p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl ${item.bg}`}
        >
          <p className={`text-xl font-bold text-left ${item.textColor} px-4`}>{item.title}</p>
          <p className={`text-sm text-left px-4 pt-2 ${item.textColor}`}>{item.text}</p>
        </div>
      ))}
    </div>

    {/* Right Side - Text Blocks */}
    <div className="mt-10 max-w-lg w-full text-center md:text-right">
      <div className="text-white bg-[#9b958d] text-5xl md:text-7xl font-bold tracking-[-0.09em] border rounded-3xl p-8 transform transition duration-300 hover:scale-105 hover:shadow-xl">
        WHY INSURANCE MATTERS
      </div>
      <div className="text-gray-700 mt-8 text-2xl md:text-4xl font-medium p-6">
        Zaroorat Bhi, Suraksha Bhi <br /> Insurance Hi
      </div>
    </div>
  </div>
</div>



<div className="mt-10 p-6 md:p-10">
  <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
    {/* Left Side */}
    <div className="max-w-xl text-center md:text-left">
      <div className="bg-[#9b958d] text-white text-6xl md:text-8xl font-bold pl-5 py-3 tracking-[-0.08em] border rounded-3xl transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <p>WHAT</p>
        <p>WE</p>
        <p>OFFER</p>
      </div>
      <div className="text-slate mt-4 text-xl md:text-3xl font-medium max-w-lg p-6 md:p-10">
        Caring You For Better Journey
      </div>
    </div>

    {/* Right Side (Image Container) */}
    <div className="w-full md:w-[50%] h-72 md:h-[650px] rounded-3xl overflow-hidden mt-6 md:mt-0">
      <img src="offers.png" alt="Offer Image" className="w-full h-full object-cover" />
    </div>
  </div>
</div>







<div className="mt-10 p-6 md:p-10">
  {/* VISION Title */}
  <div className="flex justify-center">
    <div className="bg-[#9b958d] text-white text-6xl md:text-8xl font-bold border rounded-3xl tracking-[-0.09em] px-10 py-2">
      VISION
    </div>
  </div>

  {/* Vision Description */}
  <div className="bg-gradient-to-r from-[#cdc4bb] to-[#9b958d] text-white text-base md:text-lg max-w-6xl border rounded-3xl text-center mx-auto py-6 px-6 mt-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
    At LoanOK, insurance is more than just a policy—it’s a promise of protection and peace of mind. We safeguard you,
    your family, and your assets with affordable, transparent, and hassle-free coverage tailored to your needs. Partnering
    with top insurers, we ensure quick claims support and honest service. We’re driven, we’re fearless, stepping forward
    with determination to deliver excellence at every step. We’re committed, we’re unstoppable, moving with purpose
    and confidence to secure your future. With LoanOK, you’re part of a family that genuinely cares about your well-being.
  </div>

  {/* Vision Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto mt-10">
    {/* Card 1 */}
    <div className="border rounded-3xl text-center bg-white pt-4 pb-8 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <p className="text-xl tracking-[-0.05em] font-bold text-left px-6 md:px-10">
        THE MOST TRUSTED INSURANCE PARTNER
      </p>
      <p className="text-sm md:text-xs text-left px-6 md:px-10 mt-2">
        We aim to be the first choice for individuals and businesses through reliable solutions, ethical practices, and exceptional service. By understanding your needs, we provide tailored support that builds trust and lasting relationships.
      </p>
    </div>

    {/* Card 2 */}
    <div className="border rounded-3xl text-center bg-[#7c746e] pt-4 pb-8 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <p className="text-xl tracking-[-0.05em] font-bold text-left px-6 md:px-10 text-white">
        TECHNOLOGY THAT SIMPLIFIES
      </p>
      <p className="text-sm md:text-xs text-left px-6 md:px-10 text-white mt-2">
        By embracing cutting-edge technology, we enhance accessibility, simplify processes, improve efficiency, ensure faster services, and deliver a seamless, user-friendly, digital-first experience.
      </p>
    </div>

    {/* Card 3 */}
    <div className="border rounded-3xl text-center bg-[#7c746e] pt-4 pb-8 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <p className="text-xl tracking-[-0.05em] font-bold text-left px-6 md:px-10 text-white">
        EMPOWERING PEOPLE AND PARTNERSHIPS
      </p>
      <p className="text-sm md:text-xs text-left px-6 md:px-10 text-white mt-2">
        Create a thriving workplace that motivates employees, fosters personal growth, encourages innovation, enhances collaboration, and strengthens long-term, sustainable partnerships for mutual success and development.
      </p>
    </div>

    {/* Card 4 */}
    <div className="border rounded-3xl text-center bg-white pt-4 pb-8 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <p className="text-xl tracking-[-0.05em] font-bold text-left px-6 md:px-10">
        COMMITMENT TO SOCIAL IMPACT
      </p>
      <p className="text-sm md:text-xs text-left px-6 md:px-10 mt-2">
        Contribute meaningfully to society by promoting financial security, safety, and well-being for all through community initiatives, inclusive growth, educational programs, environmental sustainability, and long-term development efforts.
      </p>
    </div>

    {/* Card 5 */}
    <div className="border rounded-3xl text-center bg-white pt-4 pb-8 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <p className="text-xl tracking-[-0.05em] font-bold text-left px-6 md:px-10">
        INNOVATIVE PRODUCT RANGE
      </p>
      <p className="text-sm md:text-xs text-left px-6 md:px-10 mt-2">
        Offer a diverse portfolio of solutions tailored to meet the evolving needs of all customer segments, ensuring flexibility, enhanced value, long-term satisfaction, superior customer-centric experiences, and lasting relationships.
      </p>
    </div>

    {/* Card 6 */}
    <div className="border rounded-3xl text-center bg-[#7c746e] pt-4 pb-8 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <p className="text-xl tracking-[-0.05em] font-bold text-left px-6 md:px-10 text-white">
        ENHANCING LONG-TERM VALUE
      </p>
      <p className="text-sm md:text-xs text-left px-6 md:px-10 text-white mt-2">
        Our focus is on creating lasting value that strengthens financial security, peace of mind, long-term stability, customer satisfaction, sustainable growth, and enduring success for individuals and businesses alike.
      </p>
    </div>
  </div>




  <div className="mt-20">
  {/* OUR PROCESS Title */}
  <div className="bg-[#9b958d] text-white p-3 max-w-xs sm:max-w-xl text-center mx-auto sm:ml-auto sm:mr-28 border rounded-3xl text-4xl sm:text-8xl tracking-[-0.05em] sm:tracking-[-0.09em] font-bold">
  OUR PROCESS
</div>

  {/* Process Cards */}
  <div className="flex flex-wrap justify-center gap-6 mt-20">
    {/* Card 1 - ASSESSMENT */}
    <div className="w-72 h-60 bg-[#ffffff] rounded-2xl p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <p className="text-left text-slate text-2xl font-bold mt-4 px-4 tracking-[-0.07em]">ASSESSMENT</p>
      <p className="text-sm font-medium text-slate p-2 px-4 tracking-tight">
        We begin with a thorough consultation to understand your unique needs, financial goals, and risk factors. 
        This detailed evaluation helps us identify the most suitable coverage options tailored to your specific situation.
      </p>
    </div>

    {/* Card 2 - RECOMMENDATION */}
    <div className="w-72 h-60 bg-[#7c746e] rounded-2xl p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <p className="text-left text-white text-2xl font-bold mt-4 px-4 tracking-[-0.07em]">RECOMMENDATION</p>
      <p className="text-sm font-medium text-white p-2 px-4 tracking-tight">
        Based on your assessment, we suggest the best insurance plans that align with your financial security, 
        lifestyle needs, and future goals. Our expert guidance ensures you make informed decisions.
      </p>
    </div>

    {/* Card 3 - ACTIVATION */}
    <div className="w-72 h-60 bg-[#ffffff] rounded-2xl p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <p className="text-left text-slate text-2xl font-bold mt-4 px-4 tracking-[-0.07em]">ACTIVATION</p>
      <p className="text-sm font-medium text-blue-950 p-2 px-4 tracking-tight">
        After selecting the right plan, we assist you with the application process, ensuring all details are accurate 
        and submitted on time. Our team works to streamline approvals, so you get covered quickly and hassle-free.
      </p>
    </div>

    {/* Card 4 - SUPPORT */}
    <div className="w-72 h-60 bg-[#7c746e] rounded-2xl p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <p className="text-left text-white text-2xl font-bold mt-4 px-4 tracking-[-0.07em]">SUPPORT</p>
      <p className="text-sm font-medium text-white p-2 px-4 tracking-tight">
        Our relationship doesn’t end after enrollment. We provide ongoing support, assisting with claims, 
        policy updates, and any questions you may have, ensuring you always have the protection you need.
      </p>
    </div>
  </div>

  {/* Footer Tagline */}
  <div className="text-slate p-7 max-w-sm text-xl mx-auto text-center sm:max-w-2xl sm:text-center sm:mr-auto mt-14 sm:ml-28 border rounded-3xl sm:text-3xl tracking-[-0.06em] font-bold">
    <p className="sm:text-left">INSURANCE HAI ZAROORI,</p>
    <p className="mt-2">LIFE MEIN LAAYEIN HUMARI GUARANTEE!</p>
  </div>


 </div>
  </div>

    </div>

  )
}

export default Insurance
