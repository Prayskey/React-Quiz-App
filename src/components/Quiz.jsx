import { useState, useCallback } from "react"; // Added useCallback
import Question from "./Question";
import { questions } from "../questions.js";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]); // State to store user's answers

  // Derived state for active question index
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === questions.length;

  // Use useCallback to memoize the handleSelectAnswer function
  // This prevents unnecessary re-creations of the function on every re-render
  // which can be important for performance and avoiding re-running effects in child components
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer,
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }, []); // No dependencies, as it only updates its own state

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );

  // If the quiz is complete, render the Summary component
  if (quizIsComplete) {
    // Pass userAnswers and the original questions data to Summary for calculations
    return <Summary userAnswers={userAnswers} questions={questions} />;
  }

  return (
    <section id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </section>
  );
}
