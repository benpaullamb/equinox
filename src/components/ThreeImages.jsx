import { useState } from 'react';
import ZoomModal from './ZoomModal';

export default function ThreeImages({ images }) {
  const [selectedImage, setSelectedImage] = useState('');

  return (
    <section className="md:p-8 grid grid-cols-3 md:gap-4 md:container md:mx-auto">
      {images.map((image) => (
        <div onClick={() => setSelectedImage(image)} key={image}>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img src={image} alt="Headshot" className="w-full md:rounded-lg cursor-pointer" />
        </div>
      ))}

      {selectedImage && <ZoomModal src={selectedImage} alt="Headshot" onClose={() => setSelectedImage('')} />}
    </section>
  );
}
