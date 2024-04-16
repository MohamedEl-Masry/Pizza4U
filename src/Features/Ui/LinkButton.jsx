/*eslint-disable react/prop-types*/

import { Link, useNavigate } from 'react-router-dom';

const LinkButton = ({ children, to }) => {
  const navigate = useNavigate();

  if (to === '-1') return <button onClick={() => navigate(-1)}></button>;

  return (
    <>
      <Link
        to={to}
        className='hover:text-red-500 font-bold text-stone-500 text-xl'
      >
        {children}
      </Link>
    </>
  );
};

export default LinkButton;
