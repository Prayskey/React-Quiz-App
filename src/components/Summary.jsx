import quizCompleteImg from "../assets/quiz-complete.png";

export default function Summary() {
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy" />
      <h2>Quiz Completed</h2>

      <div id="summary-stats">
        <p>
          <span className="number">10%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">60%</span>
          <span className="text">Correct</span>
        </p>
        <p>
          <span className="number">30%</span>
          <span className="text">Incorrect</span>
        </p>
      </div>

      <ol>
        {/* Example of a result item */}
        <li>
          <h3>1</h3>
          <p className="question">What is the primary purpose of React?</p>
          {/* 
              The class on 'user-answer' should be:
              - 'correct'
              - 'wrong'
              - 'skipped'
          */}
          <p className="user-answer correct">Building User Interfaces</p>
        </li>
      </ol>
    </div>
  );
}
