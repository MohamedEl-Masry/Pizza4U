import MyCarousel from './Carousel';
import Footer from './Footer';
import LinkButton from './LinkButton';
import abt_img_1 from '../../assets/abt_img_1.jpg';
import abt_logo from '../../assets/abt_logo.png';
import abt_img_2 from '../../assets/abt_img_2.jpg';
import strength_vacter from '../../assets/strength_vacter.png';
import all_kinds_of_foods from '../../assets/all_kinds_of_foods.png';
import fresh_foods from '../../assets/fresh_foods.png';
import best_taste from '../../assets/best_taste.png';
import on_time_delivery from '../../assets/on_time_delivery.png';
import leaf from '../../assets/leaf.png';

const About = () => {
  function isElementInVioport(el) {
    const rect = el.getBoundingClintRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  return (
    <>
      <section className="-mx-5 bg-white px-5 py-20 sm:px-16">
        <div className="pt-3">
          <LinkButton to="/">HOME</LinkButton>
          <span className="text-xl font-bold  text-stone-500"> / </span>
          <span className="text-xl font-bold text-red-500">ABOUT US</span>
        </div>
        <div className="grid gap-6 py-8 lg:grid-cols-3 ">
          <div className="sm:col-span-2">
            <div className="mb-5 animate-fade-right animate-duration-[3000ms] animate-once">
              <h3 className="line_red relative mt-7 text-lg font-bold text-red-500 sm:text-2xl lg:space-x-2">
                Our Story
              </h3>
              <h1 className="my-3 text-xl font-extrabold text-stone-700 sm:my-5 sm:text-3xl">
                The Story About Pizza4U
              </h1>
              <p className="w-3/4 space-y-10 whitespace-break-spaces text-sm font-normal  text-stone-400 sm:text-base sm:font-medium">
                Lorem ipsum dolor sit amet,colur consectetur omni adipisicing
                elit, sed do eiusmod tempor incididunt labore et magna aliqua.
              </p>
            </div>
            <div className="grid animate-fade-up animate-duration-[3000ms] animate-once sm:grid-cols-2 sm:gap-12 lg:gap-20">
              <div className="pt-12 ">
                <h5 className="mb-4 text-xl font-semibold text-stone-700">
                  Our Family Name
                </h5>
                <p className="  text-sm font-normal  text-stone-400 sm:text-base sm:font-medium lg:mb-5">
                  Lorem ipsum dolor sit amet, consectetur omni adipisicing elit,
                  sed do eiusmod tempor sol incididunt ut labore et
                  exercitation.
                </p>
                <div className="pt-12 ">
                  <img
                    src={abt_img_1}
                    alt="abt-img"
                    className="rounded-[40px]"
                  />
                </div>
              </div>
              <div className="pt-12">
                <h5 className="mb-4 text-xl font-semibold text-stone-700">
                  Our Journey
                </h5>
                <p className=" text-sm font-normal  text-stone-400 sm:text-base sm:font-medium lg:mb-5">
                  Lorem ipsum dolor sit amet, consectetur omni adipisicing elit,
                  sed do eiusmod tempor sol incididunt ut labore et
                  exercitation.
                </p>
                <h5 className="mb-4 pt-12 text-xl font-semibold text-stone-700">
                  Food and Fun
                </h5>
                <p className=" text-sm font-normal  text-stone-400 sm:text-base sm:font-medium lg:mb-5">
                  Lorem ipsum dolor sit amet, consectetur omni adipisicing elit,
                  sed do eius exercitation.
                </p>
                <div className="pt-5">
                  <img src={abt_logo} alt="original" />
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-7 hidden lg:block">
            <img
              src={abt_img_2}
              alt="abt-img"
              className="h-full animate-fade-left rounded-[40px] object-cover animate-duration-[3000ms] animate-once"
            />
          </div>
        </div>
      </section>
      <section className="-mx-5 bg-amber-50 px-5 py-12 sm:px-16 sm:py-20 lg:py-24">
        <div className="relative">
          <div
            className={
              isElementInVioport
                ? 'absolute -right-5 top-32 w-36 animate-fade-left animate-delay-[2500ms] animate-duration-[3000ms] sm:-right-16 md:top-0 md:w-52 lg:w-64'
                : 'absolute -right-16 top-0'
            }
          >
            <img src={strength_vacter} alt="" />
          </div>
          <div
            className={
              isElementInVioport
                ? 'animate-fade-up pb-14 animate-delay-[2500ms] animate-duration-[5000ms]'
                : 'pb-14'
            }
          >
            <h3 className="line_red1 relative mt-7 text-lg font-bold text-red-500 sm:text-2xl">
              Our Strength
            </h3>
            <h1 className="text-stone-8000 my-3 w-3/4 text-2xl font-black sm:my-5 sm:w-auto sm:text-3xl">
              Why We Are The Best?
            </h1>
          </div>
          <div
            className={
              isElementInVioport
                ? 'grid animate-fade-up gap-x-24 gap-y-14 animate-delay-[2500ms] animate-duration-[5000ms] md:grid-cols-2 xl:grid-cols-4 xl:gap-y-0'
                : 'grid grid-cols-4 gap-x-24'
            }
          >
            <div className="px-5 md:px-0">
              <div className="w-11 md:w-auto">
                <img src={all_kinds_of_foods} alt="" />
              </div>
              <h5 className="mb-4 pt-8 text-xl font-semibold text-stone-700">
                All kinds of Foods
              </h5>
              <p className="  text-sm font-normal  text-stone-500 sm:text-base sm:font-medium lg:mb-5">
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry.
              </p>
            </div>
            <div className="px-5 md:px-0">
              <div className="w-11 md:w-auto">
                <img src={fresh_foods} alt="" />
              </div>
              <h5 className="mb-4 pt-8 text-xl font-semibold text-stone-700">
                Fresh Foods
              </h5>
              <p className="  text-sm font-normal  text-stone-500 sm:text-base sm:font-medium lg:mb-5">
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry.
              </p>
            </div>
            <div className="px-5 md:px-0">
              <div className="w-11 md:w-auto">
                <img src={best_taste} alt="" />
              </div>
              <h5 className="mb-4 pt-8 text-xl font-semibold text-stone-700">
                Best Taste
              </h5>
              <p className="  text-sm font-normal  text-stone-500 sm:text-base sm:font-medium lg:mb-5">
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry.
              </p>
            </div>
            <div className="px-5 md:px-0">
              <div className="w-11 md:w-auto">
                <img src={on_time_delivery} alt="" />
              </div>
              <h5 className="mb-4 pt-8 text-xl font-semibold text-stone-700">
                On Time Delivery
              </h5>
              <p className="  text-sm font-normal  text-stone-500 sm:text-base sm:font-medium lg:mb-5">
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative -mx-5 bg-white px-5 py-20 sm:px-16">
        <div className="absolute -top-4 left-0 w-16 sm:w-24 md:top-10">
          <img src={leaf} alt="leaf" />
        </div>
        <div className="">
          <div
            className={
              isElementInVioport
                ? 'animate-fade-up pb-14 pt-6 animate-delay-[2500ms] animate-duration-[5000ms] md:ps-3'
                : 'pb-14 pt-5 md:ps-3'
            }
          >
            <h3 className="line_red2 relative mt-7 text-lg font-bold text-red-500 sm:text-2xl">
              Customer Feedback
            </h3>
            <h1 className="text-stone-8000 my-3 w-3/4 text-nowrap text-2xl font-black sm:my-5 sm:w-auto sm:text-3xl">
              Client Testimonials
            </h1>
          </div>
        </div>
        <div className="animate-fade-up animate-delay-[2500ms] animate-duration-[5000ms]">
          <MyCarousel />
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default About;
