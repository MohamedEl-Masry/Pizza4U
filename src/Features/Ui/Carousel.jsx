import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Rating from './Rating';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // وقت الانتظار بالميلي ثانية (5 ثواني)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto  xl gap-x-10">
      <Slider {...settings}>
        <div className=" slide-important-class px-4 flex items-center justify-center ">
          <div className='bg-white py-8 px-6 rounded-3xl border border-stone-300 drop-shadow-md'>
            <div className='flex justify-center pb-3'>
              <img
                src="../assets/client-1.jpg"
                alt="Image 1"
                className="rounded-full"
              />
            </div>
            <div className="text-center">
              <h2 className='text-xl py-2 text-stone-700 font-semibold'>Johan Doe</h2>
              <p className='text-base text-stone-400 font-medium'>“Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”</p>
              <div className="flex justify-center py-5">
                <Rating />
              </div>
            </div>
          </div>
        </div>
        <div className=" slide-important-class px-4 flex items-center justify-center">
          <div className='bg-white py-8 px-6 rounded-3xl border border-stone-300 drop-shadow-md'>
            <div className='flex justify-center pb-3'>
              <img
                src="../assets/client-2.jpg"
                alt="Image 2"
                className="rounded-full"
              />
            </div>
            <div className="text-center">
              <h2 className='text-xl py-2 text-stone-700 font-semibold'>Alex Saanu</h2>
            <p className='text-base text-stone-400 font-medium'>“Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”</p>
              <div className="flex justify-center py-5">
                <Rating />
              </div>
            </div>
          </div>
        </div>
        <div className=" slide-important-class px-4 flex items-center justify-center ">
          <div className='bg-white py-8 px-6 rounded-3xl border border-stone-300 drop-shadow-md'>
            <div className='flex justify-center pb-3'>
              <img
                src="../assets/client-3.jpg"
                alt="Image 3"
                className="rounded-full"
              />
            </div>
            <div className="text-center">
              <h2 className='text-xl py-2 text-stone-700 font-semibold'>Jona Leoner</h2>
              <p className='text-base text-stone-400 font-medium'>“Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”</p>
              <div className="flex justify-center py-5">
                <Rating />
              </div>
            </div>
          </div>
        </div>
        <div className=" slide-important-class px-4 flex items-center justify-center ">
          <div className='bg-white py-8 px-6 rounded-3xl border border-stone-300 drop-shadow-md'>
            <div className='flex justify-center pb-3'>
              <img
                src="../assets/client-4.jpg"
                alt="Image 4"
                className="rounded-full"
              />
            </div>
            <div className="text-center">
              <h2 className='text-xl py-2 text-stone-700 font-semibold'>Takar Bowa</h2>
              <p className='text-base text-stone-400 font-medium'>“Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”</p>
              <div className="flex justify-center py-5">
                <Rating />
              </div>
            </div>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
