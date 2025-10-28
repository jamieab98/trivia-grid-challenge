import { scienceQuestions } from "../questions";
import styles from "../styles/QuestionCard.module.css";

function QuestionCards() {
    const cardClick = (id) => {
        console.log(`Card #${id} was clicked`)
    }

    return(
        <div>
            <div className={styles.questionGrid}>
                {scienceQuestions.map((question, index) => (
                    <div className={styles.questionCard} key={index} onClick={() => cardClick(question.id)}>
                        <div>Question Number {question.id}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCards