import '@fortawesome/fontawesome-free/css/all.css';
import LinkButton from './LinkButton';
import Footer from './Footer';
import onion from '../../assets/onion.png';
import tomato from '../../assets/tomato.png';
import photo3 from '../../assets/photo_3.png';
import team1 from '../../assets/team_1.jpg';
import team2 from '../../assets/team_2.jpg';
import team3 from '../../assets/team_3.jpg';
import team4 from '../../assets/team_4.jpg';
import team5 from '../../assets/team_5.jpg';
import team6 from '../../assets/team_6.jpg';
import skill1 from '../../assets/skill_img_1.jpg';
import skill2 from '../../assets/skill_img_2.jpg';
import skill3 from '../../assets/skill_img_3.jpg';




const Team = () => {
  return (
    <>
      <section className="relative px-5 py-16 sm:px-16">
        <div className="py-3">
          <LinkButton to="/">HOME</LinkButton>
          <span className="text-xl font-bold  text-stone-500"> / </span>
          <span className="text-xl font-bold text-red-500">OUR TEAM</span>
        </div>
        <div className="absolute right-1/3  top-36 hidden animate-fade-left animate-duration-[3000ms] animate-once md:block">
          <img
            src={onion}
            alt="onion"
            className="w-3/5 lg:w-auto"
          />
        </div>
        <div className="absolute bottom-16 right-7 hidden animate-fade-left animate-duration-[3000ms] animate-once md:block">
          <img
            src={tomato}
            alt="tomato"
            className="w-3/5 lg:w-auto"
          />
        </div>
        <div className="justify-between md:flex">
          <div className="animate-fade-right space-y-4 whitespace-break-spaces pt-7 animate-duration-[3000ms] animate-once sm:space-y-8 md:w-3/5">
            <h1 className="text-4xl font-bold text-stone-700 sm:mt-10 md:text-6xl">
              Our Team
            </h1>
            <p className="text-xl font-medium text-stone-500 md:text-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className=" mt-10 animate-fade-left animate-duration-[3000ms] animate-once md:mt-0 md:w-1/3">
            <img src={photo3} alt="photo" />
          </div>
        </div>
      </section>
      <section className="-mx-5 bg-white px-5 pb-8 pt-16 sm:px-16">
        <div className="grid gap-x-10 gap-y-14 pt-5 md:grid-cols-3 md:gap-y-0 md:pt-12">
          <div className="social-team">
            <div className="relative cursor-pointer overflow-hidden rounded-[40px]">
              <img
                src={team1}
                alt="team-1"
                className="rounded-[40px] duration-500 hover:scale-110"
              />
              <div className="layer-social-team absolute bottom-7 left-[25%] hidden animate-fade-up animate-duration-[2000ms] md:left-[35%]">
                <ul className="flex ">
                  <li className="mx-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-amber-400 text-stone-100 hover:bg-red-500">
                    <i className="fa-brands fa-facebook-f"></i>
                  </li>
                  <li className="mx-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-amber-400 text-stone-100 hover:bg-red-500">
                    <i className="fa-brands fa-x-twitter"></i>
                  </li>
                  <li className="mx-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-amber-400 text-stone-100 hover:bg-red-500">
                    <i className="fa-brands fa-instagram"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-7 text-center">
              <h4 className="cursor-pointer text-2xl font-semibold text-stone-700 hover:text-red-500">
                Angel Juliya
              </h4>
              <p className="mt-2 text-xl text-stone-400">Senior Chef</p>
            </div>
          </div>
          <div className="social-team">
            <div className="relative cursor-pointer overflow-hidden rounded-[40px]">
              <img
                src={team2}
                alt="team-2"
                className="rounded-[40px] duration-500 hover:scale-110"
              />
              <div className="layer-social-team absolute bottom-7 left-[25%] hidden animate-fade-up animate-duration-[2000ms] md:left-[35%]">
                <ul className="flex ">
                  <li className="mx-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-amber-400 text-stone-100 hover:bg-red-500">
                    <i className="fa-brands fa-facebook-f"></i>
                  </li>
                  <li className="mx-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-amber-400 text-stone-100 hover:bg-red-500">
                    <i className="fa-brands fa-x-twitter"></i>
                  </li>
                  <li className="mx-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-amber-400 text-stone-100 hover:bg-red-500">
                    <i className="fa-brands fa-instagram"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-7 text-center">
              <h4 className="cursor-pointer text-2xl font-semibold text-stone-700 hover:text-red-500">
                Morrish Khan
              </h4>
              <p className="mt-2 text-xl text-stone-400">Chef of Head</p>
            </div>
          </div>
          <div className="social-team">
            <div className="relative cursor-pointer overflow-hidden rounded-[40px]">
              <img
                src={team3}
                alt="team-3"
                className="rounded-[40px] duration-500 hover:scale-110"
              />
              <div className="layer-social-team absolute bottom-7 left-[25%] hidden animate-fade-up animate-duration-[2000ms] md:left-[35%]">
                <ul className="flex ">
                  <li className="mx-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-amber-400 text-stone-100 hover:bg-red-500">
                    <i className="fa-brands fa-facebook-f"></i>
                  </li>
                  <li className="mx-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-amber-400 text-stone-100 hover:bg-red-500">
                    <i className="fa-brands fa-x-twitter"></i>
                  </li>
                  <li className="mx-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-amber-400 text-stone-100 hover:bg-red-500">
                    <i className="fa-brands fa-instagram"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-7 text-center">
              <h4 className="cursor-pointer text-2xl font-semibold text-stone-700 hover:text-red-500">
                Willium John
              </h4>
              <p className="mt-2 text-xl text-stone-400">Junior Chef</p>
            </div>
          </div>
        </div>
        <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-3 md:gap-y-0">
          <div className="social-team">
            <div className="relative cursor-pointer overflow-hidden rounded-[40px]">
              <img
                src={team4}
                alt="team-4"
                className="rounded-[40px] duration-500 hover:scale-110"
              />
              <div className="layer-social-team absolute bottom-7 left-[25%] hidden animate-fade-up animate-duration-[2000ms] md:left-[35%]">
                <ul className="flex ">
                  <li className="mx-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-amber-400 text-stone-100 hover:bg-red-500">
                    <i className="fa-brands fa-facebook-f"></i>
                  </li>
                  <li className="mx-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-amber-400 text-stone-100 hover:bg-red-500">
                    <i className="fa-brands fa-x-twitter"></i>
                  </li>
                  <li className="mx-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-amber-400 text-stone-100 hover:bg-red-500">
                    <i className="fa-brands fa-instagram"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-7 text-center">
              <h4 className="cursor-pointer text-2xl font-semibold text-stone-700 hover:text-red-500">
                Millana kamal
              </h4>
              <p className="mt-2 text-xl text-stone-400">Assistant Chef</p>
            </div>
          </div>
          <div className="social-team">
            <div className="relative cursor-pointer overflow-hidden rounded-[40px]">
              <img
                src={team5}
                alt="team-5"
                className="rounded-[40px] duration-500 hover:scale-110"
              />
              <div className="layer-social-team absolute bottom-7 left-[25%] hidden animate-fade-up animate-duration-[2000ms] md:left-[35%]">
                <ul className="flex ">
                  <li className="mx-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-amber-400 text-stone-100 hover:bg-red-500">
                    <i className="fa-brands fa-facebook-f"></i>
                  </li>
                  <li className="mx-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-amber-400 text-stone-100 hover:bg-red-500">
                    <i className="fa-brands fa-x-twitter"></i>
                  </li>
                  <li className="mx-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-amber-400 text-stone-100 hover:bg-red-500">
                    <i className="fa-brands fa-instagram"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-7 text-center">
              <h4 className="cursor-pointer text-2xl font-semibold text-stone-700 hover:text-red-500">
                Robert Smith
              </h4>
              <p className="mt-2 text-xl text-stone-400">Grilled Chef</p>
            </div>
          </div>
          <div className="social-team">
            <div className="relative cursor-pointer overflow-hidden rounded-[40px]">
              <img
                src={team6}
                alt="team-6"
                className="rounded-[40px] duration-500 hover:scale-110"
              />
              <div className="layer-social-team absolute bottom-7 left-[25%] hidden animate-fade-up animate-duration-[2000ms] md:left-[35%]">
                <ul className="flex ">
                  <li className="mx-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-amber-400 text-stone-100 hover:bg-red-500">
                    <i className="fa-brands fa-facebook-f"></i>
                  </li>
                  <li className="mx-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-amber-400 text-stone-100 hover:bg-red-500">
                    <i className="fa-brands fa-x-twitter"></i>
                  </li>
                  <li className="mx-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-amber-400 text-stone-100 hover:bg-red-500">
                    <i className="fa-brands fa-instagram"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-7 text-center">
              <h4 className="cursor-pointer text-2xl font-semibold text-stone-700 hover:text-red-500">
                Ninan Michal
              </h4>
              <p className="mt-2 text-xl text-stone-400">Roast Chef</p>
            </div>
          </div>
        </div>
      </section>
      <section className="-mx-5 bg-white px-5 pb-8 pt-4 sm:px-16 md:py-16">
        <div className="mb-5 animate-fade-right animate-duration-[3000ms] animate-once">
          <h3 className="line_red3 relative mt-7 text-lg font-bold text-red-500 sm:text-2xl lg:space-x-2">
            Our Skills
          </h3>
          <h1 className="my-3 text-xl font-black text-stone-700 sm:my-5 sm:text-4xl">
            Team of Professionals
          </h1>
        </div>
        <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-3 md:gap-y-0">
          <div className="">
            <div className="cursor-pointer overflow-hidden rounded-[40px]">
              <img
                src={skill1}
                alt="skill1"
                className="rounded-[40px] duration-500 hover:scale-110"
              />
            </div>
            <div className=" mt-7 px-3">
              <h4 className="text-2xl font-semibold text-stone-700">
                Unique Recipes
              </h4>
              <p className="mt-2 text-lg text-stone-400">
                There are many variations of passages of Ipsum available, but
                the majority
              </p>
            </div>
          </div>
          <div className="">
            <div className="cursor-pointer overflow-hidden rounded-[40px]">
              <img
                src={skill2}
                alt="skill2"
                className="rounded-[40px] duration-500 hover:scale-110"
              />
            </div>
            <div className=" mt-7 px-3">
              <h4 className="text-2xl font-semibold text-stone-700">
              Quick Cooking
              </h4>
              <p className="mt-2 text-lg text-stone-400">
                There are many variations of passages of Ipsum available, but
                the majority
              </p>
            </div>
          </div>
          <div className="">
            <div className="cursor-pointer overflow-hidden rounded-[40px]">
              <img
                src={skill3}
                alt="skill3"
                className="rounded-[40px] duration-500 hover:scale-110"
              />
            </div>
            <div className=" mt-7 px-3">
              <h4 className="text-2xl font-semibold text-stone-700">
              Dining Experience
              </h4>
              <p className="mt-2 text-lg text-stone-400">
                There are many variations of passages of Ipsum available, but
                the majority
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer><Footer/></footer>
    </>
  );
};

export default Team;
