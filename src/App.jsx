import QuestionCards from "./components/QuestionCard"
import styles from "./styles/App.module.css"
import Header from "./components/Header.jsx"
import DisplayedQuestion from "./components/DisplayedQuestion.jsx"

function App() {

  return(
    <div className={styles.app}>
      <Header/>
      <QuestionCards/>
      <DisplayedQuestion/>
    </div>
  )
}

export default App