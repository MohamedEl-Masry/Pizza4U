import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../Utils/helpers';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
if(!totalCartQuantity) return null ;
  return (
    <div className="fixed inset-x-0 bottom-0 bg-gray-500">
      <p>
        <span>{totalCartQuantity} PIZZAS</span>
        <span> {formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr; </Link>
    </div>
  );
}

export default CartOverview;
