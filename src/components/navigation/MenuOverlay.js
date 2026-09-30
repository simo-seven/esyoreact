import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const MenuOverlay = ({
  navbarOpen,
  setNavbarOpen,
  elements,
  changeElements,
  setElements,
  data,
}) => {
  const isSubmenu = elements !== data;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [navbarOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && navbarOpen) {
        setNavbarOpen(false);
        setTimeout(() => {
          setElements(data);
        }, 300);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navbarOpen, data, setNavbarOpen, setElements]);

  const handleClose = () => {
    setNavbarOpen(false);
    setTimeout(() => {
      setElements(data);
    }, 300);
  };

  return (
    <nav
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation"
      className={`fixed flex flex-col justify-center items-center top-0 left-0 w-full px-6 py-12 z-20 h-screen bg-black/95 backdrop-blur-md text-white transition-all duration-300 overflow-y-auto ${
        navbarOpen
          ? "opacity-100 pointer-events-auto translate-x-0"
          : "opacity-0 pointer-events-none -translate-x-full"
      }`}
    >
      <div className="w-full max-w-lg mx-auto flex flex-col items-center">
        {/* Back button when navigating a submenu */}
        {isSubmenu && (
          <button
            type="button"
            onClick={() => setElements(data)}
            className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-white/80 hover:text-white bg-white/10 hover:bg-[#f68642]/20 border border-white/20 transition-all duration-200 text-lg active:scale-95"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Back to Main Menu</span>
          </button>
        )}

        <ul className="flex flex-col items-center text-center space-y-4 sm:space-y-6 w-full">
          {elements.map((element, index) => (
            <li
              className="nav-li w-full transform transition duration-300"
              key={element.id}
              style={{
                animationDelay: `${index * 60}ms`,
              }}
            >
              <Link
                to={element.to}
                className="nav-link inline-block py-2 px-4 group transition duration-200"
                onClick={() => {
                  if (element.hasSubmenu) {
                    changeElements(element.id);
                  } else {
                    handleClose();
                  }
                }}
              >
                <span className="text-[#f68642] group-hover:text-white font-bold text-2xl sm:text-3xl md:text-4xl transition-colors duration-200 flex items-center justify-center gap-3">
                  {element.name}
                  {element.hasSubmenu && (
                    <FontAwesomeIcon
                      icon={faAngleDoubleRight}
                      className="text-lg sm:text-xl transform group-hover:translate-x-1 transition-transform duration-200"
                    />
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Quick Social & Contact links inside overlay */}
        <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-6 text-white/70 text-sm">
          <a
            href="https://www.instagram.com/esyo_eu/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="ESYO Instagram"
            className="hover:text-[#f68642] transition-colors"
          >
            Instagram
          </a>
          <span>•</span>
          <a
            href="https://www.youtube.com/@esyo"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="ESYO YouTube"
            className="hover:text-[#f68642] transition-colors"
          >
            YouTube
          </a>
          <span>•</span>
          <a
            href="mailto:segreteria@esyo.eu"
            aria-label="ESYO Email"
            className="hover:text-[#f68642] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MenuOverlay;
