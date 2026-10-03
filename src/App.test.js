import { render, screen, fireEvent } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Auditions from './components/auditions/Auditions';
import AuditionsForm from './components/auditions/AuditionsForm';
import MusiciansArea from './components/musiciansarea/MusiciansArea';
import ContactForm from './components/contact/Form';
import { parseConcertInfo } from './utils/concertUtils';

test('renders the main homepage with brand title', () => {
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
  const brandElements = screen.getAllByAltText(/European Spirit of Youth Orchestra/i);
  expect(brandElements.length).toBeGreaterThan(0);
});

test('parseConcertInfo properly parses title and admission badges', () => {
  const c1 = {
    description: "Voyage d’un musicien — Free entry",
    city: "Trieste, Italy",
    private: false,
  };
  const parsed1 = parseConcertInfo(c1);
  expect(parsed1.title).toBe("Voyage d’un musicien");
  expect(parsed1.admission).toBe("Free entry");
  expect(parsed1.isFree).toBe(true);

  const c2 = {
    description: "Private Gala",
    city: "Vienna",
    private: true,
  };
  const parsed2 = parseConcertInfo(c2);
  expect(parsed2.title).toBe("Private Gala");
  expect(parsed2.admission).toBe("Private Event");
  expect(parsed2.isPrivate).toBe(true);
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

test('renders auditions page with closed notice when auditions are closed', () => {
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

