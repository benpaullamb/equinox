import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs';

export default function SocialMedia({ className = '' }) {
  const socials = [
    {
      icon: BsInstagram,
      url: 'https://www.instagram.com/equinoxgentlemansrefinery',
      label: 'Instagram',
    },
    {
      icon: BsFacebook,
      url: 'https://www.facebook.com/EquinoxSouthampton',
      label: 'Facebook',
    },
    {
      icon: BsTwitter,
      url: 'https://twitter.com/equinoxbarbers',
      label: 'Twitter',
    },
  ];

  return (
    <div className={`${className} flex items-center`}>
      {socials.map(({ icon: Icon, url, label }) => (
        <a
          href={url}
          target="_blank"
          aria-label={label}
          className="mx-2 text-3xl md:text-4xl"
          rel="noreferrer"
          key={url}>
          <Icon />
        </a>
      ))}
    </div>
  );
}
