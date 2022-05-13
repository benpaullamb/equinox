import PageMeta from '../components/PageMeta';
import Banner from '../components/Banner';
import Section from '../components/Section';
import ThreeImages from '../components/ThreeImages';

import bannerImage from '../images/home/headshot-1.jpg';

import headshotA1 from '../images/home/headshot-4.jpg';
import headshotA2 from '../images/home/headshot-5.jpg';
import headshotA3 from '../images/home/headshot-6.jpg';

import headshotB1 from '../images/home/headshot-7.jpg';
import headshotB2 from '../images/home/headshot-8.jpg';
import headshotB3 from '../images/home/headshot-9.jpg';

import headshotC1 from '../images/home/headshot-10.jpg';
import headshotC2 from '../images/home/headshot-11.jpg';
import headshotC3 from '../images/home/headshot-12.jpg';

export default function Home() {
  const imageSetA = [headshotA1, headshotA2, headshotA3];
  const imageSetB = [headshotB1, headshotB2, headshotB3];
  const imageSetC = [headshotC1, headshotC2, headshotC3];

  return (
    <>
      <PageMeta />

      <Banner background={bannerImage} />

      <Section>
        <p>
          Established in 2003, Equinox Gentleman's Refinery Southampton offers a wide range of services for men of all
          ages. We pride ourselves on having an excellent reputation both locally and further afield. All our stylists
          are trained at the highest level, will advise you on what is going to work best with your hair type and will
          offer expert advise in how to handle your hair needs.
        </p>
      </Section>

      <ThreeImages images={imageSetA} />

      <Section>
        <p>
          Here at Equinox we believe that 3 things are important, your hair, your shave and your experience. Indulge in
          a range of tailored services including men's cut and finish services, through to bespoke men's treatments and
          the classic luxurious traditional hot towel shave, delivered by barbering experts. Our salon is clean, and our
          aim at Equinox barber shop is to offer the highest standard of service in a relaxing and informal masculine
          environment.
        </p>
      </Section>

      <ThreeImages images={imageSetB} />

      <Section>
        <p>
          We simply love hair; the ultimate expression of self this conveys to the world. Our mission is to exceed all
          expectations. From the way our clients are able to book at their convenience through our mobile app; how the
          shop makes clients feel when they enter; the proficient technical excellence they receive while they're with
          us, benefiting from our knowledge of the latest ideas and trends.
        </p>
      </Section>

      <ThreeImages images={imageSetC} />

      <Section>
        <p>
          Equinox is a creative space with a relaxed atmosphere where we celebrate each client's individuality through
          bespoke cut and design. Since 2003 we have worked hard and with the necessary commitment and tenacity to
          build, what is now a successful, large, stable business boasting a rich assortment of customers from all walks
          of life in an energised and vibrant part of town.
        </p>

        <p className="mt-4">
          Here at Equinox gentlemen's refinery salon, Oxford Street, Southampton, we offer customers an unrivalled
          experience. From the moment you walk through the door, whether it's for a haircut, beard grooming or shave you
          can feel the infectious energy; passion; enjoyment; pride and sense of community we create here.
        </p>
      </Section>
    </>
  );
}
