import "./css/bootstrap.min.css";
import "./css/my.css";
import "./css/style.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home.js";
import NotFound from "./components/NotFound.js";
import Footer from "./components/headers_footer/Footer.js";
import Contact from "./components/contact/Contact.js";
import Donations from "./components/donations/Donations.js";
import Organizer from "./components/organizer/Organizer.js";
import PrivacyPolicy from "./components/PrivacyPolicy.js";
import LegalDetails from "./components/LegalDetails.js";
import CookiePolicy from "./components/CookiePolicy.js";
import PressMedia from "./components/PressMedia.js";
import ArtisticDirector from "./components/conductor/ArtisticDirector.js";
import Faculty from "./components/faculty/Faculty.js";
import OtherEvents from "./components/OtherEvents.js";
import Auditions from "./components/auditions/Auditions.js";
import ConcertTours from "./components/tours/ConcertTours.js";
import Partners from "./components/partners/Partners.js";
import NewsDetails from "./components/news/NewsDetails.js";
import IntroScreen from "./components/headers_footer/Intro.js";
import Header from "./components/navigation/Header.js";
import MenuOverlay from "./components/navigation/MenuOverlay.js";
import Orchestra from "./components/orchestra/Orchestra.js";
import PublicContributions from "./components/contributions/PublicContributions.js";
// import Success from "./components/forms/Success.js";

import data from "./data/navItems.json";
import dataOrchestraBio from "./data/orchestraBio.json";
import dataConductorBio from "./data/conductorBio.json";

function App() {
  const introTitles = {
    "/concertours": "Autumn Tour",
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

  // Logic behind the navigation
  const [navbarOpen, setNavbarOpen] = useState(false);
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
  };

  //string manipulation for \n in json file
  const renderBody = (body) => {
    return body.split(/\n+/).map((line, index) => <p key={index}>{line}</p>);
  };

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
                    {path === "/artisticdirector" && (
                      <ArtisticDirector
                        renderBody={renderBody}
                        bio={dataConductorBio}
                      />
                    )}
                    {path === "/organizer" && <Organizer />}
                    {path === "/faculty" && <Faculty />}
                    {path === "/otherevents" && <OtherEvents />}
                    {path === "/contact" && <Contact />}
                    {path === "/partners" && <Partners />}
                    {path === "/news/:id" && (
                      <NewsDetails
                        formatDate={formatDate}
                        renderBody={renderBody}
                      />
                    )}
                    {path === "/concertours" && <ConcertTours />}
                    {path === "/donations" && <Donations />}
                    {path === "/auditions" && (
                      <Auditions formatDate={formatDate} />
                    )}
                    {path === "/orchestra" && (
                      <Orchestra
                        renderBody={renderBody}
                        bio={dataOrchestraBio}
                      />
                    )}
                    {path === "/publicontributions" && (
                      <PublicContributions renderBody={renderBody} />
                    )}
                  </>
                }
              />
            ))}
            <Route path="*" element={<NotFound />}></Route>
            {/* <Route path="/success" element={<Success />}></Route> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
