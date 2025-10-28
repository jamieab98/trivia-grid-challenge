import QuestionCards from "./components/QuestionCard"
import styles from "./styles/App.module.css"


function App() {

  return(
    <div className={styles.app}>
      <QuestionCards/>
    </div>
  )
}

export default App