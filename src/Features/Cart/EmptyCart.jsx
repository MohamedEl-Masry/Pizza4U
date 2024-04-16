import LinkButton from '../Ui/LinkButton';

function EmptyCart() {
  return (
    <div className="pt-24">
      
      <div className="">
      <LinkButton to="/menu">MENU</LinkButton>
      <span className='text-xl font-bold  text-stone-500'> / </span>
      <span className="text-xl font-bold text-red-500">Empty Cart</span>
      </div>

      <p className='mt-10'>Your cart is still empty. Start adding some pizzas 😊 </p>
    </div>
  );
}

export default EmptyCart;
