import { Link } from "react-router-dom";

const Instruments = ({ instruments }) => {
  return (
    <>
      <p>
        <span className="beCareful">Welcome</span> to the Auditions page!
      </p>
      <p className="text-justify">
        The Orchestra’s Summer Tour 2025 is planned to take place approximately
        from <span className="beCareful">July 13 to August 3, 2025</span>. Stay
        tuned for more details as the date draws closer. You can explore the
        repertoire on the{" "}
        <Link to="/concertours" className="beCareful">
          Concert Tour
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
