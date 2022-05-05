import numeral from 'numeral';
import BookButton from '../components/BookButton';

export default function Service({ name, price, description }) {
  const formatPrice = (num) => numeral(num).format('£0,0.00');

  return (
    <div className="p-4 flex flex-col justify-between border border-gold-500 rounded-lg">
      <div>
        <div className="flex justify-between">
          <span className="mr-4 text-lg capitalize font-bold">{name}</span>
          <span className="text-lg font-bold">£{formatPrice(price)}</span>
        </div>
        <p className="mt-2">{description}</p>
      </div>
      <BookButton className="w-fit mt-4" />
    </div>
  );
}
