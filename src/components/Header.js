import { Link } from "react-router-dom";
import logo from "../LogoSmall.png";

const Header = ({ navbarOpen, setNavbarOpen, setElements, data }) => {
  return (
    <header className="w-full absolute top-0 left-0 p-10 flex z-20">
      <div className="text-white flex-grow z-20">
        <Link
          to="/"
          onClick={() => {
            setNavbarOpen(false);
            setTimeout(() => {
              setElements(data);
            }, 300);
          }}
        >
          <img src={logo} alt="Logo" className="lg:w-1/12 hideOnMobile" />
          <img src={logo} alt="Logo" className="onlyMobile" style={{ width: '30%'}} />
        </Link>
      </div>

      <button
        className="flex top-0 right-6 z-20 relative w-20 h-20 focus:outline-none"
        onClick={() => {
          setNavbarOpen(!navbarOpen);
          setTimeout(() => {
            setElements(data);
          }, 300);
        }}
      >
        <div className="absolute w-10 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bottom-1/2">
          <span
            className={`absolute h-1 w-10 bg-orange-500 transform transition duration-300 ease-in-out ${
              navbarOpen ? "rotate-45 delay-200" : "-translate-y-2"
            }`}
            style={{ marginTop: "5px" }}
          ></span>
          <span
            className={`absolute h-1 bg-orange-500 transform transition-all duration-200 ease-in-out ${
              navbarOpen ? "w-0 opacity-50 " : "w-10 delay-200 opacity-100"
            }`}
            style={{ marginTop: "5px" }}
          ></span>
          <span
            className={`absolute h-1 w-10 bg-orange-500 transform transition duration-300 ease-in-out ${
              navbarOpen ? "-rotate-45 delay-200" : "translate-y-2"
            }`}
            style={{ marginTop: "5px" }}
          ></span>
        </div>
      </button>
    </header>
  );
};
export default Header;
