# React Quiz App - Technical Roadmap

Welcome to the Quiz App project! This document provides the architectural blueprint for building the application, mapped to the predefined styles in `src/index.css`.

## 1. Project Structure

Aim for a component-based architecture. Create a `components/` folder to house the following pieces:

- `Header.jsx`
- `Quiz.jsx` (The main engine)
- `Question.jsx` (Individual question logic)
- `Answers.jsx` (Multiple choice logic)
- `Summary.jsx` (The final results screen)

## 2. Component Breakdown & Styling Guide

### Header Component

- **HTML Elements:** `<header>`, `<img>`, `<h1>`.
- **Styling:** The `<h1>` uses a linear gradient text effect. Ensure the image has the `drop-shadow` filter applied as defined.

### Quiz Component (Main Container)

- **Wrapper:** Use `<div id="quiz">`.
- **State Management:**
  - Keep track of the `activeQuestionIndex`.
  - Store `userAnswers` in an array.
- **Logic:** When the quiz ends (index equals questions length), switch the view to the `Summary` component.

### Question Component

- **Wrapper:** Use `<div id="question">`.
- **Progress Bar:** Use the `<progress>` element.
  - **Dynamic Class:** Use `.answered` on the progress bar when the user makes a selection to change its color to the "accent" yellow.
- **Elements:** An `<h2>` for the question text and a `<p id="question-overview">` for the question counter (e.g., "Question 1 of 10").

### Answers Component

- **Structure:** A `<ul>` with the id `#answers`.
- **Item:** Each answer should be wrapped in a `<li class="answer">`.
- **Button States:** Apply these classes dynamically based on the application state:
  - `.selected`: When the user clicks an answer.
  - `.correct`: After the timer finishes or "Check" is clicked, if the answer is right.
  - `.wrong`: If the answer is incorrect.
- **Shuffling:** Remember to shuffle your answers in code before rendering so they aren't always in the same order!

### Summary Component

- **Wrapper:** Use `<div id="summary">`.
- **Animation:** The CSS includes a `slide-in-from-bottom` animation. This will trigger automatically if the wrapper has the `#summary` ID.
- **Statistics:** Use `<div id="summary-stats">`. You should calculate and display three percentages:
  1. **Skipped:** (Number of null entries / Total)
  2. **Correct:** (Correct matches / Total)
  3. **Wrong:** (Incorrect matches / Total)
- **Review List:** Render an `<ol>` containing the question text, the user's answer, and whether it was `correct`, `wrong`, or `skipped` (using the utility classes on the `.user-answer` paragraph).

## 3. Implementation Steps

1.  **Static UI:** Build the `Header` and a hard-coded `Quiz` container to see the layout.
2.  **State Setup:** Implement the logic to move from one question to the next.
3.  **Timer Logic:** Create a `QuestionTimer` component or hook. Use `setTimeout` to automatically "skip" a question (add `null` to answers) if the user takes too long.
4.  **Feedback Loop:** Implement the "Answer Selection" state. When a user clicks, wait ~1 second (showing the "selected" style), then reveal if it was correct/wrong, then move to the next question.
5.  **Summary Calculation:** Create the logic that parses the `userAnswers` array against your `questions.js` data to generate the final percentages.

## 4. CSS Tips

- The body background is a complex SVG data-URI. It is already set to `background-attachment: fixed`, so you don't need to worry about background tiling issues during scrolling.
- Use `Roboto Condensed` for UI elements (buttons, stats, headers) and `Roboto` for body text and questions.

---

_Happy Coding! You have all the styles you need in `index.css`. Refer to the IDs and Classes there to ensure the theme applies correctly._


## 5. Detailed Phase Guide



### Phase 1: Data Structuring & Rendering

- **Goal:** Move from hardcoded text to dynamic data.
- **Action:** Create a `questions.js` file containing an array of objects. Each object should have an `id`, `text`, and an `answers` array (where the first answer is always the correct one).
- **React Concept:** Props & Mapping. Pass the current question text and answers from `Quiz.jsx` down to `Question.jsx` and `Answers.jsx`. Use `.map()` to render the buttons.

### Phase 2: Active Question State

- **Goal:** Allow the user to "progress" through the quiz.
- **Action:** In `Quiz.jsx`, create a state `userAnswers` (an array).
- **Logic:** The `activeQuestionIndex` should be a _derived state_ based on the length of `userAnswers`.
- **Logic:** Create a function `handleSelectAnswer` that appends the chosen answer to the `userAnswers` state.

### Phase 3: Shuffling & Identity

