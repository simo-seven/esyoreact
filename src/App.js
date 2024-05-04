import "./css/bootstrap.min.css";
import "./css/my.css";
import "./css/style.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import NotFound from "./NotFound.js";
import Footer from "./Footer.js";
import Contact from "./Contact.js";
import Donations from "./Donations.js";
import Organizer from "./Organizer.js";
import PrivacyPolicy from "./PrivacyPolicy.js";
import LegalDetails from "./LegalDetails.js";
import CookiePolicy from "./CookiePolicy.js";
import PressMedia from "./PressMedia.js";
import ArtisticDirector from "./ArtisticDirector.js";
import Faculty from "./Faculty.js";
import OtherEvents from "./OtherEvents.js";
import Auditions from "./Auditions.js";
import ConcertTours from "./ConcertTours.js";
import Partners from "./Partners.js";
import NewsDetails from "./NewsDetails.js";
import Navbar from "./Navbar.js";
import IntroScreen from "./Intro.js";

function App() {
  const introTitles = {
    "/concertours": "Concert Tours",
    "/donations": "Donations",
    "/news/:id": "News",
    "/partners": "Partners",
    "/contact": "Contact",
    "/auditions": "Auditions",
    "/otherevents": "Other Events",
    "/faculty": "Faculty",
    "/organizer": "Organizer",
    "/artisticdirector": "Artistic Director",
    "/pressmedia": "Press and Media",
    "/legaldetails": "Legal Details",
    "/cookiepolicy": "Cookie Policy",
    "/privacypolicy": "Privacy Policy",
  };
  const items = [
    { title: "Home", url: "/" },
    {
      title: "About",
      hasSubmenu: true,
      submenu: [
        { title: "Orchestra", url: "/orchestra" },
        { title: "Artistic Director", url: "/artisticDirector" },
        { title: "Faculty", url: "/faculty" },
        { title: "Organizer", url: "/organizer" },
        { title: "Partners", url: "/partners" },
      ],
    },
    {
      title: "Season",
      hasSubmenu: true,
      submenu: [
        { title: "Auditions", url: "/auditions" },
        { title: "Concert Tours", url: "/concertours" },
        { title: "Other Events", url: "/otherevents" },
      ],
    },
    { title: "Donations", url: "donations" },
    { title: "Contact", url: "contact" },
  ];

  return (
    <Router>
      <div className="App">
        <Navbar items={items} />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            {Object.entries(introTitles).map(([path, title]) => (
              <Route
                key={path}
                path={path}
                element={
                  <>
                    <IntroScreen title={title} />
                    {path === "/privacypolicy" && <PrivacyPolicy />}
                    {path === "/cookiepolicy" && <CookiePolicy />}
                    {path === "/legaldetails" && <LegalDetails />}
                    {path === "/pressmedia" && <PressMedia />}
                    {path === "/artisticdirector" && <ArtisticDirector />}
                    {path === "/organizer" && <Organizer />}
                    {path === "/faculty" && <Faculty />}
                    {path === "/otherevents" && <OtherEvents />}
                    {path === "/contact" && <Contact />}
                    {path === "/partners" && <Partners />}
                    {path === "/news/:id" && <NewsDetails />}
                    {path === "/concertours" && <ConcertTours />}
                    {path === "/donations" && <Donations />}
                    {path === "/auditions" && <Auditions />}
                  </>
                }
              />
            ))}
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
