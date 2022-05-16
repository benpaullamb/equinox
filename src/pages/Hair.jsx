import PageMeta from '../components/PageMeta';
import Banner from '../components/Banner';
import Section from '../components/Section';
import Service from '../components/Service';
import services from '../services.json';
import bannerImage from '../images/home/headshot-2.jpg';

export default function Hair() {
  return (
    <>
      <PageMeta
        title="Hair - Equinox Barbers"
        description="Our stylists are experts in creative men's fashion work, and are true masters of their field offering the very
          best in Gentlemen's grooming"
      />

      <Banner background={bannerImage} />

      <Section>
        <h2 className="text-xl md:text-2xl font-bold">Gentleman's Hair Grooming</h2>

        <p className="mt-4">
          We operate an appointments only service from Tuesday to Saturday and a late night service on Wednesday's
          10am-8pm. All online appointments are managed by you, giving you the flexibility and control to book or cancel
          your own appointment as required. This service operates a strict 24 hour cancellation policy.
        </p>

        <p className="mt-4">
          Here at Equinox, hair perfection is in the DNA of each member of our team and 100% customer satisfaction
          remains as our focus. From the opening of the doors first thing in the morning to the point when we hang up
          our clippers and turn off the lights at the end of the day we are committed to creating the perfect
          hairstyling experience for clients time and time again.
        </p>

        <p className="mt-4">
          Our stylists are experts in creative men's fashion work, and are true masters of their field offering the very
          best in Gentlemen's grooming. At Equinox consultations are really important to us. Our team of top stylist
          will guide you to a hair cut that suits your face shape, personality, career and your attitude to grooming.
        </p>

        <p className="mt-4">
          Hair styling and design is a living, breathing and evolving art form. It's an intimate creation; a personal
          connection which communicates intention. It's an expression of one's self; of individualism and personal
          identity. All prices include VAT
        </p>
      </Section>

      <Section className="pt-0 grid md:grid-cols-2 gap-4">
        {services.haircuts.map((haircut) => (
          <Service {...haircut} key={haircut.name} />
        ))}
      </Section>
    </>
  );
}
