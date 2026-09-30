import { Link } from "react-router-dom";
import logo from "../../LogoSmall.png";

const Header = ({ navbarOpen, setNavbarOpen, setElements, data }) => {
  return (
    <header className="w-full absolute top-0 left-0 p-4 sm:p-6 lg:p-10 flex items-center justify-between z-30">
      <div className="text-white z-30">
        <Link
          to="/"
          aria-label="European Spirit of Youth Orchestra Home"
          onClick={() => {
            setNavbarOpen(false);
            setTimeout(() => {
              setElements(data);
            }, 300);
          }}
          className="inline-block transition-transform duration-300 hover:scale-105"
        >
          <img
            src={logo}
            alt="European Spirit of Youth Orchestra Logo"
            className="h-16 sm:h-20 md:h-24 w-auto object-contain"
          />
        </Link>
      </div>

      <button
        type="button"
        aria-label={navbarOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={navbarOpen}
        className="flex items-center justify-center z-30 relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f68642] cursor-pointer transition-transform duration-200 active:scale-90"
        onClick={() => {
          setNavbarOpen(!navbarOpen);
          setTimeout(() => {
            setElements(data);
          }, 300);
        }}
      >
        <div className="relative w-8 h-6 flex flex-col justify-between">
          <span
            className={`block h-1 w-8 bg-[#f68642] rounded-full transform transition duration-300 ease-in-out ${
              navbarOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></span>
          <span
            className={`block h-1 bg-[#f68642] rounded-full transform transition-all duration-200 ease-in-out ${
              navbarOpen ? "w-0 opacity-0" : "w-8 opacity-100"
            }`}
          ></span>
          <span
            className={`block h-1 w-8 bg-[#f68642] rounded-full transform transition duration-300 ease-in-out ${
              navbarOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></span>
        </div>
      </button>
    </header>
  );
};

export default Header;
