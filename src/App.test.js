import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
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

