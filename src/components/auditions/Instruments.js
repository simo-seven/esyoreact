const Instruments = ({ instruments }) => {
  return (
    <>
      <p className="text-justify mt-3">
        The 2025 auditions for the ESYO Symphony Orchestra will be held for the
        following positions:
      </p>
      <ul className="list-disc list-inside ml-5 mt-2">
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
