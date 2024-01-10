import { FaRegCircleCheck } from "react-icons/fa6";

const OrderNowSection = () => {
  return (
    <aside className="-mt-4 p-3 bg-slate-100 max-lg:mt-5">
      <h4 className="font-medium text-lg text-center max-lg:text-start max-lg:underline underline-offset-2">Shipping Details</h4>
      <div className="leading-tight space-y-2 mt-2">
        <p className="flex gap-x-1"><FaRegCircleCheck className="w-5 h-5 flex-shrink-0 text-primary-green"/>Free shipping on all orders above $200</p>
        <p className="flex gap-x-1"><FaRegCircleCheck className="w-5 h-5 flex-shrink-0 text-primary-green"/>Simply return within 30 days for an exchange</p>
        <p className="flex gap-x-1"><FaRegCircleCheck className="w-5 h-5 flex-shrink-0 text-primary-green"/>Pay with a secure payment for all your orders</p>
      </div>
      <button className="block mt-4 mx-auto text-white font-medium w-52 py-1.5 max-lg:w-full max-w-64 bg-primary-orange hover:shadow-lg hover:shadow-primary-orange/40 transition">
        ORDER NOW
      </button>
    </aside>
  );
};

export default OrderNowSection;
