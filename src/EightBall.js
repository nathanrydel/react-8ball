import React, { useState } from 'react';
import "./EightBall.css";
import { default as getRandomChoice } from './random';
import defaultAnswers from './defaultAnswers';


/**
 * EightBall: renders a random answer and onClick changes answer
 *
 * Props:
 * - answers: array of objects: { msg, color }
 *
 * State:
 * - answer: { msg, color } the current answer
 *
 * App -> EightBall
 */

function EightBall({ answers = defaultAnswers }) {
  const [answer, setAnswer] = useState(
    {
      msg: "Think of a Question", color: "black"
    }
  );

  function handleClick(evt) {
    setAnswer(getRandomChoice(answers));
  }

  return (
    <div
      className="EightBall"
      onClick={handleClick}
      style={{ backgroundColor: answer.color }}
    >
      <p>{answer.msg}</p>
    </div>
  );
}

export default EightBall;