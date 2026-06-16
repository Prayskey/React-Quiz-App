export default function Question({ question, id }) {
  return (
    <div id="question">
      {/* 'value' represents remaining time, 'max' is total time allowed */}
      {/* The 'answered' class is added here once a user makes a selection */}
      <progress value={5000} max={10000} className="" />

      <h2>{question}</h2>
      <p id="question-overview">Question {id} of 10</p>
    </div>
  );
}
