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

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/donations" element={<Donations />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/otherevents" element={<OtherEvents />}></Route>
            <Route path="/faculty" element={<Faculty />}></Route>
            <Route path="/organizer" element={<Organizer />}></Route>
            <Route path="/artisticdirector" element={<ArtisticDirector />}></Route>
            <Route path="/pressmedia" element={<PressMedia />}></Route>
            <Route path="/legaldetails" element={<LegalDetails />}></Route>
            <Route path="/cookiepolicy" element={<CookiePolicy />}></Route>
            <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
