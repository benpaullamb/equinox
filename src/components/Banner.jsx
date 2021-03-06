import BookButton from './BookButton';
import SocialMedia from './SocialMedia';
import logoImage from '../images/logo.png';

export default function Banner({ background, bgClassName = '' }) {
  return (
    <header className="h-[100vh] shadow-2xl">
      <div style={{ backgroundImage: `url("${background}")` }} className={`${bgClassName} h-full bg-cover`}>
        <div className="h-full p-8 pt-20 flex flex-col justify-center items-center bg-black/70">
          <img src={logoImage} className="min-h-0" alt="Equinox Logo" />
          <SocialMedia className="mt-4" />
          <h2 className="mt-4 text-2xl text-center capitalize">Multi-award winning barber shop</h2>
          <span className="mt-1 capitalize">By appointment only</span>
          <BookButton className="mt-8" />
        </div>
      </div>
    </header>
  );
}
