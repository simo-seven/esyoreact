import { render, screen, fireEvent } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Auditions from './components/auditions/Auditions';
import AuditionsForm from './components/auditions/AuditionsForm';
import Expired from './components/auditions/Expired';
import MusiciansArea from './components/musiciansarea/MusiciansArea';
import ContactForm from './components/contact/Form';
import { parseConcertInfo } from './utils/concertUtils';

import MenuOverlay from './components/navigation/MenuOverlay';
import LegalDetails from './components/LegalDetails';
import CookiePolicy from './components/CookiePolicy';
import PrivacyPolicy from './components/PrivacyPolicy';
import PublicContributions from './components/contributions/PublicContributions';
import Donations from './components/donations/Donations';
import DesktopConcerts from './components/tours/DesktopConcerts';
import MobileConcerts from './components/tours/MobileConcerts';
import newsData from './data/news.json';

test('renders the main homepage with brand title', () => {
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
  const brandElements = screen.getAllByAltText(/European Spirit of Youth Orchestra/i);
  expect(brandElements.length).toBeGreaterThan(0);
});

test('parseConcertInfo properly parses title, admission badges, and detects past concerts', () => {
  const c1 = {
    date: "22 September",
    dateISO: "2026-09-22",
    description: "Voyage d’un musicien — Free entry",
    city: "Trieste, Italy",
    private: false,
  };
  const parsed1 = parseConcertInfo(c1, new Date("2026-10-15"));
  expect(parsed1.title).toBe("Voyage d’un musicien");
  expect(parsed1.admission).toBe("Free entry");
  expect(parsed1.isFree).toBe(true);
  expect(parsed1.isPassed).toBe(true);
  expect(parsed1.day).toBe("22");
  expect(parsed1.month).toBe("SEP");

  const c2 = {
    date: "10 December",
    dateISO: "2026-12-10",
    description: "Private Gala",
    city: "Vienna",
    private: true,
  };
  const parsed2 = parseConcertInfo(c2, new Date("2026-10-15"));
  expect(parsed2.title).toBe("Private Gala");
  expect(parsed2.admission).toBe("Private Event");
  expect(parsed2.isPrivate).toBe(true);
  expect(parsed2.isPassed).toBe(false);
  expect(parsed2.day).toBe("10");
  expect(parsed2.month).toBe("DEC");
});

test('footer does not render empty FAQ link and renders organizer text', () => {
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
  expect(screen.queryByText(/Frequently Asked Questions \(FAQ\)/i)).not.toBeInTheDocument();
  expect(screen.getByText(/Cultural association SGME/i)).toBeInTheDocument();
});

test('renders auditions page with upcoming notice when auditions start soon', () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };
  render(
    <HelmetProvider>
      <MemoryRouter>
        <Auditions formatDate={formatDate} />
      </MemoryRouter>
    </HelmetProvider>
  );
  expect(screen.getByRole('heading', { name: /Auditions Will Start Soon!/i })).toBeInTheDocument();
  expect(screen.getByText(/Auditions will start soon on/i)).toBeInTheDocument();
  expect(screen.getByText(/December 1, 2026/i)).toBeInTheDocument();
  expect(screen.getByText(/March 1, 2027/i)).toBeInTheDocument();
});

test('renders expired auditions notice component', () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };
  render(
    <HelmetProvider>
      <MemoryRouter>
        <Expired deadline="2026-03-31" formatDate={formatDate} />
      </MemoryRouter>
    </HelmetProvider>
  );
  expect(screen.getByRole('heading', { name: /Auditions Are Closed/i })).toBeInTheDocument();
  expect(screen.getByText(/The audition period ended on/i)).toBeInTheDocument();
  expect(screen.getByText(/March 31, 2026/i)).toBeInTheDocument();
  expect(screen.getByText(/next auditions will be announced soon/i)).toBeInTheDocument();
});

