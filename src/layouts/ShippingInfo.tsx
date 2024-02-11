import { IconType } from "react-icons";
// Icons
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

interface dataProps {
  icon: IconType;
  title: string;
  description: string;
  styles: string;
}

const ShippingInfo = () => {
  const shippingData: dataProps[] = [
    {
      icon: MdOutlineLocalShipping,
      title: "Free Shipping",
      description: "Free shipping on all orders above $200",
      styles: "w-12 h-12 fill-primary-blue",
    },
    {
      icon: MdCurrencyExchange,
      title: "30 Days Return",
      description: "Simply return within 30 days for an exchange",
      styles: "w-11 h-11 fill-primary-blue",
    },
    {
      icon: RiSecurePaymentLine,
      title: "100% Payment Secure",
      description: "Pay with a secure payment for all your orders",
      styles: "w-12 h-12 fill-primary-blue",
    },
  ];

  return (
    <section className="flex items-center justify-center gap-x-3 gap-y-5 border-b border-slate-300 bg-slate-100 py-5 max-sm:flex-col">
      {shippingData.map((item, index) => (
        <article key={index} className="flex items-center gap-x-3">
          <item.icon className={`${item.styles}`} />
          <div>
            <h3 className="text-xl font-bold leading-5">{item.title}</h3>
            <p className="mt-1 max-w-56 leading-4">{item.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ShippingInfo;
