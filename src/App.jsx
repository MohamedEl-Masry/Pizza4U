import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Features/Ui/Home';
import Error from './Features/Ui/Error';

import Menu, { loader as menuLoader } from './Features/Menu/Menu';
import Order, { loader as orderLoader } from './Features/Order/Order';
import Cart from './Features/Cart/Cart';
import CreateOrder, {
  action as craeteOrderAction,
} from './Features/Order/CreateOrder';
import { action as updateOrderAction } from './Features/Order/UpdateOreder';
import AppLayOut from './Features/Ui/AppLayOut';
import About from './Features/Ui/About';
import Team from './Features/Ui/Team';
import Blog from './Features/Ui/Blog';
import Contact from './Features/Ui/Contact';

const router = createBrowserRouter([
  {
    element: <AppLayOut />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: 'cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: craeteOrderAction,
      },

      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
      { path: 'about', element: <About /> },
      { path: 'team', element: <Team /> },
      { path: 'blog', element: <Blog /> },
      { path: 'contact', element: <Contact /> },


    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
