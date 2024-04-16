import { Link } from 'react-router-dom';
import SearchOrder from '../Order/SearchOrder';
import UserName from '../User/UserName';

const Header = () => {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-stone-200 bg-gradient-to-br from-orange-50 via-[#fffaed] to-orange-100 px-1 py-2 uppercase drop-shadow-lg sm:px-10 ">
        <div className="flex items-center justify-between ">
          <Link to="/">
            <img
              src="../assets/Pizza-Logo.png"
              alt="logo"
              className="h-[60px] sm:h-[70px]"
            />
          </Link>
          <SearchOrder />
          <ul className="me-6 flex items-center gap-x-2 sm:me-1 sm:gap-x-10">
            <li className="group/item">
              <Link
                to="/"
                className=" text-sm font-bold text-stone-600 hover:text-orange-600 hover:duration-300 sm:text-lg"
              >
                <h3>HOME</h3>
                <div className="group/edit invisible">
                  <div className=" h-0.5 bg-orange-600  group-hover/item:visible group-hover/edit:w-full group-hover/edit:transition-all group-hover/edit:duration-500  "></div>
                </div>
              </Link>
            </li>
            <li className="group/item">
              <Link className="text-sm font-bold text-stone-600 hover:text-orange-600 hover:duration-300 sm:text-lg">
                <h3>SHOP</h3>
                <div className="group/edit invisible">
                  <div className=" h-0.5 bg-orange-600  group-hover/item:visible group-hover/edit:w-full group-hover/edit:transition-all group-hover/edit:duration-500  "></div>
                </div>
              </Link>
            </li>
            <li className="group/item">
              <Link className="text-sm font-bold text-stone-600 hover:text-orange-600 hover:duration-300 sm:text-lg">
                <h3>PAGES</h3>
                <div className="group/edit invisible">
                  <div className=" h-0.5 bg-orange-600  group-hover/item:visible group-hover/edit:w-full group-hover/edit:transition-all group-hover/edit:duration-500  "></div>
                </div>
              </Link>
            </li>
          </ul>
          <UserName />
        </div>
      </header>
    </>
  );
};

export default Header;
