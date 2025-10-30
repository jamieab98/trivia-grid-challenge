import QuestionCards from "./components/QuestionCard"
import styles from "./styles/App.module.css"
import Header from "./components/Header.jsx"
import DisplayedQuestion from "./components/DisplayedQuestion.jsx"
import { useState } from "react"

function App() {
  const [displayCard, setDisplayCard] = useState(false);
  const [displayGrid, setDisplayGrid] = useState(true);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const changeDisplay = () => {
    setDisplayCard((prev) => !prev);
  }

  function changeQuestion(question){
    setSelectedQuestion(question.question);
  }

  const displayAnswer = () => {
    setShowAnswer((prev) => !prev);
    setDisplayCard(false);
  }

  return(
    <div className={styles.app}>
      <Header/>
      <QuestionCards changeDisplay={changeDisplay} displayCard={displayCard} changeQuestion={changeQuestion} setCorrectAnswer={setCorrectAnswer} correctAnswer={correctAnswer} displayGrid={displayGrid} setDisplayGrid={setDisplayGrid}/>
      <DisplayedQuestion changeDisplay={changeDisplay} displayCard={displayCard} selectedQuestion={selectedQuestion} displayAnswer={displayAnswer} showAnswer={showAnswer} correctAnswer={correctAnswer}/>
    </div>
  )
}

export default App