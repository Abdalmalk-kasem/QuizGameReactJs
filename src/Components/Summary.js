const Summary = ({ userAnswers, questions }) => {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === questions[index].right_answer
  );
  const wrongAnswers =
    questions.length - skippedAnswers.length - correctAnswers.length;

  return (
    <div id="summary" className="shadow-normal">
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number c-777">{skippedAnswers.length}</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswers.length}</span>
          <span className="text">Answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswers}</span>
          <span className="text">Answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === questions[index].right_answer) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{questions[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
