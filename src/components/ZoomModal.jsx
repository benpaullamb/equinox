import { XIcon } from '@heroicons/react/solid';

export default function ZoomModal({ onClose, ...imgProps }) {
  const onClickAway = (e) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  return (
    <div
      onClick={onClickAway}
      className="w-full h-full fixed top-0 left-0 z-20 flex justify-center items-center bg-black/75">
      <XIcon
        className="w-8 h-8 fixed top-4 right-4 md:top-8 md:right-8 z-30 cursor-pointer"
        role="button"
        onClick={onClose}
      />
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img className="max-h-full max-w-full object-contain z-30" {...imgProps} />
    </div>
  );
}
