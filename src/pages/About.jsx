import Banner from '../components/Banner';
import Section from '../components/Section';
import Gallery from '../components/Gallery';
import BigImage from '../components/BigImage';

import bannerImage from '../images/about/banner.jpg';

import mainImageA from '../images/about/main-1.jpg';
import mainImageB from '../images/about/main-2.jpg';

import galleryPicA1 from '../images/about/gallery-pic-1-1.jpg';
import galleryPicA2 from '../images/about/gallery-pic-1-2.jpg';
import galleryPicA3 from '../images/about/gallery-pic-1-3.jpg';
import galleryPicA4 from '../images/about/gallery-pic-1-4.jpg';
import galleryPicA5 from '../images/about/gallery-pic-1-5.jpg';
import galleryPicA6 from '../images/about/gallery-pic-1-6.jpg';
import galleryPicB1 from '../images/about/gallery-pic-2-1.jpg';
import galleryPicB2 from '../images/about/gallery-pic-2-2.jpg';
import galleryPicB3 from '../images/about/gallery-pic-2-3.jpg';
import galleryPicB4 from '../images/about/gallery-pic-2-4.jpg';
import galleryPicB5 from '../images/about/gallery-pic-2-5.jpg';
import galleryPicB6 from '../images/about/gallery-pic-2-6.jpg';

export default function About() {
  const galleryA = [galleryPicA1, galleryPicA2, galleryPicA3, galleryPicA4, galleryPicA5, galleryPicA6];
  const galleryB = [galleryPicB1, galleryPicB2, galleryPicB3, galleryPicB4, galleryPicB5, galleryPicB6];

  return (
    <>
      <Banner background={bannerImage} bgClassName="bg-center" />

      <Section>
        <p>
          We are located in the City of Southampton, which is itself steeped in history, providing sanctuary to some of
          the most lavish and luxurious world cruise liners and is home to our beloved Saints FC.
        </p>
        <p className="mt-4">
          Situated in the quiet surroundings of Oxford Street, nestled among the assortment of coffee houses and
          restaurants stands our beautifully converted Georgian town house. This provides the perfect setting for
          Equinox, the purveyor of the finest masculine grooming treatments available in town.
        </p>
      </Section>

      <BigImage src={mainImageA} alt="Inside the barbers with a dog sitting on one of the chairs" />

      <Section>
        <p>
          Equinox has a licensed bar offering the very best quality in alcoholic beverages. Whiskey, brandy, beers,
          wines and champagne are available whilst you wait in a plush, vintage yet fresh setting.
        </p>

        <p className="mt-4">
          Relax in the waiting lounge with free wifi... 50" TV... The ultimate boys toy Xbox One &amp; up to date
          magazines. As well as good music. You can even have a jamming session on the salons acoustic guitar if you are
          so inclined.
        </p>
      </Section>

      <Gallery images={galleryA} />

      <Section>
        <p>
          All online appointments are managed by you, giving you the flexibility and control to book or cancel your own
          appointment as required. This service operates a strict 24 hour cancellation policy. The Equinox clientele is
          refined and recognises the distinct difference between a haircut and an Equinox haircut, which is perfectly
          matched to a customer's lifestyle, while subtly accentuating their individuality. This different approach is
          no coincidence.
        </p>

        <p className="mt-4">
          Kerri Beale, proprietor of the classic men's salon and state registered senior stylist with over 32 years of
          shaving and hair grooming experience, was, herself, Sassoon trained in London.
        </p>

        <p className="mt-4">
          Understanding the importance of the training she received, globally recognised as the ultimate in hairdressing
          education, combined with her giftedness as a teacher and dedication to the styling of men's hair, she has
          personally trained all her staff to this exacting high standard, building a cutting/styling brand for Equinox
          and giving her staff a firm foundation from which to build their careers.
        </p>
      </Section>

      <Gallery images={galleryB} />

      <Section>
        <p>
          Equinox staff regularly enter national and international competitions, bringing back trophies and accolade and
          are constantly seeking perfection carrying out regular photo shoots. So, customers can relax back into the
          comfortable barber's chairs knowing they are in the safe and experienced hands of experts that possess the
          combined knowledge of head shape, hair texture and hair structure to give them the look they want.
        </p>

        <p className="mt-4">
          It is important to our team that we encourage each other. All staff are in house trained so we all cut/style
          and shave the same way to build our brand and to continually improve and hone our skills so that we remain
          fresh, full of ideas and at the top of our game. One public way that we do this is to compete with barbers and
          hairstylists both here at home and internationally.
        </p>

        <p className="mt-4">
          You will regularly see our staff entering competitions such as the American Crew UK “Face Off” and American
          Crew “All Stars Challenge”, Barber Connect, Barber Bash, British Barber's Association, Masters Barbers and
          even bringing home awards. Equinox have got through to the finals every time and even placed 2nd and 3rd in
          the competitions.
        </p>

        <p className="mt-4">
          Equinox are also the winners of The English Hair and Beauty Awards barbershop of the year 2018 in the south
          east regional's and the overall regional winners of 2018 which is a great achievement for the salon.
        </p>
      </Section>

      <BigImage src={mainImageB} alt="Bar inside the barbers" />

      <Section>
        <p>
          Here at Equinox we constantly strive to forge that perfect union between know-how, desire and attainability.
          We operate to a professional standard which gives us the flexibility freedom and experience to help enable our
          clients to realise the look they want.
        </p>

        <p className="mt-4">
          The salon communicates an uncompromising statement, through its décor, furnishings and artwork, of it's
          unrepentant commitment to the avant-garde, always seeking out the perfect blend between classic vintage and
          modern chic. I believe this positively resonates with customers, which is evidenced by our diverse assortment
          of customers, and accurately portrays our intent.
        </p>
      </Section>
    </>
  );
}
