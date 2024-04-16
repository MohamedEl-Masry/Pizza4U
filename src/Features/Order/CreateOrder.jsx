// import { useState } from "react";

import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../Services/apiRestaurant';
import Button from '../Ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, getTotalCartPrice } from '../Cart/cartSlice';
import EmptyCart from '../Cart/EmptyCart';
import { useState } from 'react';
import { formatCurrency } from '../Utils/helpers';
import { fetchAddress } from '../User/userSlice';
import LinkButton from '../Ui/LinkButton';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();
  const [withPriority, setWithPriority] = useState(false);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;
  const {
    userName,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === 'loading';

  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="bg-img-createOrder mt-20 px-4 pt-12">
      <div className="">
        <LinkButton to="/cart">Cart</LinkButton>
        <span className="text-xl font-bold  text-stone-500"> / </span>
        <span className="text-xl font-bold text-red-500">Create Order</span>
      </div>
      <h2 className="my-8 text-xl font-semibold"> Ready to order? lets go! </h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow opacity-75"
            type="text"
            name="customer"
            defaultValue={userName}
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input
              className="input w-full opacity-75"
              type="tel"
              name="phone"
              required
            />
            {formErrors?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-center text-xs font-medium text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className=" mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="relative  grow">
            <input
              className="input  w-full opacity-75"
              type="text"
              name="address"
              disabled={isLoadingAddress || isLoadingAddress}
              defaultValue={address}
              required
            />
            {addressStatus === 'error' && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-center text-xs font-medium text-red-700">
                {errorAddress}
              </p>
            )}
            {!position.latitude && !position.longitude && (
              <div
                className={
                  addressStatus === 'error'
                    ? 'absolute right-0.5 top-[1.5px] mt-8 sm:right-0 sm:top-0 sm:mt-0'
                    : 'absolute bottom-[2.5px] right-0.5 sm:bottom-0 sm:right-0'
                }
              >
                <Button
                  disabled={isLoadingAddress}
                  type="smallYellow"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(fetchAddress());
                  }}
                >
                  Get Position 📌
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input
            className="input"
            type="hidden"
            name="cart"
            value={JSON.stringify(cart)}
          />
          <input
            type="hidden"
            name="position"
            value={
              position.latitude && position.longitude
                ? `${position.latitude} , ${position.longitude}`
                : ''
            }
          />
          <Button disabled={isSubmitting} type="primaryYellow">
            {isSubmitting
              ? `placing order ... `
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = ' please give us your correct phone numper';
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
