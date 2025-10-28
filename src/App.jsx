import QuestionCards from "./components/QuestionCard"
import styles from "./styles/App.module.css"
import Header from "./components/Header.jsx"

function App() {

  return(
    <div className={styles.app}>
      <Header/>
      <QuestionCards/>
    </div>
  )
}

export default App