test('renders auditions form with proper input fields and labels', () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <AuditionsForm />
      </MemoryRouter>
    </HelmetProvider>
  );
  expect(screen.getByRole('heading', { name: /Audition Form/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
});

test('MusiciansArea displays password gate and unlocks with correct passcode', () => {
  sessionStorage.clear();
  render(
    <HelmetProvider>
      <MemoryRouter>
        <MusiciansArea />
      </MemoryRouter>
    </HelmetProvider>
  );

  // Initially locked
  expect(screen.getByText(/Passcode Required/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Unlock Musician's Area/i })).toBeInTheDocument();
  expect(screen.queryByText(/Step 1/i)).not.toBeInTheDocument();

  // Try previous or wrong password
  const input = screen.getByPlaceholderText(/Enter password.../i);
  fireEvent.change(input, { target: { value: 'esyo2026' } });
  fireEvent.click(screen.getByRole('button', { name: /Unlock Musician's Area/i }));
  expect(screen.getByText(/Incorrect password/i)).toBeInTheDocument();

  // Enter exact password esyo2027
  fireEvent.change(input, { target: { value: 'esyo2027' } });
  fireEvent.click(screen.getByRole('button', { name: /Unlock Musician's Area/i }));

  // Content is unveiled
  expect(screen.getByText(/Step 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Step 2/i)).toBeInTheDocument();
  expect(screen.getByText(/Step 3/i)).toBeInTheDocument();
  expect(screen.getByText(/Step 4/i)).toBeInTheDocument();
  expect(screen.getByText(/Authenticated as/i)).toBeInTheDocument();

  // Test locking again
  fireEvent.click(screen.getByTitle(/Lock the area/i));
  expect(screen.getByText(/Passcode Required/i)).toBeInTheDocument();
});

test('renders contact form with proper inputs and labels', () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <ContactForm />
      </MemoryRouter>
    </HelmetProvider>
  );
  expect(screen.getByRole('heading', { name: /Contact Form/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/Your Name and Surname/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Your Email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
});

test('MenuOverlay displays Instagram and YouTube but removes contacts link', () => {
  const dummyElements = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "Contact", to: "/contact" },
  ];
  render(
    <HelmetProvider>
      <MemoryRouter>
        <MenuOverlay
          navbarOpen={true}
          setNavbarOpen={() => {}}
          elements={dummyElements}
          changeElements={() => {}}
          setElements={() => {}}
          data={dummyElements}
        />
      </MemoryRouter>
    </HelmetProvider>
  );

  // Social bar links
  expect(screen.getByLabelText(/ESYO Instagram/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/ESYO YouTube/i)).toBeInTheDocument();
  expect(screen.queryByLabelText(/ESYO Email/i)).not.toBeInTheDocument();
});

test('renders uniformized LegalDetails with impressum and governance info', () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <LegalDetails />
      </MemoryRouter>
    </HelmetProvider>
  );
  expect(screen.getByRole('heading', { name: /Organizer/i })).toBeInTheDocument();
  expect(screen.getByText(/90049860324/i)).toBeInTheDocument();
  expect(screen.getByText(/Download Official Disclaimer \(PDF\)/i)).toBeInTheDocument();
});

test('renders uniformized CookiePolicy with cookie types', () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <CookiePolicy />
      </MemoryRouter>
    </HelmetProvider>
  );
  expect(screen.getByRole('heading', { name: /Types of Cookies/i })).toBeInTheDocument();
  expect(screen.getByText(/Technical Cookies \(Strictly Necessary\)/i)).toBeInTheDocument();
  expect(screen.getByText(/Third-Party Analytical Cookies/i)).toBeInTheDocument();
});

test('renders uniformized PrivacyPolicy with GDPR articles', () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <PrivacyPolicy />
      </MemoryRouter>
    </HelmetProvider>
  );
  expect(screen.getByRole('heading', { name: /1\. Data Controller/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /9\. Rights of Data Subjects/i })).toBeInTheDocument();
});

test('renders uniformized PublicContributions with year selector and cards', () => {
  const renderBody = (text) => <p>{text}</p>;
  render(
    <HelmetProvider>
      <MemoryRouter>
        <PublicContributions renderBody={renderBody} />
      </MemoryRouter>
    </HelmetProvider>
  );
  expect(screen.getByLabelText(/Select Calendar Year/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Records for/i })).toBeInTheDocument();
});

test('renders uniformized Donations page with IBAN and alumni testimonials', () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <Donations />
      </MemoryRouter>
    </HelmetProvider>
  );
  expect(screen.getByRole('heading', { name: /Bank Transfer Information/i })).toBeInTheDocument();
  expect(screen.getByText(/IT11K0892802200010000053126/i)).toBeInTheDocument();
  expect(screen.getByText(/CCRTIT2TVOO/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /What Do Former Members Say\?/i })).toBeInTheDocument();
});

test('news data contains auditions 2027/2028 announcement with registration dates', () => {
  const auditionNews = newsData.find((item) => item.id === '20261026-auditions-announcement');
  expect(auditionNews).toBeDefined();
  expect(auditionNews.title).toMatch(/Auditions 2027\/2028/i);
  expect(auditionNews.body).toContain('1 December 2026');
  expect(auditionNews.body).toContain('1 March 2027');
  expect(auditionNews.button_link).toBe('/auditions');
});

test('DesktopConcerts and MobileConcerts render prominent concert details and flyer download link', () => {
  const sampleConcerts = [
    {
      id: 3,
      city: "Trieste, Italy",
      date: "9 November",
      dateISO: "2026-11-09",
      venue: "Magazzino 26 (Sala Luttazzi)",
      time: "20.30",
      description: "Suoni dei Balcani — Free entry",
      program: "Concert by the symphony orchestra of Belgrade",
      flyer: "/files/flyers/programma novembre_esecOK.pdf",
      special_guest: "Guest Artist",
      private: false,
    },
  ];

  const { rerender } = render(<DesktopConcerts concerts={sampleConcerts} />);
  expect(screen.getByText(/9 November/i) || screen.getByText("9")).toBeTruthy();
  expect(screen.getByText("20.30")).toBeInTheDocument();
  expect(screen.getByText("Trieste, Italy")).toBeInTheDocument();
  expect(screen.getByText("Magazzino 26 (Sala Luttazzi)")).toBeInTheDocument();

  const desktopFlyerLink = screen.getByRole('link', { name: /Download Programme & Flyer/i });
  expect(desktopFlyerLink).toHaveAttribute('href', '/files/flyers/programma novembre_esecOK.pdf');
  expect(desktopFlyerLink).toHaveAttribute('target', '_blank');

  rerender(<MobileConcerts concerts={sampleConcerts} />);
  const mobileFlyerLinks = screen.getAllByRole('link', { name: /Download Programme & Flyer/i });
  expect(mobileFlyerLinks.length).toBeGreaterThan(0);
  expect(mobileFlyerLinks[0]).toHaveAttribute('href', '/files/flyers/programma novembre_esecOK.pdf');
});


