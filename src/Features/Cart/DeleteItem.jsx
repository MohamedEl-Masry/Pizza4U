/*eslint-disable react/prop-types*/

import { useDispatch } from 'react-redux';
import Button from '../Ui/Button';
import { deleteItem } from './cartSlice';

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Button type="smallYellow" onClick={()=>dispatch(deleteItem(pizzaId))}>
        Delete
      </Button>
    </>
  );
};

export default DeleteItem;
