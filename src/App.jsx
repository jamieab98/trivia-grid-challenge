import QuestionCards from "./components/QuestionCard"
import styles from "./styles/App.module.css"
import Header from "./components/Header.jsx"
import DisplayedQuestion from "./components/DisplayedQuestion.jsx"
import { useState } from "react"

function App() {
  const [displayCard, setDisplayCard] = useState(false);

  const flipCard = () => {
    setDisplayCard((prev) => !prev);
  };

  return(
    <div className={styles.app}>
      <Header/>
      <QuestionCards flipCard={flipCard} displayCard={displayCard}/>
      <DisplayedQuestion flipCard={flipCard} displayCard={displayCard}/>
    </div>
  )
}

export default App