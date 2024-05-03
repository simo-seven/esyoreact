import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSubMenu, setCurrentSubMenu] = useState(null);

  const openMenu = () => {
    setMenuOpen(true);
    console.log("openMenu fired");
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setCurrentSubMenu(null);
    console.log("closeMenu fired");
  };

  const openSubMenu = (submenuId) => {
    setCurrentSubMenu(submenuId);
    console.log("openSubMenu fired");
  };

  const closeSubMenu = () => {
    setCurrentSubMenu(null);
    console.log("closeSubMenu fired");
  };

  return (
    <nav>
      <div
        className="menu-header logo overLap"
        style={{ display: "inline-block", padding: 0, margin: 0 }}
      >
        <Link
          to="/index.html"
          style={{ display: "block", width: "auto", height: "auto" }}
        >
          <img
            src="/img/logos/LogoSmall.png"
            alt="Logo"
            width="15%"
            className="hideOnMobile"
          />
          <img
            src="/img/logos/LogoSmall.png"
            alt="Logo"
            width="23%"
            className="onlyMobile"
          />
        </Link>
      </div>
      <button className="open-menu-btn overLap" onClick={openMenu}>
        ☰
      </button>
      <div id="myMenu" className={`menu ${menuOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={closeMenu}
          style={{ fontSize: "50px" }}
        >
          &times;
        </button>
        <div className="menu-content">
          <Link to="#" onClick={() => openSubMenu("about")}>
            About Us
            <small>
              <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            </small>
          </Link>
          <Link to="#" onClick={() => openSubMenu("season")}>
            News & Activities
            <small>
              <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            </small>
          </Link>
          <Link to="/donations.html">Donations</Link>
          <Link to="/contact.html">Contact</Link>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/esyo_eu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/@esyo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a href="mailto:segreteria@esyo.eu">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>

        <div
          className={`submenu ${currentSubMenu === "about" ? "open" : ""}`}
          id="about"
        >
          <button className="back-btn" onClick={closeSubMenu}>
            <small>
              <i className="fa fa-angle-double-left" aria-hidden="true"></i>
            </small>
          </button>
          <div className="submenu-content">
            <Link to="/about/orchestra.html">Orchestra</Link>
            <Link to="/about/artisticDirector.html">Artistic Director</Link>
            <Link to="/about/faculty.html">Faculty</Link>
            <Link to="/pages/sgme.html">Organizer</Link>
            <Link to="/about/partners.html">Partners</Link>
          </div>
        </div>

        <div
          className={`submenu ${currentSubMenu === "season" ? "open" : ""}`}
          id="season"
        >
          <button className="back-btn" onClick={closeSubMenu}>
            <small>
              <i className="fa fa-angle-double-left" aria-hidden="true"></i>
            </small>
          </button>
          <div className="submenu-content">
            <Link to="/activities/auditions.html">Auditions</Link>
            <Link to="/activities/concertours.html">Concert Tours</Link>
            <Link to="/activities/otherevents.html">Other events</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
