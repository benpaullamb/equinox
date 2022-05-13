import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Equinox Barbers</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <Section className="pt-24 md:pt-32">
        <h2 className="text-2xl md:text-4xl">404 Page Not Found</h2>
      </Section>
    </>
  );
}
