import quizCompleteImg from "../assets/quiz-complete.png";

export default function Summary({ userAnswers, questions }) {
  // Calculate statistics based on userAnswers and original questions data
  const skippedAnswers = userAnswers.filter((answer) => answer === null).length;
  const correctAnswers = userAnswers.filter((answer, index) => {
    const question = questions[index];
    // Assuming the first answer in the original questions array is the correct one
    return answer === question.answers[0];
  }).length;
  const wrongAnswers = userAnswers.length - skippedAnswers - correctAnswers;

  const skippedPercentage = Math.round(
    (skippedAnswers / questions.length) * 100,
  );
  const correctPercentage = Math.round(
    (correctAnswers / questions.length) * 100,
  );
  const wrongPercentage = Math.round((wrongAnswers / questions.length) * 100);

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy" />
      <h2>Quiz Completed</h2>

      <div id="summary-stats">
        <p>
          <span className="number">{skippedPercentage}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctPercentage}%</span>
          <span className="text">Correct</span>
        </p>
        <p>
          <span className="number">{wrongPercentage}%</span>
          <span className="text">Incorrect</span>
        </p>
      </div>

      <ol>
        {userAnswers.map((answer, index) => {
          const question = questions[index];
          const isCorrect = answer === question.answers[0]; // Check against the original correct answer
          let cssClass = "";

          if (answer === null) {
            cssClass = "skipped";
          } else if (isCorrect) {
            cssClass = "correct";
          } else {
            cssClass = "wrong";
          }

          return (
            <li key={question.id}>
              <h3>{index + 1}</h3>
              <p className="question">{question.text}</p>
              <p className={`user-answer ${cssClass}`}>
                {answer || "Skipped"}{" "}
                {/* Display 'Skipped' if answer is null */}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
