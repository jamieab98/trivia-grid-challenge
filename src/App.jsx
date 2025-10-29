import QuestionCards from "./components/QuestionCard"
import styles from "./styles/App.module.css"
import Header from "./components/Header.jsx"
import DisplayedQuestion from "./components/DisplayedQuestion.jsx"
import { useState } from "react"

function App() {
  const [displayCard, setDisplayCard] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState("")

  const changeDisplay = () => {
    setDisplayCard((prev) => !prev);
  }

  function changeQuestion(question){
    setSelectedQuestion(question.question);
    console.log(question.question)
  }

  return(
    <div className={styles.app}>
      <Header/>
      <QuestionCards changeDisplay={changeDisplay} displayCard={displayCard} changeQuestion={changeQuestion}/>
      <DisplayedQuestion changeDisplay={changeDisplay} displayCard={displayCard} selectedQuestion={selectedQuestion}/>
    </div>
  )
}

export default App