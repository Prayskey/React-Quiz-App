import { Fragment, useState } from "react";
import Question from "./Question";
import Answers from "./Answers";
import { questions } from "../questions.js";

export default function Quiz() {
  const [questionNumber, setQuestionNumber] = useState(0);
  function handleAnswerClick(index) {
    setQuestionNumber((questionNumber) => questionNumber + 1);
  }
  return (
    questionNumber < questions.length && (
      <section key={questions[questionNumber].id} id="quiz">
        <Question
          question={questions[questionNumber].text}
          id={questions[questionNumber].id}
          noOfQuestions={questions.length}
        />
        <Answers
          onAnswerClick={handleAnswerClick}
          answers={questions[questionNumber].answers}
        />
      </section>
    )
  );
}
