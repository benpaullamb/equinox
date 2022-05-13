import PageMeta from '../components/PageMeta';
import Section from '../components/Section';

export default function NotFound() {
  return (
    <>
      <PageMeta title="404 - Equinox Barbers">
        <meta name="robots" content="noindex" />
      </PageMeta>

      <Section className="pt-24 md:pt-32">
        <h2 className="text-2xl md:text-4xl">404 Page Not Found</h2>
      </Section>
    </>
  );
}
