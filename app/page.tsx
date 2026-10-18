import Image from 'next/image';
import PlansCarousel from '@/components/PlansCarousel';
import Reveal from '@/components/Reveal';
import SiteHeader from '@/components/SiteHeader';
import Words from '@/components/Words';
import { cabins, inr, meetingRooms, site, waLink } from '@/lib/site';

const gallery = [
  { src: '/images/cafe.jpg', alt: 'Lounge booths and cafe tables at Workco', caption: 'Lounge and cafe' },
  { src: '/images/pantry.jpg', alt: 'Fully fitted pantry at Workco', caption: 'Fitted pantry', pos: 'center 62%' },
  { src: '/images/reception.jpg', alt: 'Workco reception with a glass meeting room', caption: 'Reception', pos: '40% center' },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        <section className="hero" aria-label="Introduction">
          <div className="hero-photo">
            <Image src="/images/workspace.jpg" alt="The Workco open workspace with rows of desks" fill priority sizes="100vw" />
          </div>
          <div className="wrap">
            <p className="label rise">{site.tagline}</p>
            <Words as="h1" className="hero-h1" text="Work your way" dot />
            <p className="lead rise d2">Calm, well-designed workspaces for focus, meetings and growing teams.</p>
            <div className="hero-cta rise d3">
              <a className="btn btn-red" href="#plans">
                Day pass from ₹199
              </a>
              <a className="btn btn-ghost" href="#space">
                Explore the space
              </a>
            </div>
          </div>
        </section>

        <section className="band intro" id="space" aria-labelledby="space-title">
          <div className="wrap">
            <h2 className="label" id="space-title">
              Welcome to Workco
            </h2>
            <div className="intro-text">
              <p className="statement">
                Everything you need to do your best work is already here. <em>Bring your laptop, find your seat and begin.</em>
              </p>
            </div>
          </div>
          <div className="wrap">
            <div className="gallery">
              {gallery.map((g) => (
                <figure key={g.src}>
                  <div className="ph">
                    <Image src={g.src} alt={g.alt} fill sizes="(min-width: 760px) 33vw, 100vw" style={g.pos ? { objectPosition: g.pos } : undefined} />
                  </div>
                  <figcaption>{g.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="band" id="plans" style={{ paddingTop: 0 }} aria-label="Plans">
          <div className="wrap">
            <div className="plans-head">
              <div style={{ display: 'grid', gap: 20 }}>
                <p className="label">Plans</p>
                <Words as="h2" className="h2" text="Choose how you work" dot />
              </div>
              <p className="lead" style={{ maxWidth: '36ch' }}>
                Walk in for a day or join monthly. Wi-Fi, air conditioning and pantry access come with every plan.
              </p>
            </div>
            <PlansCarousel />
            <p className="note">
              Meeting time is booked in 30-minute credits. Book in advance; unused credits expire at the end of each month.
            </p>
          </div>
        </section>

        <section className="band" id="meet" style={{ paddingTop: 0 }} aria-label="Meeting rooms">
          <div className="wrap split">
            <div className="split-ph">
              <Image src="/images/conference.jpg" alt="Workco conference room with a long table and chairs" fill sizes="(min-width: 960px) 50vw, 100vw" />
            </div>
            <div className="split-text">
              <p className="label">Meeting rooms</p>
              <Words as="h2" className="h2" text="A room that means business" dot />
              <p className="lead">Bright, fully equipped rooms for client meetings, interviews and team sessions.</p>
              <div className="rows">
                {meetingRooms.map((m) => (
                  <div className="row" key={m.name}>
                    <div className="k">
                      <b>{m.name}</b>
                      <span>{m.note}</span>
                    </div>
                    <div className="v">
                      {inr(m.price)} <small>{m.unit}</small>
                    </div>
                  </div>
                ))}
              </div>
              <a className="link" href={waLink("Hi Workco, I'd like to book a meeting room.")} target="_blank" rel="noopener">
                Book a room
              </a>
            </div>
          </div>
        </section>

        <section className="band" id="cabins" style={{ paddingTop: 0 }} aria-label="Private cabins">
          <div className="wrap split rev">
            <div className="split-ph">
              <Image
                src="/images/lounge.jpg"
                alt="Quiet seating corner at Workco"
                fill
                sizes="(min-width: 960px) 50vw, 100vw"
                style={{ objectPosition: 'center 85%' }}
              />
            </div>
            <div className="split-text">
              <p className="label">Private cabins</p>
              <Words as="h2" className="h2" text="A space that's all yours" dot />
              <p className="lead">A dedicated cabin for you and your team, with everything included.</p>
              <div className="rows">
                {cabins.map((c) => (
                  <div className="row" key={c.name}>
                    <div className="k">
                      <b>{c.name}</b>
                      <span>{c.note}</span>
                    </div>
                    <div className="v">
                      <small>from </small>
                      {inr(c.price)}
                    </div>
                  </div>
                ))}
              </div>
              <p className="small">Monthly prices. Add meeting room credits from ₹999 a month.</p>
              <a className="link" href={waLink("Hi Workco, I'd like to know about private cabins.")} target="_blank" rel="noopener">
                Ask about cabins
              </a>
            </div>
          </div>
        </section>

        <section className="band closing" id="visit" aria-label="Visit Workco">
          <div className="ring" aria-hidden="true" />
          <div className="wrap">
            <div>
              <p className="label">Visit us</p>
              <p className="motto">
                <Words text="Your Space." />
                <Words text="Your Success." />
                <Words className="soft" text="Your Way of Working" dot />
              </p>
            </div>
            <div className="contact">
              <div>
                <span>Call or WhatsApp</span>
                <b>
                  <a href={`tel:${site.phoneIntl}`} style={{ textDecoration: 'none' }}>
                    {site.phoneDisplay}
                  </a>
                </b>
              </div>
              <div>
                <span>Website</span>
                <b>workco.in</b>
              </div>
              <div>
                <a className="btn btn-red" href={waLink("Hi Workco, I'd like to book a tour.")} target="_blank" rel="noopener">
                  Book a tour on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <Image src="/images/logo-light.png" alt="Workco" width={87} height={28} />
          <p className="fine">
            Prices are per month unless stated. The Daily Pass is valid 9 AM to 8 PM on the day of use. Branch access applies to
            participating locations. Please confirm terms, availability and taxes before purchase.
          </p>
        </div>
      </footer>

      <a className="wa-float" href={waLink("Hi Workco, I'd like to know more.")} target="_blank" rel="noopener" aria-label="Chat with Workco on WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="#fff"
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
          />
        </svg>
      </a>

      <Reveal />
    </>
  );
}
