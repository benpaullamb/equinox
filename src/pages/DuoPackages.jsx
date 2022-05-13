import PageMeta from '../components/PageMeta';
import Banner from '../components/Banner';
import Section from '../components/Section';
import Service from '../components/Service';
import services from '../services.json';
import bannerImage from '../images/duo-packages/main.jpg';

export default function DuoPackages() {
  return (
    <>
      <PageMeta title="Duo Packages - Equinox Barbers" />

      <Banner background={bannerImage} bgClassName="bg-center" />

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

      <Section className="pt-0 grid md:grid-cols-2 gap-4">
        {services.duoPackages.map((duoPackage) => (
          <Service {...duoPackage} key={duoPackage.name} />
        ))}
      </Section>

      <Section>
        <h2 className="text-xl md:text-2xl font-bold">Hair and Beard Grooming</h2>
      </Section>

      <Section className="pt-0 grid md:grid-cols-2 gap-4">
        {services.grooming.map((grooming) => (
          <Service {...grooming} key={grooming.name} />
        ))}
      </Section>
    </>
  );
}
