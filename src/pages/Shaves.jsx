import PageMeta from '../components/PageMeta';
import Banner from '../components/Banner';
import Section from '../components/Section';
import Service from '../components/Service';
import services from '../services.json';
import bannerImage from '../images/shaves/main.jpg';

export default function Shaves() {
  return (
    <>
      <PageMeta title="Shaves - Equinox Barbers" />

      <Banner background={bannerImage} bgClassName="bg-center md:bg-top" />

      <Section>
        <h2 className="text-xl md:text-2xl font-bold">Gentleman's Shaving Treatments</h2>

        <p className="mt-4">
          Here at Equinox Gentleman's Grooming we are most famous for our Equinox signature traditional wet shave
          treatment with expert use of a cut throat razor. You will be treated to a full deluxe wet shave, which will
          include the use of the luxury Acumen skin care line.
        </p>

        <p className="mt-4">
          The process includes three hot towels; the shave mini facial and a further two cold towels to give you an
          unsurpassed feeling of energy and rejuvenation.
        </p>

        <p className="mt-4">
          Once complete, you will then receive a massage lasting 5 minutes specifically targeting the head, face, neck,
          shoulders and arms; designed to remove tension and induce a sense of wellbeing. You will then feel ready to
          tackle anything... for the rest of your day ahead.
        </p>

        <p className="mt-4">
          Our process is followed by a facial consultation and no expense has been spared to help ensure you have the
          perfect grooming experience.
        </p>

        <p className="mt-4">
          This includes the use of the Acumen professional skin care products, specially formulated creams; the use of a
          pure badger hair shaving brush and of course the best available steel to give you the closest, smoothest
          shave.
        </p>

        <p className="mt-4">
          You really can't beat the experience of a traditional barber wet shave. The experience of relaxing for 45
          minutes and being bound in hot towels leaves you looking and feeling great.
        </p>

        <p className="mt-4">
          You are in the safe and warm hands of friendly hand-picked experts with over 30 years in the shaving and
          barbering business. Our staff are truly cosmopolitan, creating a rich and inspirational environment and have a
          collective desire to ensure you have a truly wonderful experience.
        </p>
      </Section>

      <Section className="pt-0 grid md:grid-cols-2 gap-4">
        {services.shaves.map((shave) => (
          <Service {...shave} key={shave.name} />
        ))}
      </Section>
    </>
  );
}
