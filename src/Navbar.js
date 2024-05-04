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

  const menuClass = menuOpen ? "menu open" : "menu";

  return (
    <nav>
      <div
        className="menu-header logo overLap"
        style={{ display: "inline-block", padding: 0, margin: 0, zIndex: 2 }}
      >
        <Link
          to="/"
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
      <div id="myMenu" className={menuClass}>
        <button
          className="close-btn"
          onClick={() => closeMenu}
          style={{ fontSize: "50px" }}
        >
          &times;
        </button>
        <div className="menu-content">
          <Link onClick={() => openSubMenu("about")}>
            About Us
            <small>
              <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            </small>
          </Link>
          <Link onClick={() => openSubMenu("season")}>
            News & Activities
            <small>
              <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            </small>
          </Link>
          <Link to="/donations">Donations</Link>
          <Link to="/contact">Contact</Link>
          <div className="social-icons">
            <Link
              to="https://www.instagram.com/esyo_eu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              to="https://www.youtube.com/@esyo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link to="mailto:segreteria@esyo.eu">
              <i className="fa fa-envelope"></i>
            </Link>
          </div>
        </div>

        <div
          className={`submenu ${currentSubMenu === "about" ? "open" : ""}`}
          id="about"
        >
          <button className="back-btn" onClick={() => closeSubMenu}>
            <small>
              <i className="fa fa-angle-double-left" aria-hidden="true"></i>
            </small>
          </button>
          <div className="submenu-content">
            <Link to="/orchestra">Orchestra</Link>
            <Link to="/artisticDirector">Artistic Director</Link>
            <Link to="/faculty">Faculty</Link>
            <Link to="/organizer">Organizer</Link>
            <Link to="/partners">Partners</Link>
          </div>
        </div>

        <div
          className={`submenu ${currentSubMenu === "season" ? "open" : ""}`}
          id="season"
        >
          <button className="back-btn" onClick={() => closeSubMenu}>
            <small>
              <i className="fa fa-angle-double-left" aria-hidden="true"></i>
            </small>
          </button>
          <div className="submenu-content">
            <Link to="/auditions">Auditions</Link>
            <Link to="/concertours">Concert Tours</Link>
            <Link to="/otherevents">Other events</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
