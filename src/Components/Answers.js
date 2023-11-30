const Answers = ({ question, onSelectAnswer }) => {
  return (
    <ul className="answers-container d-flex">
      {question.answers.map((answer, index) => {
        return (
          <li
            key={index}
            className="rad-50 fs-18 mb-15 main-padding "
            onClick={() => onSelectAnswer(answer)}
          >
            {answer}
          </li>
        );
      })}
    </ul>
  );
};
export default Answers;
