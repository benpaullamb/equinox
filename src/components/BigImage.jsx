export default function BigImage(imgProps) {
  return (
    <section className="md:p-8 md:container md:mx-auto">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img {...imgProps} className="w-full md:h-96 md:object-cover md:rounded-lg" />
    </section>
  );
}
