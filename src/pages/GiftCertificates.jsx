import PageMeta from '../components/PageMeta';
import Banner from '../components/Banner';
import Section from '../components/Section';

import bannerImage from '../images/about/banner.jpg';

export default function GiftCertificates() {
  return (
    <>
      <PageMeta title="Gift Certificates - Equinox Barbers" />

      <Banner background={bannerImage} bgClassName="bg-center" />

      <Section>
        <h2 className="text-xl md:text-2xl font-bold">Gentleman's Gift Certificates</h2>

        <p className="mt-4">
          The perfect gift for the man who has everything. Gift Certificates are available and can be personally
          tailored to include specific treatments.
        </p>

        <p className="mt-4">
          Gentlemen's Grooming Gift Certificates are valid for up to 6 months from date of purchase. Certificates can be
          purchased in the salon.
        </p>

        <p className="mt-4">
          Please call us to find out more. Our number is <a href="tel:+44 (0)23 8023 4133">+44 (0)23 8023 4133</a>
        </p>

        <p className="mt-4">Gift vouchers are non-refundable and cannot be extended for any reason</p>
      </Section>
    </>
  );
}
