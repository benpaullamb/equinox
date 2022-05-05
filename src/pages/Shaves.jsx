import Banner from '../components/Banner';
import Section from '../components/Section';
import Service from '../components/Service';

import mainImage from '../images/shaves/main.jpg';

export default function Shaves() {
  const shaves = [
    {
      name: 'Equinox Signature Acumen Wet Shave',
      description: `Duration: 45-mins. Please note that treatment times given here are approximations only. 
        Treatments may be subject to change depending on skin type. This is a luxurious grooming treatment 
        combining a mini facial/face massage and cut throat razor shave.`,
      price: 46,
    },
    {
      name: 'Traditional Wet Head Shave',
      description: `Do you want a real clean shaven look, with no visible stubble or shadows? Then try our 
        hot towel head shave. We will first take the hair down to grade 0 and apply a hot lather of Proraso 
        shaving cream with a badger shaving brush. This is followed by a steaming hot towel wrap to soften 
        the hair. A second hot lather will then be applied before giving the closest of shaves. We then 
        finish off the treatment with Proraso moisturiser gently massaged into the scalp.`,
      price: 36,
    },
  ];

  return (
    <>
      <Banner mobileImage={mainImage} />

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

      <Section className="grid md:grid-cols-2 gap-4">
        {shaves.map((shave) => (
          <Service {...shave} key={shave.name} />
        ))}
      </Section>
    </>
  );
}
