import { useSelector } from 'react-redux';

const UserName = () => {
  const userName = useSelector((state) => state.user.userName);
  if (!userName) return null;
  return (
    <>
      <p className='text-sm font-bold text-orange-600 sm:text-lg'>{userName}</p>
    </>
  );
};

export default UserName;
