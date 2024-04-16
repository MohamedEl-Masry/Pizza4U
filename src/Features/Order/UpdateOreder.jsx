/*eslint-disable react/prop-types*/

import { useFetcher } from 'react-router-dom';
import Button from '../Ui/Button';
import { updateOrder } from '../Services/apiRestaurant';

const UpdateOreder = () => {
  const fetcher = useFetcher();
  return (
    <>
      <fetcher.Form method="PATCH" className="text-right">
        <Button type="primaryYellow">Make priority</Button>
      </fetcher.Form>
    </>
  );
};

export default UpdateOreder;

export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
