import "./css/bootstrap.min.css";
import "./css/my.css";
import "./css/style.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import NotFound from "./NotFound.js";
import Footer from "./components/Footer.js";
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
import NewsDetails from "./components/NewsDetails.js";
import IntroScreen from "./components/Intro.js";
import Header from "./components/Header";
import MenuOverlay from "./components/MenuOverlay";
import { useState } from "react";
import data from "./data/navItems.json";
import Orchestra from "./Orchestra.js";
import PublicContributions from "./PublicContributions.js";

function App() {
  const introTitles = {
    "/concertours": "Concert Tours",
    "/donations": "Donations",
    "/news/:id": "News",
    "/partners": "Partners",
    "/contact": "Contact",
    "/auditions": "Auditions",
    "/orchestra": "Orchestra",
    "/otherevents": "Other Events",
    "/faculty": "Faculty",
    "/organizer": "Organizer",
    "/artisticdirector": "Artistic Director",
    "/pressmedia": "Press and Media",
    "/legaldetails": "Legal Details",
    "/cookiepolicy": "Cookie Policy",
    "/privacypolicy": "Privacy Policy",
    "/publicontributions": "Public Contributions",
  };

  // Changing between menu and submenus
  const [elements, setElements] = useState(data);

  const changeElements = (id) => {
    const selectedItem = elements.find((item) => item.id === id); // Finds the element with the matching id
    const submenuItems = selectedItem.submenu || []; // Get the submenu items
    setElements(submenuItems); //updates the elements array only with the submenu items
  };

  //converts the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" }; // Formatting options
    return new Intl.DateTimeFormat("en-US", options).format(date); // Format the date
  }

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header
          navbarOpen={navbarOpen}
          setNavbarOpen={setNavbarOpen}
          setElements={setElements}
          data={data}
        />
        <MenuOverlay
          navbarOpen={navbarOpen}
          setNavbarOpen={setNavbarOpen}
          elements={elements}
          changeElements={changeElements}
          setElements={setElements}
          data={data}
        />
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
                    {path === "/news/:id" && <NewsDetails formatDate={formatDate} />}
                    {path === "/concertours" && <ConcertTours />}
                    {path === "/donations" && <Donations />}
                    {path === "/auditions" && <Auditions formatDate={formatDate} />}
                    {path === "/orchestra" && <Orchestra />}
                    {path === "/publicontributions" && <PublicContributions />}
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
