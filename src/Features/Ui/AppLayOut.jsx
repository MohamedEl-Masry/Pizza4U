import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';
import Navbar from './Navbar';

const AppLayOut = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';
  return (
    <div className=" h-screen ">
      {isLoading && <Loader />}
      <Navbar />
      <div className="h-full overflow-y-auto overflow-x-hidden">
        <main className="mx-5 mt-20 mb-14">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayOut;
