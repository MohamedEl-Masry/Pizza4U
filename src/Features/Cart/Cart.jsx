import LinkButton from '../Ui/LinkButton';
import Button from '../Ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart , getTotalCartPrice, getTotalCartQuantity } from './cartSlice';

import EmptyCart from './EmptyCart';
import { formatCurrency } from '../Utils/helpers';

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName);
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-4 pt-8">
      <div className="">
      <LinkButton to="/menu">MENU</LinkButton>
      <span className='text-xl font-bold  text-stone-500'> / </span>
      <span className="text-xl font-bold text-red-500">CART</span>
      </div>
      <div className="grid sm:grid-cols-3 gap-6 ">
        <div className="col-span-2 bg-img-cart">
          <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>
          <ul className=" divide-y divide-stone-200 border-b">
            {cart.map((item) => (
              <CartItem item={item} key={item.pizzaId} />
            ))}
          </ul>
          <div className="mt-6 space-x-4">

            <Button type="primaryGray" onClick={() => dispatch(clearCart())}>
              Clear cart
            </Button>
          </div>
        </div>
        <div className="border-1 mt-10 rounded-lg border border-stone-200 px-10 pt-7 shadow-md">
          <div className="divide-y divide-stone-200 border-b">
            <div className="py-5">
              <p className='text-xl font-extrabold text-stone-700'>CART Total</p>
            </div>
            <div className="py-5 gap-y-2 space-y-4 text-base text-stone-500 font-bold"><p>Total Quantity : <span>{totalCartQuantity} Pizzas</span> </p><p >Total Price <span className='ps-7'> : {formatCurrency(totalCartPrice)}</span> </p></div>
            
          </div>
          <div className="my-5 flex justify-center">
          <Button to="/order/new" type="primaryYellow">
              Order pizzas
            </Button></div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
