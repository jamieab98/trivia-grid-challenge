import styles from "../styles/DisplayedQuestion.module.css"

function DisplayedQuestion({returnToGrid, displayCard, selectedQuestion, displayAnswer, showAnswer, correctAnswer}) {

    return(
        <div>
            <div className={`${displayCard ? styles.displayedQuestion : styles.invisible}`}>
                <div className={styles.questionText} onClick={() => displayAnswer()}>{selectedQuestion}</div>
            </div>
            <div className={`${displayCard ? styles.answerButton : styles.invisible}`}>
            </div>
            <div className={`${showAnswer ? styles.answer : styles.invisible}`}>
                <div className={styles.answerBox}>{correctAnswer}</div>
                <div className={styles.userResponse}>
                    <div className={styles.responseButton} onClick={() => returnToGrid()}>Correct</div>
                    <div className={styles.responseButton} onClick={() => returnToGrid()}>Incorrect</div>
                </div>
            </div>
        </div>
    )
}

export default DisplayedQuestion