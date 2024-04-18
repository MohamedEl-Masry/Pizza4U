import { Link } from 'react-router-dom';
import Map from './Map';
import LinkButton from './LinkButton';
import Footer from './Footer';
import daily_fresh from '../../assets/daily_fresh.png';
import contact from '../../assets/contact.jpg';
import pizza_bg from '../../assets/pizza_bg.png';





const Contact = () => {
  return (
    <>
      <section className="relative px-5 py-16  sm:px-16">
        <div className="animate-fade-right pt-5 animate-duration-[3000ms]">
          <LinkButton to="/">HOME</LinkButton>
          <span className="text-xl font-bold  text-stone-500"> / </span>
          <span className="text-xl font-bold text-red-500">Contact</span>
        </div>

        <div className="animate-fade-right pt-10 animate-duration-[3000ms]">
          <div className="mb-5 animate-fade-right animate-duration-[3000ms] animate-once">
            <h3 className="line_stone1 relative mt-7 text-sm font-bold text-stone-500 sm:text-xl lg:space-x-2">
              DON&apos;T HESITATE, CONTACT US!
            </h3>
            <h1 className="my-3 text-3xl font-extrabold text-stone-700 sm:my-9 sm:text-7xl">
              CONTACT
            </h1>
            <p className="w-1/2 space-y-10 whitespace-break-spaces text-sm font-normal text-stone-400  sm:text-base sm:font-medium sm:leading-7">
              We are delighted to fulfill our customers&apos;wishes and open the
              doors to new orders full of surprises.
            </p>
          </div>
        </div>
        <div className="absolute -right-5 bottom-16 flex w-1/2 animate-fade-left justify-end animate-duration-[3000ms]  md:top-14 lg:w-auto ">
          <img
            src={daily_fresh}
            alt="fresh"
            className="rotate-180"
          />
        </div>
      </section>
      <section className="-mx-5 bg-white px-5  py-16 sm:px-16 md:pb-8 md:pt-28">
        <div className="mx-auto mb-5 md:px-10 lg:w-11/12">
          <div className="justify-between  lg:flex">
            <div className="animate-fade-right pt-12 animate-duration-[3000ms] lg:w-3/12">
              <div className="mb-10 text-center lg:text-left">
                <h4 className="line_stone2 relative mb-7 text-lg font-semibold text-stone-700">
                  ADDRESS
                </h4>
                <p className=" font-bold text-stone-600">
                  <span>
                    <i className="fa-solid fa-map-location-dot"></i>
                  </span>{' '}
                  The 5th Settlement,{' '}
                </p>
                <p className="ps-7 font-bold text-stone-600">
                  New Cairo, Egypt.
                </p>
              </div>
              <div className="my-14 text-center lg:text-left">
                <h4 className="line_stone2 relative mb-7 text-lg font-semibold text-stone-700">
                  PHONE
                </h4>
                <p className=" font-bold text-stone-600">
                  {' '}
                  <span>
                    <i className="fa-solid fa-store"></i>
                  </span>{' '}
                  Tel.: +(373) 798 86 677
                </p>
              </div>
              <div className="my-2">
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
            <div className="animate-fade-left pt-10 animate-duration-[3000ms] lg:w-7/12">
              <div className="relative z-0 h-full flex-1 rounded-3xl">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="-mx-5 bg-white px-5  py-16 sm:px-16 md:pb-14 md:pt-28 ">
        <div className="mx-auto mb-5 md:px-10 lg:w-11/12 ">
          <div className="shadow-2xl lg:flex">
            <div className="-mx-5 sm:mx-0 lg:w-1/2 ">
              <img
                src={contact}
                alt="contact"
                className="h-[500px] w-full  lg:h-[630px]"
              />
            </div>
            <div className="relative -mx-5 h-auto bg-black sm:mx-0 lg:w-1/2">
              <img
                src={pizza_bg}
                alt="pizza-bg"
                className="h-[620px]"
              />
              <div className="absolute inset-0 animate-flip-down px-6 py-10 text-center text-white animate-delay-[2000ms] animate-duration-[3000ms] lg:text-start">
                <h3 className="line_white relative ps-2 pt-7 text-lg font-bold">
                  WELCOME!
                </h3>
                <h1 className="my-3 px-3 text-3xl font-bold italic leading-[40px] tracking-tighter lg:text-4xl 2xl:text-6xl">
                  PICK UP YOUR ORDER DIRECTLY FROM US!
                </h1>
                <p className="mt-14 pb-14 ps-2 font-bold tracking-tighter lg:mt-7 xl:mt-14">
                  At Pizza4U, we prioritize the quality of your culinary
                  experience. At this moment, we are delighted to offer our
                  delicious range of pizza exclusively for pickup from our
                  location at The 5th Settlement, New Cairo, Egypt. We invite
                  you to place your order and experience the authentic flavors
                  we have to offer, all prepared with the utmost care and love.
                </p>
                <div className="text-center">
                  <Link
                    to="/menu"
                    className="cursor-pointer rounded-sm border border-white px-8 py-4 text-base font-bold text-white shadow-md hover:bg-[#fbb200] hover:text-white hover:duration-700"
                  >
                    VIEW THE MENU
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
