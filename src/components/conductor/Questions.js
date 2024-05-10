const Questions = ({ bio, min, max }) => {
  return (
    <p>
      {bio.questions.map((paragraph) => {
        if (parseInt(paragraph.id) < max && parseInt(paragraph.id) > min) {
          return (
            <em key={paragraph.id}>
              <span className="beCareful">{paragraph.question}</span>{" "}
              {paragraph.answer}
              <br />
            </em>
          );
        }
      })}
    </p>
  );
};

export default Questions;
