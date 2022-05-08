import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Section from './Section';
import ZoomModal from './ZoomModal';

export default function Gallery({ images }) {
  const [selectedImage, setSelectedImage] = useState('');

  const imageProps = (image, i) => ({
    src: image,
    alt: `Galley - ${i + 1}/${images.length}`,
    key: image,
    onClick: () => setSelectedImage(image),
  });

  return (
    <>
      <section className="grid md:hidden grid-cols-2">
        {images.map((image, i) => (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img {...imageProps(image, i)} className="w-full" />
        ))}
      </section>

      <Section className="hidden md:block md:py-0">
        <Swiper
          navigation
          pagination
          autoplay
          loop
          grabCursor
          slidesPerView={5}
          spaceBetween={16}
          modules={[Navigation, Pagination]}>
          {images.map((image, i) => (
            <SwiperSlide className="flex justify-center" key={image}>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <img {...imageProps(image, i)} className="w-full rounded-lg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>

      {selectedImage && <ZoomModal src={selectedImage} alt="Gallery image" onClose={() => setSelectedImage('')} />}
    </>
  );
}
