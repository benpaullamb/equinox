import { Helmet } from 'react-helmet-async';

export default function PageMeta({
  title = 'Equinox Barbers',
  description = 'Multi-award winning barber shop',
  children,
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta itemprop="description" content={description} />
      <meta name="twitter:description" content={description} />
      {children}
    </Helmet>
  );
}
