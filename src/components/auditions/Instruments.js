const Instruments = ({ instruments }) => {
  return (
    <ul className="list-disc list-inside ml-5">
      {instruments.map((instrument) => (
        <li key={instrument.id}>
          {instrument.quantity} {instrument.type}
        </li>
      ))}
    </ul>
  );
};

export default Instruments;
