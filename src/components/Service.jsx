import numeral from 'numeral';
import BookButton from '../components/BookButton';

export default function Service({ name, price, description, duration }) {
  const formatPrice = (num) => numeral(num).format('£0,0.00');

  const formatDuration = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;

    if (hours && minutes) {
      return `${hours}hrs ${minutes}mins`;
    } else if (hours) {
      return `${hours}hrs`;
    }
    return `${minutes}mins`;
  };

  return (
    <div className="p-4 flex flex-col justify-between border border-gold-500 rounded-lg">
      <div>
        <div className="flex justify-between">
          <span className="mr-4 text-lg capitalize font-bold">{name}</span>
          <span className="text-lg font-bold">£{formatPrice(price)}</span>
        </div>
        {duration && <span className="block">{formatDuration(duration)}</span>}
        <p className="mt-2">{description}</p>
      </div>
      <BookButton className="w-fit mt-4" />
    </div>
  );
}
