import { useSelector } from 'react-redux';
import { Disclosure, Menu } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import UserName from '../User/UserName';
import SearchOrder from '../Order/SearchOrder';
import { getTotalCartQuantity } from '../Cart/cartSlice';
import pizza_logo from '../../assets/Pizza-Logo.png';

const navigation = [
  { name: 'HOME', href: '/', current: true },
  { name: 'ABOUT', href: 'about', current: false },
  { name: 'OUR TEAM', href: 'team', current: false },
  { name: 'BLOG', href: 'blog', current: false },
  { name: 'CONTACT', href: 'contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const userName = useSelector((state) => state.user.userName);

  return (
    <Disclosure
      as="nav"
      className="fixed inset-x-0 top-0 z-50 border-b-2 border-stone-200 bg-gradient-to-br from-orange-50 via-[#fffaed] to-orange-100 px-1 py-2 uppercase drop-shadow-lg sm:px-3 lg:px-10 "
    >
      {({ open }) => (
        <>
          <div className="  px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center sm:justify-between">
              <div className=" inset-y-0 right-0  flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-orange-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex  items-center justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="h-[50px] sm:h-[60px] md:h-[70px]"
                      src={pizza_logo}
                      alt="logo Company"
                    />
                  </Link>
                </div>

                <div className="hidden sm:ml-8 lg:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? ' text-stone-500 hover:bg-gray-100 hover:text-orange-500'
                            : 'text-stone-500 hover:bg-gray-100 hover:text-orange-500',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden sm:block">
                <SearchOrder />
              </div>

              <div className="absolute inset-y-0 right-12 flex items-center gap-x-3 sm:space-x-3 pr-2 sm:static sm:inset-auto sm:ml-6 sm:gap-x-10 sm:pr-0">
                <Link to="/cart">
                  <button
                    type="button"
                    className="relative rounded-full p-1 text-stone-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <div className="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6 "
                      >
                        <path
                          className="stroke1 stroke-linecap stroke-linejoin"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                      <span className="absolute -top-5 rounded-full bg-stone-100 px-1.5 py-0.5 text-sm">
                        {totalCartQuantity}
                      </span>
                    </div>
                  </button>
                </Link>
                <UserName />
                {userName ? (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-orange-100 px-2 py-2 text-sm hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-50 focus:ring-offset-2 focus:ring-offset-orange-500">


                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6  text-stone-500 hover:text-orange-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                          />
                        </svg>
                      </Menu.Button>
                    </div>
                  </Menu>
                ) : null}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-orange-300 text-white'
                      : 'text-gray-300 hover:bg-orange-300 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <SearchOrder />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
