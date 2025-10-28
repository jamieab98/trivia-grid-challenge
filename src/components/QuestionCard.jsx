import { scienceQuestions } from "../questions";
import styles from "../styles/QuestionCard.module.css";

function QuestionCards() {

    return(
        <div className={styles.questionGrid}>
            {scienceQuestions.map((question, index) => (
                <div className={styles.questionCard} key={index}>
                    <div>Question Number {question.id}</div>
                </div>
            ))}
        </div>
    )
}

export default QuestionCards