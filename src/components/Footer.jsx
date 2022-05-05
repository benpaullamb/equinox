import logoImage from '../images/logo-sm.png';

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="p-8 container mx-auto">
        <div className="grid md:grid-cols-[repeat(4,auto)] gap-4 md:gap-8">
          <div className="flex justify-center md:block">
            <img src={logoImage} className="max-w-[8rem] object-contain" alt="Equinox Logo" />
          </div>

          <a href="https://g.page/EquinoxSouthampton?share" target="_blank" rel="noreferrer" className="flex flex-col">
            <span className="text-lg font-bold">Location</span>
            <span>23 Oxford Street</span>
            <span>Southampton</span>
            <span>SO14 3DJ</span>
          </a>

          <div className="flex flex-col">
            <span className="text-lg font-bold">Opening times</span>
            <div className="grid grid-cols-[repeat(2,max-content)] gap-x-4">
              <span>Monday</span>
              <span>Closed</span>
              <span>Tuesday</span>
              <span>9:30 - 6:00</span>
              <span>Wednesday</span>
              <span>10:00 - 8:00</span>
              <span>Thursday</span>
              <span>9:30 - 6:00</span>
              <span>Friday</span>
              <span>9:30 - 6:00</span>
              <span>Saturday</span>
              <span>9:00 - 4:30</span>
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-bold">Contact</span>
            <a href="tel:02380234133">02380 234 133</a>
            <a
              href="mailto:equinox@equinoxgentlemansgrooming.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm break-all">
              equinox@equinoxgentlemansgrooming.com
            </a>
          </div>
        </div>

        <p className="mt-4 text-sm md:text-center">
          All online appointments are managed by you, giving you the flexibility and control to book or cancel your own
          appointment as required. Payment is taken 24 hours before your appointment. This service operates a strict 24
          hour cancellation policy.
        </p>
      </div>
    </footer>
  );
}
