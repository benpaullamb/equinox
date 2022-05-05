import Banner from '../components/Banner';
import Section from '../components/Section';
import Service from '../components/Service';

import mainImage from '../images/duo-packages/main.jpg';

export default function DuoPackages() {
  const beardCuts = [
    {
      name: 'Equinox Signature Head + Face Shave',
      description: `Duration: 2hrs. This is a luxurious grooming treatment combining a mini facial/face massage and cut throat razor 
        shave combining with a head shave. We will first take the hair down to grade 0 and apply a hot lather of 
        Proraso shaving cream with a badger shaving brush. This is followed by a steaming hot towel wrap to soften 
        the hair. A second hot lather will then be applied before giving the closest of shaves. We then finish off 
        the treatment with Proraso moisturiser gently massaged into the scalp.`,
      price: 80,
    },
    {
      name: 'Equinox Signature Wet Shave + Wet Cut & Finish',
      description: `Duration: 1hr 30 mins. This is a luxurious grooming treatment combining a mini facial/face massage and cut 
        throat razor shave combining with the hair grooming service. The hair is cut, dried and finished with cut throat edging 
        using products to suit your hair type. (includes skin fade option)`,
      price: 71,
    },
    {
      name: 'Equinox Signature Wet Shave + Back & Sides',
      description: `Duration: 1hr 30 mins. This is a luxurious grooming treatment combining a mini facial/face massage and cut 
        throat razor shave combining with the hair grooming service. Just the Back & Sides is cut, no hair is cut on top. The 
        hair is then sprayed down, dried and finished with cutthroat edging, using products to suit your hair type.`,
      price: 69,
    },
    {
      name: 'Equinox Signature Wet Shave + Clipper Cut',
      description: `Duration: 1hr 30 mins. This is a luxurious grooming treatment combining a mini facial/face massage and cut 
        throat razor shave combining with the hair grooming service. Clipper Cut grading all over with clipper grades, blending 
        and cut throat edging.`,
      price: 65,
    },
    {
      name: "Gentleman's Wet Cut And Finish + Beard Grooming",
      description: `Relax in the knowledge your barber is an expert in cutting and styling your hair & beard, creating the perfect 
        hair & beard grooming that suits your lifestyle. using only the best hair and beard products`,
      price: 48,
    },
    {
      name: "Gentleman's Back & Sides + Beard Grooming",
      description: `Relax in the knowledge your barber is an expert in cutting and styling your hair & beard, creating the perfect 
        hair & beard grooming that suits your lifestyle. using only the best hair and beard products`,
      price: 43,
    },
    {
      name: "Gentleman's Clipper Cut + Beard Grooming",
      description: `Relax in the knowledge your barber is an expert in cutting and styling your hair & beard, creating the perfect 
        hair & beard grooming that suits your lifestyle. using only the best hair and beard products`,
      price: 39,
    },
  ];

  return (
    <>
      <Banner mobileImage={mainImage} />

      <Section>
        <h2 className="text-xl md:text-2xl font-bold">Duo Packages</h2>

        <p className="mt-4">
          Our clients recognise Equinox as a friendly and professional team that consistently delivers superb services
          to an excellent and high standard combined with a welcoming and warm smile.
        </p>

        <p className="mt-4">
          Nothing gives us greater pleasure than to see a client walk out of our salon with a hairstyle they love and a
          spring in their step Every day is a great day at Equinox! We couldn't do the job we love without our amazing
          clients.
        </p>
      </Section>

      <Section className="grid md:grid-cols-2 gap-4">
        {beardCuts.map((beardCut) => (
          <Service {...beardCut} key={beardCut.name} />
        ))}
      </Section>
    </>
  );
}
