Goal
Build a replayable, accessible trivia game with a dynamic grid layout, score tracking, and custom feedback. Think of it like a mix between Jeopardy and a flashcard quiz app

Core Features

- Grid-based UI: Display trivia categories and questions in a responsive grid.
- Reusable Components: Modularize the grid, question cards, score tracker, and feedback modal.
- State Management: Lift state to track selected questions, score, and game progress.
- Controlled Forms: Use controlled inputs for answering questions and submitting responses.
- Custom Validation: Validate answers and give dynamic feedback (correct/incorrect, hints).
- Replay Logic: Add a “Play Again” button that resets the game state.
- Accessibility: Ensure keyboard navigation, ARIA roles, and screen reader support.

Bonus Challenges

- Timer Mode: Add a countdown for each question using useEffect and cleanup logic.
- Local Storage: Persist high scores or last played state.
- Animations: Use CSS transitions for card flips or feedback modals.
- Difficulty Levels: Let users choose between easy, medium, and hard questions
