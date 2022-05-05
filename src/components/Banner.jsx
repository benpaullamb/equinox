import logoImage from '../images/logo.png';
import BookButton from './BookButton';

export default function Banner({ mobileImage, desktopImage }) {
  const headerContents = (
    <div className="h-full p-8 pt-20 flex flex-col justify-center items-center bg-black/75">
      <img src={logoImage} className="min-h-0" alt="Equinox Logo" />
      <h2 className="mt-4 text-2xl text-center capitalize">Multi-award winning barber shop</h2>
      <span className="mt-1 capitalize">By appointment only</span>
      <BookButton className="mt-4" />
    </div>
  );

  return (
    <header className="h-5/6">
      {/* Mobile banner */}
      <div
        style={{ backgroundImage: `url("${mobileImage || desktopImage}")` }}
        className="h-full md:hidden bg-cover bg-center">
        {headerContents}
      </div>
      {/* Desktop banner */}
      <div
        style={{ backgroundImage: `url("${desktopImage || mobileImage}")` }}
        className="h-full hidden md:block bg-cover bg-top">
        {headerContents}
      </div>
    </header>
  );
}
