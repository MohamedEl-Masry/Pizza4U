/*eslint-disable react/prop-types*/

import { Link } from 'react-router-dom';

const Button = ({ children, disabled, to, type, onClick }) => {
  const baseYellow =
    'inline-block rounded-full bg-yellow-400 text-sm font-semibold uppercase tracking-wide text-stone-50 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ';
  // const baseGreen = ''
  const styles = {
    primaryYellow: baseYellow + ' px-4 py-3 md:px-6 md:py-4',
    smallYellow: baseYellow + ' px-4 py-2 sm:px-5 sm:py-2.5 text-xs',
    round: baseYellow + ' px-2 py-1 md:px-3 md:py-2 text-xs',
    primaryGray:
      'inline-block rounded-full  px-4 py-2.5 text-sm md:px-6 md:py-3.5 font-semibold uppercase tracking-wide text-stone-400 hover:text-stone-800 focus:text-stone-800 transition-colors duration-300 border-2 border-stone-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <>
      <button disabled={disabled} className={styles[type]}>
        {children}
      </button>
    </>
  );
};

export default Button;
