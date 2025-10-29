import { scienceQuestions } from "../questions";
import styles from "../styles/QuestionCard.module.css";

function QuestionCards({flipCard, displayCard}) {

    return(
        <div>
            <div className={`${styles.questionGrid} ${displayCard ? styles.invisible : styles.visible}`}>
                {scienceQuestions.map((question, index) => (
                    <div className={styles.questionCard} key={index} onClick={() => flipCard()}>
                        <div>Question Number {question.id}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCards