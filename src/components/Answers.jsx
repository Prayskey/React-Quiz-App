export default function Answers({ answers, onAnswerClick }) {
  // function handleAnswerClick(index) {
  //   if (index === 0) {
  //     alert("Correct!")
  //   } else {
  //     alert("Incorrect!")
  //   }
  // }

  return (
    <ul id="answers">
      {/* 
          Classes for buttons: 
          - '' (default)
          - 'selected' (clicked but checking)
          - 'correct' (feedback reveal)
          - 'wrong' (feedback reveal)
      */}

      {answers.map((answer, index) => {
        return (
          <li className="answer" key={index}>
            <button onClick={() => onAnswerClick(index)} className="">
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
