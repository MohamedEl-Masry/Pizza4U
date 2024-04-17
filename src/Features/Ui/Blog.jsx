import Footer from './Footer';
import LinkButton from './LinkButton';

const Blog = () => {
  return (
    <>
      <section className="relative px-5 pb-16 pt-12 sm:px-16">
        <div className="py-3">
          <LinkButton to="/">HOME</LinkButton>
          <span className="text-xl font-bold  text-stone-500"> / </span>
          <span className="text-xl font-bold text-red-500">Blog</span>
        </div>
        <div className="absolute right-[80%] top-96 animate-fade-left animate-duration-[3000ms] animate-once  md:right-[38%] md:top-36 md:block lg:right-[40%] 2xl:right-[39%]">
          <img
            src="./src/assets/banner-leaf.png"
            alt="leaf"
            className="w-3/5 lg:w-auto"
          />
        </div>
        <div className="absolute -right-5 bottom-10 flex animate-fade-left justify-end  animate-duration-[3000ms] animate-once md:bottom-16 ">
          <img
            src="./src/assets/book-jamun.png"
            alt="jamun"
            className="w-2/5 md:w-3/5 lg:w-4/5"
          />
        </div>
        <div className="absolute -right-5 top-7 hidden animate-fade-left justify-end animate-duration-[3000ms] animate-once md:flex">
          <img
            src="./src/assets/book-leaf.png"
            alt="leaf"
            className="w-3/5 lg:w-4/5"
          />
        </div>
        <div className="justify-between md:flex">
          <div className="animate-fade-right space-y-4 whitespace-break-spaces pt-7 animate-duration-[3000ms] animate-once sm:space-y-8 md:w-1/2 md:pt-20">
            <h1 className="text-4xl font-bold text-stone-700 sm:mt-10 md:text-6xl">
              Blog Detail
            </h1>
            <p className="text-xl font-medium text-stone-500 md:text-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className=" me-7 mt-10 animate-fade-left animate-duration-[3000ms] animate-once md:mt-0 md:w-2/5">
            <img src="./src/assets/reservation-pizza.png" alt="pizza" />
          </div>
        </div>
      </section>
      <section className="-mx-5 bg-white px-5  py-16 sm:px-16 md:pt-28 md:pb-8">
        <div className="mx-auto mb-5 animate-fade-right animate-duration-[3000ms]  md:px-10 lg:w-4/5">
          <h7 className="line_stone relative mt-7 text-base font-bold text-stone-500 sm:text-lg lg:space-x-2">
            15 April Mar 2024
          </h7>
          <h1 className="my-3 text-2xl font-black text-stone-700 sm:my-5 sm:text-4xl sm:leading-[3.25rem]">
            How to keep fear from ruining your art business with confident
          </h1>
        </div>
        <div className="mt-14 flex justify-center ">
          <div className="overflow-hidden rounded-[40px] ">
            <img
              src="./src/assets/blog-detail-1.jpg"
              alt="blog1"
              className="min-h-[230px] rounded-[40px] duration-500 hover:scale-110"
            />
          </div>
        </div>
        <div className="mx-auto mb-5 mt-10 animate-fade-up animate-delay-1500 animate-duration-[3000ms] animate-once md:px-10 lg:w-4/5">
          <p className="font-medium text-stone-500 sm:leading-7">
            Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta
            justo. Velna vitae auctor congue magna nihil impedit ligula risus.
            Mauris donec ociis et magnis sapien etiam sapien sagittis congue
            tempor a gravida donec enim ipsum porta justo integer at odio velna.
            Maecenas gravida porttitor nunc, quis vehicula magna at luctus
            tempor. Quisque vel laoreet turpis. Urna augue, viverra a augue
            eget, dictum tempor diam. Sed pulvinar consectetur nibh, vel
            imperdiet dui varius viverra. Pellentesque ac massa lorem fusce eu
            cursus fusce
          </p>
          <p className="mt-5 font-medium text-stone-500 sm:leading-7">
            Donec dolor suscipit magna vehicula impedit ligula risus. Mauris
            donec ociis et magnis sapien etiam sapien sem sagittis congue tempor
            gravida porttitor nunc, quis vehicula magna. Placerat varius
            consectetur nibh, vel imperdiet dui varius viverra donec ociis et
            magnis
          </p>
          <h3 className="my-5 text-xl font-bold text-stone-700">
            Aliquet Tempus Tempor Gravida
          </h3>
          <p className="font-medium text-stone-500 sm:leading-7">
            Cubilia laoreet augue egestas cursus magna nihil impedit ligula
            risus. Mauris donec ociis et magnis sapien etiam sapien rutrum
            tempor mullam blandit tempor sapien and gravida Maecenas gravida
            porttitor nunc, quis vehicula magna luctus tempor. Quisque laoreet
            turpis urna augue, viverra a augue eget, dictum tempor diam.
          </p>
        </div>
        <div className="mx-auto mb-5 mt-14 md:px-10 lg:w-4/5">
          <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-y-0 ">
            <div className="flex justify-center animate-fade-right animate-duration-[3000ms] animate-delay-[2000ms]">
              <div className="overflow-hidden rounded-[40px]">
                <img
                  src="./src/assets/blog-detail-2.jpg"
                  alt="blog2"
                  className="rounded-[40px] duration-500 hover:scale-110"
                />
              </div>
            </div>
            <div className="flex justify-center animate-fade-left animate-duration-[3000ms] animate-delay-[2000ms]">
              <div className="overflow-hidden rounded-[40px]">
                <img
                  src="./src/assets/blog-detail-3.jpg"
                  alt="blog3"
                  className="rounded-[40px] duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="-mx-5 bg-white px-5 pb-16 pt-5 sm:px-16">
        <div className="mx-auto mb-5 animate-fade-down animate-delay-[1500ms] animate-duration-[3000ms] animate-once md:px-10 lg:w-4/5">
          <p className='font-medium text-stone-500 sm:leading-7 '>In at mauris vel nisl convallis porta at vitae dui. Nam lacus ligula, vulputate molestie bibendum quis, aliquet elementum massa. Vestibulum ut sagittis odio. Ac massa lorem. Fusce eu cursus est. Fusce non nulla vitae massa placerat vulputate vel a purus. Aliqum mullam blandit tempor sapien gravida donec</p>
          <p className='font-medium text-stone-500 sm:leading-7 mt-5'>Nulla tincidunt volutpat tincidunt. Pellentesque habitant morbi tristique senectus et netus and malesuada famesa augue suscipit, luctus at neque purus neque dolor primis. Nemo sodales ipsam egestas volute turpis a dolores aliquam quaerat sodales sapien congue augue eget gravida laoreet turpis urna augue, viverra a augue eget, dictum dictum tempor diam. Sed pulvinar consectetur and placerat imperdiet</p>
        </div>
        <div className="mx-auto mt-16 lg:flex justify-between md:px-10 lg:w-4/5 ">
          <div className="blog-tags px-4 lg:px-0 lg:w-[60%] xl:w-2/5 animate-fade-right animate-duration-[3000ms] animate-delay-[2000ms]">
            <ul className='flex flex-wrap md:flex-nowrap  gap-y-3 justify-center gap-x-5 lg:justify-between items-center'>
              <li className='px-7 py-2 text-stone-500 hover:text-white hover:duration-500 hover:bg-[#fbb200] cursor-pointer text-lg rounded-lg border border-stone-300 shadow-md'>Cooking</li>
              <li className='px-7 py-2  text-stone-500 hover:text-white hover:duration-500 hover:bg-[#fbb200] cursor-pointer text-lg rounded-lg border border-stone-300 shadow-md'>Pizzas</li>
              <li className='px-7 py-2  text-stone-500 hover:text-white hover:duration-500 hover:bg-[#fbb200] cursor-pointer text-lg rounded-lg border border-stone-300 shadow-md'>Stories</li>
            </ul>
          </div>
          <div className="footer-social mt-5 lg:mt-0 lg:w-[25%] xl:w-1/5 animate-fade-left animate-duration-[3000ms] animate-delay-[2000ms]">
            <ul className='flex gap-x-2 justify-center lg:justify-between items-center'>
              <li className='text-white w-10 h-10 shadow-md cursor-pointer hover:duration-500  bg-[#3b579d] hover:bg-[#fbb200] rounded-lg flex items-center justify-center'><i className="fa-brands fa-facebook-f"></i></li>
              <li className='text-white w-10 h-10 shadow-md cursor-pointer hover:duration-500  bg-[#cc2127] hover:bg-[#fbb200] rounded-lg flex items-center justify-center'><i className="fa-brands fa-tiktok"></i></li>
              <li className='text-white w-10 h-10 shadow-md cursor-pointer hover:duration-500  bg-[#2caae1] hover:bg-[#fbb200] rounded-lg flex items-center justify-center'><i className="fa-brands fa-x-twitter"></i></li>
              <li className='text-white w-10 h-10 shadow-md cursor-pointer  hover:duration-500 bg-[#dc4a38] hover:bg-[#fbb200] rounded-lg flex items-center justify-center'><i className="fa-brands fa-instagram"></i></li>

            </ul>
          </div>
        </div>
      </section>
      <footer><Footer/></footer>
    </>
  );
};

export default Blog;
