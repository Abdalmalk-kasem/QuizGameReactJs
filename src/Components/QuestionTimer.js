import React, { useState, useEffect } from "react";

const QuestionTimer = ({ onTimeOut, initialTimer }) => {
  const [timer, setTimer] = useState(initialTimer);
  const [timeObj, setTimeObj] = useState({ minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        setTimer(initialTimer);
        onTimeOut();
        clearInterval(interval);
      }
    }, 1000);

    setTimeObj({
      minutes: parseInt(timer / 60),
      seconds: parseInt(timer % 60),
    });

    return () => {
      clearInterval(interval);
    };
  }, [timer, onTimeOut, initialTimer]);

  return (
    <div className="timer">{`${
      timeObj.minutes >= 10 ? timeObj.minutes : `0${timeObj.minutes}`
    }:${timeObj.seconds >= 10 ? timeObj.seconds : `0${timeObj.seconds}`}`}</div>
  );
};

export default QuestionTimer;
