import { Link } from "react-router-dom";

const Instruments = ({ instruments }) => {
  return (
    <>
      <p>
        <span className="beCareful">Welcome</span> to the Auditions page!
      </p>
      <p className="text-justify">
        The Orchestra’s Summer Tour 2025 is planned to take place
        <span className="beCareful">
          approximately from July 20 to August 10, 2025
        </span>
        . Stay tuned for more details as the date draws closer. You can explore
        the repertoire on the{" "}
        <Link to="/concertours" className="beCareful">
          Concert Tours
        </Link>{" "}
        page. <br />
        The 2025 auditions for the ESYO Symphony Orchestra will be held for the
        following positions:
      </p>
      <ul className="list-disc list-inside ml-5 mt-5">
        {instruments.map(({ id, quantity, type }) => (
          <li key={id}>
            up to {quantity} {type}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Instruments;
