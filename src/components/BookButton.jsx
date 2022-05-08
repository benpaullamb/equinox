export default function BookButton({ className = '', ...anchorProps }) {
  return (
    <a
      href="https://equinox.schedulista.com/"
      target="_blank"
      rel="noreferrer"
      className={`${className} px-6 py-2 inline-flex items-center bg-gold-500 hover:bg-gold-700 active:bg-gold-800 rounded-3xl text-black text-lg font-medium`}
      {...anchorProps}>
      Book Now
    </a>
  );
}
