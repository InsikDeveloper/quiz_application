import React, { useState } from "react";
import { questions } from "../Questions/Questions";
import Score from "./Score";

const Questions = () => {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [isClickA, setIsClickA] = useState(false);
  const [isClickB, setIsClickB] = useState(false);
  const [isClickC, setIsClickC] = useState(false);
  const [isClickD, setIsClickD] = useState(false);
  const [answer, setAnswer] = useState("");

  const styles = {
    backgroundColor: "rgba(147,51,234,1)",
    border: "1px solid rgba(147,51,234,1)",
    color: "rgba(266,232,240,1)",
  };

  return (
    <div>
      {count > 4 ? (
        <Score score={score} />
      ) : (
        <div>
          <h2 className="text-xl">{questions[count].question}</h2>
          <div className="Answers flex flex-col space-y-4 text-xl mt-5 mb-5">
            <div
              onClick={() => {
                setIsClickA(true);
                setAnswer("a");
                setIsClickB(false);
                setIsClickC(false);
                setIsClickD(false);
              }}
              style={isClickA ? styles : null}
              className="answerA choices"
            >
              <p>{questions[count].answerA}</p>
            </div>
            <div
              onClick={() => {
                setIsClickB(true);
                setAnswer("b");
                setIsClickA(false);
                setIsClickC(false);
                setIsClickD(false);
              }}
              style={isClickB ? styles : null}
              className="answerB choices"
            >
              <p>{questions[count].answerB}</p>
            </div>
            <div
              onClick={() => {
                setIsClickC(true);
                setAnswer("c");
                setIsClickA(false);
                setIsClickB(false);
                setIsClickD(false);
              }}
              style={isClickC ? styles : null}
              className="answerC choices"
            >
              <p>{questions[count].answerC}</p>
            </div>
            <div
              onClick={() => {
                setIsClickD(true);
                setAnswer("d");
                setIsClickA(false);
                setIsClickB(false);
                setIsClickC(false);
              }}
              style={isClickD ? styles : null}
              className="answerD choices"
            >
              <p>{questions[count].answerD}</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center space-y-2">
            <div className="">
              <button
                onClick={(e) => {
                  if (!isClickA && !isClickB && !isClickC && !isClickD) {
                    window.alert("Must select an answer!!!");
                    return;
                  }
                  setCount((c) => c + 1);

                  setIsClickA(false);
                  setIsClickB(false);
                  setIsClickC(false);
                  setIsClickD(false);

                  if (answer === questions[count].correctAnswer.charAt(0))
                    setScore((s) => s + 10);
                }}
                className="py-2 px-6 bg-purple-600 text-slate-200 text-lg font-bold rounded-lg cursor-pointer"
              >
                Next
              </button>
            </div>

            <p>
              {count + 1}/{questions.length} questions
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Questions;
