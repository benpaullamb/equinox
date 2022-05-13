import { Helmet } from 'react-helmet-async';
import Banner from '../components/Banner';
import Section from '../components/Section';
import Service from '../components/Service';
import services from '../services.json';
import bannerImage from '../images/beards/main.jpg';

export default function Hair() {
  return (
    <>
      <Helmet>
        <title>Beards - Equinox Barbers</title>
      </Helmet>

      <Banner background={bannerImage} bgClassName="bg-center" />

      <Section>
        <h2 className="text-xl md:text-2xl font-bold">Gentleman's Beard Grooming</h2>

        <p className="mt-4">
          Our clients are at the centre of our world and we are dedicated to making each and every visit a “luxury
          experience”. An important ingredient of our success is our attentiveness to our client's needs and our
          readiness to embrace new concepts and boldly adopt new ideas.
        </p>

        <p className="mt-4">
          Our expert barbers are always on hand to listen to and accurately interpret our client's desires and wants,
          keenly matching these with their hair type and structure to produce a perfectly balanced and blended work of
          art.
        </p>

        <p className="mt-4">
          This is followed by a consultation An application of shaving cream will be given to the neck and beard line.
          The finishing touches to beard shaping will then be made with skill and precision using an open razor blade.
          The result will be crisp, sharp, straight lines and no visible stubble... Perfect!
        </p>

        <p className="mt-4">All prices include VAT</p>
      </Section>

      <Section className="pt-0 grid md:grid-cols-2 gap-4">
        {services.beardCuts.map((beardCut) => (
          <Service {...beardCut} key={beardCut.name} />
        ))}
      </Section>
    </>
  );
}
