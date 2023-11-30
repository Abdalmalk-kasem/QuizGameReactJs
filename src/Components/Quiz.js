import { useCallback, useEffect, useState } from "react";
import Options from "./Options";
import Question from "./Question";
import Summary from "./Summary";
import QuestionTimer from "./QuestionTimer";

let timer = 60;

const shuffledQuestions = (array) => {
  let current = array.length,
    temp,
    random;

  while (current > 0) {
    random = Math.floor(Math.random() * current);
    current--;

    temp = array[current];
    array[current] = array[random];
    array[random] = temp;
  }

  return array;
};

const Quiz = () => {
  const [selectedoption, setSelectedOption] = useState("");
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [fetchStatus, setFetchStatus] = useState("loading");
  const [initialTimer, setInitialTimer] = useState(timer);

  const activeQuestionIndex = userAnswers.length;
  const quizIsCompleted = activeQuestionIndex === questions.length;

  useEffect(() => {
    fetch(`/${selectedoption}Q.json`)
      .then((response) => response.json())
      .then((data) => {
        const randomQuestions = shuffledQuestions(data);
        setQuestions(randomQuestions.slice(0, 20));
        setFetchStatus("success");
      })
      .catch((error) => console.log("Faild to get the data: ", error));
    setFetchStatus("error");
  }, [selectedoption]);

  const onSelectOptionHandler = (btn) => {
    setSelectedOption(btn.target.value);
  };

  const answerSelectorHandler = useCallback((answer) => {
    setUserAnswers((pervAnswers) => [...pervAnswers, answer]);
  }, []);

  const skipAnswerHandler = useCallback(() => {
    answerSelectorHandler(null);
  }, [answerSelectorHandler]);

  const resetTimer = () => {
    setInitialTimer(timer);
  };

  if (selectedoption === "") {
    return (
      <>
        {" "}
        <Options
          onClickHandler={onSelectOptionHandler}
          option={selectedoption}
        />
      </>
    );
  }

  if (quizIsCompleted && questions.length > 0) {
    return <Summary userAnswers={userAnswers} questions={questions} />;
  }

  return (
    <div className="quiz-container container rad-10">
      {fetchStatus === "error" && (
        <div className="fs-24">Error fetching the data.</div>
      )}
      {fetchStatus === "success" && (
        <>
          <Question
            questions={questions}
            questionIndex={activeQuestionIndex}
            onSelectAnswer={answerSelectorHandler}
            resetTimer={resetTimer}
          />
          <footer className="mt-10 main-padding flex-align-c-space-b">
            <QuestionTimer
              key={activeQuestionIndex}
              onTimeOut={skipAnswerHandler}
              initialTimer={initialTimer}
            />
            <div className="btns">
              <button
                className="main-padding"
                onClick={() => setSelectedOption("")}
              >
                Exit
              </button>
              <button
                className="main-padding ml-10"
                onClick={() => skipAnswerHandler()}
              >
                Skip
              </button>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default Quiz;
