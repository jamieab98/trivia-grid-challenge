import { scienceQuestions } from "../questions";
import styles from "../styles/QuestionCard.module.css";

function QuestionCards({flipCard, displayCard}) {

    return(
        <div>
            <div className={`${displayCard ? styles.invisible : styles.questionGrid}`}>
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