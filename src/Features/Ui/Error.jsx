// import {  useRouteError } from "react-router-dom";
// import LinkButton from "./LinkButton";

import Button from "./Button";

function NotFound() {
  // const error = useRouteError();

  return (
    // <div>
    //   <h1>Something went wrong 😢</h1>
    //   <p>{error.data || error.message}</p>
    //   <LinkButton to={-1}>&larr; Go back</LinkButton>
    // </div>
    <div className="relative">
      <div className=" flex  justify-center pt-44">
        <div className="w-1/2 md:w-3/4 lg:w-auto">
          <img src="../assets/error-img.png" alt="404" />
        </div>
        <div className="absolute sm:right-[28%] md:right-[25%] lg:right-[35%] sm:top-32 right-[21%] top-32">
          <img
            src="../assets/error-top.png"
            alt="icon"
            className="transition duration-1000 ease-in-out hover:scale-125  md:w-auto w-1/2 "
          />
        </div>
      </div>
      <div className="text-center mt-10">
        <h1 className="md:text-5xl text-xl font-extrabold mb-7 text-stone-700">Page Not Found</h1>
        <h3 className="mb-10 md:text-xl text-base font-extrabold text-stone-400 px-4"> We are sorry, The page you are looking for does not currently exist .</h3>
        <Button type='primaryYellow' to='/' className='text-center' >BACK TO HOMEPAGE</Button>
      </div>
    </div>
  );
}

export default NotFound;
