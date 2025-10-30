import { scienceQuestions } from "../questions";
import styles from "../styles/QuestionCard.module.css";

function QuestionCards({changeDisplay, displayGrid, changeQuestion, setCorrectAnswer, setDisplayGrid, setPoints}) {

    function handleClick(question) {
        changeDisplay();
        changeQuestion(question);
        setCorrectAnswer(question.answer);
        setDisplayGrid(false);
        setPoints(question.points);
    }

    return(
        <div>
            <div className={`${displayGrid ? styles.questionGrid : styles.invisible}`}>
                {scienceQuestions.map((question, index) => (
                    <div className={styles.questionCard} key={index} onClick={() => handleClick(question)}>
                        <div>Question Number {question.id}</div>
                        <div>Point Value: {question.points}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCards