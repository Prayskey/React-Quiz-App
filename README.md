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

## 5. Implemented Features & Logic Summary

### Key Implementation: The "Component Key" Pattern

In `Quiz.jsx`, the `Question` component is rendered with `key={activeQuestionIndex}`.
**Why?** This is a powerful React pattern. When the key changes, React destroys the old component instance and creates a new one. This automatically resets the internal timer, shuffles the answers, and clears any "selected" state from the previous question without manual cleanup logic.

### Key Implementation: Multi-Stage Timeouts

The `Question.jsx` component manages a complex feedback loop using nested `setTimeout` calls:

1. **Click:** Immediate state update to `'answered'` (UI turns yellow).
2. **1000ms later:** Logic checks correctness (UI turns Green/Red).
3. **2000ms later:** The `onSelectAnswer` prop is called, moving the main quiz state forward.

### Key Implementation: Side Effect Management

The `QuestionTimer.jsx` uses `useEffect` to manage `setInterval` (for the bar) and `setTimeout` (for the skip logic).

- **Cleanup:** Every timer returns a cleanup function (`clearInterval`/`clearTimeout`). This prevents "memory leaks" and "zombie timers" that try to update state after a component has been destroyed.

### Key Implementation: Memoized Shuffling

Shuffling happens inside `Answers.jsx` using `useMemo`. This ensures the random order is calculated **only once** when the question changes, rather than every time the 10ms timer updates the UI.

## 6. Key React Hooks to Master in this Project

| Hook          | Purpose in this App                                                                     |
| :------------ | :-------------------------------------------------------------------------------------- |
| `useState`    | Managing the list of answers and current UI feedback state.                             |
| `useEffect`   | Handling the timers and intervals for the progress bar.                                 |
| `useCallback` | Wrapping the answer selection handler so it doesn't trigger unnecessary effect re-runs. |
| `useMemo`     | Ensuring answers are only shuffled once when the question index changes.                |
| `useRef`      | (Optional) Storing values that shouldn't trigger re-renders.                            |
