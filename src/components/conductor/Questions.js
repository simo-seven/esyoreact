const Questions = ({ bio, min, max }) => {
  return (
    <p>
      {bio.questions.map((paragraph) => {
        const paragraphId = parseInt(paragraph.id);
        if (paragraphId < max && paragraphId > min) {
          return (
            <em key={paragraph.id}>
              <span className="beCareful">{paragraph.question}</span>{" "}
              {paragraph.answer}
              <br />
            </em>
          );
        }
        return null;
      })}
    </p>
  );
};

export default Questions;
