import { Fragment, useState } from "react";
import Question from "./Question";
import Answers from "./Answers";
import { questions } from "../questions.js";

export default function Quiz() {
  const [questionNumber, setQuestionNumber] = useState(0);
  return (
    <section id="quiz">
      
      {questions.map((question) => {
        return (
          <Fragment key={question.id}>
            <Question question={question.text} id={question.id} />
            <Answers answers={question.answers} />
          </Fragment>
        );
      })}
    </section>
  );
}
