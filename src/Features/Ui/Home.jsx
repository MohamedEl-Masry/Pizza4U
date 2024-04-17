import { useSelector } from 'react-redux';
import CreateUser from '../User/CreateUser';
import Button from './Button';

function Home() {
  const userName = useSelector((state) => state.user.userName);
  return (
    <div className="grid grid-cols-2  ps-5 pt-20 text-sm sm:px-4 md:text-base xl:pt-1">
      <div className="place-self-center text-center">
        <div className="mb-8 text-sm md:text-xl">
          <h1 className="pb-5 text-lg font-bold md:text-2xl lg:text-4xl">
            The best pizza.
          </h1>
          <p className="mt-5 font-bold md:text-2xl">
            Straight out of the oven, straight to you.
          </p>
          <p className="mt-1 pb-3 font-bold md:text-2xl">
            With an Extra Pinch of{' '}
            <span className="mt-5 font-bold text-red-600 md:text-2xl">
              Love
            </span>
            .
          </p>
        </div>
        {userName === '' ? (
          <CreateUser />
        ) : (
          <Button to="/menu" type="primaryYellow">
            Continue ordering, {userName}
          </Button>
        )}
      </div>
      <div className=" relative ms-2 w-3/5 place-self-center ">
        <div className="mx-auto  sm:w-full sm:pt-5">
          <img src="./../../assets/banner-img.png " alt="pizza " />
        </div>
        <div>
          <img
            src="../../../assets/home-leaf.png"
            alt="home-leaf"
            className="absolute -right-1 top-0 -z-10 w-3/5 sm:-right-5 sm:pt-2 xl:w-auto"
          />
        </div>
      </div>
      <div className="absolute bottom-3 right-0  w-2/12 rotate-180 sm:w-1/5">
        <img src="../../assets/black-jamun.png" alt="black-jamun" />
      </div>
      <div className="absolute bottom-3 right-40 w-2/12 sm:right-5 sm:w-3/5 ">
        <img src="./assets/onion.png" alt="onion" className="m-auto" />
      </div>
    </div>
  );
}

export default Home;
