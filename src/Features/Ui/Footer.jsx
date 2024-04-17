const Footer = () => {
  return (
    <>
      <div className="divide-y divide-stone-200 mt-12 mx-12 md:mx-36 ">
        <div className="flex text-center flex-col divide-y divide-stone-200 sm:divide-y-0 sm:flex-row justify-between md::justify-around">
          <div className="text-stone-600 my-4 md:my-0 font-bold text-xl md:text-2xl tracking-tighter pe-7 animate-fade-right animate-duration-[3000ms] animate-delay-[2000ms]">
            <h2>AVAILABLE DAILY</h2>
            <p className="text-base font-semibold mt-5">12 P.M - 2 A.M</p>
          </div>

          <div className=" flex flex-col justify-center my-5 md:my-0 md:ps-4 animate-fade-down animate-duration-[3000ms] animate-delay-[2000ms]">
            <div className="md:mt-0 mt-2">
              <img src="./src/assets/Pizza-Logo.png" alt="logo" className="w-1/2 md:w-2/3 mx-auto"/>
            </div>
            <div className="text-base font-semibold mt-5 text-stone-600">
              <p>
                <span>
                  <i className="fa-solid fa-map-location-dot me-2"></i>
                </span>
                The 5th Settlement,
              </p>
              <p> New Cairo, Egypt.</p>
            </div>
          </div>
          <div className="animate-fade-left animate-duration-[3000ms] animate-delay-[2000ms]">
            <div className="text-stone-600 font-bold text-xl md:text-2xl tracking-tighter mt-5 md:mt-0">
              <p>CONNECT WITH US NOW</p>
            </div>
            <div className="mt-7 flex justify-center">
              <ul className="flex items-center justify-center gap-x-2 lg:justify-start">
                <li className="flex h-10 w-10 cursor-pointer items-center justify-center  rounded-lg bg-[#3b579d] text-white shadow-md hover:bg-[#fbb200] hover:duration-500">
                  <i className="fa-brands fa-facebook-f"></i>
                </li>
                <li className="flex h-10 w-10 cursor-pointer items-center justify-center  rounded-lg bg-[#cc2127] text-white shadow-md hover:bg-[#fbb200] hover:duration-500">
                  <i className="fa-brands fa-tiktok"></i>
                </li>
                <li className="flex h-10 w-10 cursor-pointer items-center justify-center  rounded-lg bg-[#2caae1] text-white shadow-md hover:bg-[#fbb200] hover:duration-500">
                  <i className="fa-brands fa-x-twitter"></i>
                </li>
                <li className="flex h-10 w-10 cursor-pointer items-center  justify-center rounded-lg bg-[#dc4a38] text-white shadow-md hover:bg-[#fbb200] hover:duration-500">
                  <i className="fa-brands fa-instagram"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <div className="pt-10 text-center text-base font-semibold text-stone-600 animate-fade-up animate-duration-[3000ms] animate-delay-[2000ms]"><p>Copyright © 2024 Pizza4U</p></div>
      </div>
    </>
  );
};

export default Footer;
