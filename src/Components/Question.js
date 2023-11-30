import { useEffect } from "react";
import Answers from "./Answers";
const Question = ({ questions, questionIndex, onSelectAnswer, resetTimer }) => {
  useEffect(() => {
    resetTimer();
  }, [questionIndex, resetTimer]);

  return (
    <div className="question-container flex-cc rad-10 gap-20">
      {
        <h2 key={questions[questionIndex].id}>
          {questions[questionIndex].text}
        </h2>
      }
      <Answers
        question={questions[questionIndex]}
        onSelectAnswer={onSelectAnswer}
      />
    </div>
  );
};

export default Question;