- **Goal:** Ensure answers aren't always in the same order (since the first one is the correct one in your data).
- **Action:** Inside `Answers.jsx`, shuffle the answers array.
- **React Concept:** `useMemo` or `useRef`. If you shuffle during a raw render, the answers will jump every time the component re-renders (e.g., when a timer ticks). You must ensure the shuffle only happens once per question.

### Phase 4: The Question Timer (Side Effects)

- **Goal:** Automatically skip questions if the user is too slow.
- **Action:** Create a `QuestionTimer.jsx` component. It should take a `timeout` prop and an `onTimeout` function.
- **React Concept:** `useEffect`.
  - Use `setTimeout` to call `onTimeout` (which should call `handleSelectAnswer(null)`) after the duration.
  - Use `setInterval` to update a `remainingTime` state every 10ms to drive the smooth animation of the `<progress>` bar.
  - **Crucial:** Always return a cleanup function to `clearTimeout` and `clearInterval`.

### Phase 5: The Feedback Loop (State Transitions)

- **Goal:** Provide visual feedback (Selected -> Correct/Wrong) before moving to the next question.
- **Action:** This is the most complex part. You need a state to track the "Answer State" (e.g., `'unanswered'`, `'answered'`, `'correct'`, or `'wrong'`).
- **Flow:**
  1. User clicks: Set state to `'answered'`.
  2. Wait 1s: Determine if it's correct/wrong and update state.
  3. Wait 2s: Move to next question (reset state to `'unanswered'`).
- **Tip:** Use `setTimeout` within your selection handler to manage these timed transitions.

### Phase 6: Summary & Logic

- **Goal:** Calculate results and display the final screen.
- **Logic:** In `App.jsx` (or `Quiz.jsx`), check if `activeQuestionIndex === questions.length`. If true, render `<Summary />`.
- **Action:** Pass the `userAnswers` array to the `Summary` component.
- **Calculations:**
  - Use `.filter()` and `.length` on `userAnswers` to calculate the percentage of skipped, correct, and incorrect answers.
  - Map through `userAnswers` to render the list of questions and comparisons.

## 6. Key React Hooks to Master in this Project

| Hook          | Purpose in this App                                                                     |
| :------------ | :-------------------------------------------------------------------------------------- |
| `useState`    | Managing the list of answers and current UI feedback state.                             |
| `useEffect`   | Handling the timers and intervals for the progress bar.                                 |
| `useCallback` | Wrapping the answer selection handler so it doesn't trigger unnecessary effect re-runs. |
| `useMemo`     | Ensuring answers are only shuffled once when the question index changes.                |
| `useRef`      | (Optional) Storing values that shouldn't trigger re-renders.                            |

## 7. Complete Application Logic Flow

This is the "brain" of your app. Follow this sequence to understand how the components communicate:

1.  **Mounting Phase:**
    *   `App.jsx` renders. It initializes the `userAnswers` state (empty array).
    *   `activeQuestionIndex` is derived: `userAnswers.length`.

2.  **The Question Loop:**
    *   `Quiz.jsx` checks if `activeQuestionIndex` is within bounds of the data.
    *   If yes, it renders `Question.jsx`, passing the current question object.
    *   `Answers.jsx` receives the options, **shuffles them once**, and renders buttons.
    *   `QuestionTimer.jsx` starts its countdown and interval (for the progress bar).

3.  **The Interaction Sequence (The "Check" Delay):**
    *   User clicks a button.
    *   **Step A:** Update local "Answer State" to `'answered'`. The button turns yellow.
    *   **Step B (SetTimeout ~1s):** Logic checks if the answer matches `questions[index].answers[0]`. Update state to `'correct'` or `'wrong'`.
    *   **Step C (SetTimeout ~2s):** Call `handleSelectAnswer`. This pushes the answer to the `userAnswers` array in `Quiz.jsx`.

4.  **The Automatic Skip (Timeout):**
    *   If the `QuestionTimer` expires before a click, it triggers `onTimeout`.
    *   `handleSelectAnswer(null)` is called immediately, pushing `null` to the state.

5.  **State Reaction:**
    *   Updating `userAnswers` triggers a re-render of `Quiz.jsx`.
    *   `userAnswers.length` increases, so `activeQuestionIndex` moves to the next question.
    *   The loop repeats until `index === questions.length`.

6.  **The Summary Phase:**
    *   `Quiz.jsx` sees the index is out of bounds and renders `Summary.jsx`.
    *   `Summary` iterates through `userAnswers` once to calculate the percentage of skipped (null), correct, and wrong answers.
