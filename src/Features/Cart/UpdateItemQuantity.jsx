/*eslint-disable react/prop-types*/

import { useDispatch } from 'react-redux';
import Button from '../Ui/Button';
import { decItemQuantity, incItemQuantity } from './cartSlice';

const UpdateItemQuantity = ({ pizzaId, currentQuentity }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className=" flex items-center gap-x-2 sm:gap-x-3 ms-3">
        <Button type="round" onClick={() => dispatch(decItemQuantity(pizzaId))}>
          -
        </Button>
        <span className="text-sm font-medium">{currentQuentity}</span>
        <Button type="round" onClick={() => dispatch(incItemQuantity(pizzaId))}>
          +
        </Button>
      </div>
    </>
  );
};

export default UpdateItemQuantity;
