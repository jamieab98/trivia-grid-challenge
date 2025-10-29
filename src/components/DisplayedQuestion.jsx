import styles from "../styles/DisplayedQuestion.module.css"

function DisplayedQuestion({changeDisplay, displayCard, selectedQuestion, displayAnswer}) {

    return(
        <div>
            <div className={`${displayCard ? styles.displayedQuestion : styles.invisible}`}>
                <div className={styles.questionText} onClick={() => displayAnswer()}>{selectedQuestion}</div>
            </div>
            <div className={`${displayCard ? styles.answerButton : styles.invisible}`}>
                <div className={styles.answerBackground} onClick={() => changeDisplay()}>Correct</div>
                <div className={styles.answerBackground} onClick={() => changeDisplay()}>Incorrect</div>
            </div>
        </div>
    )
}

export default DisplayedQuestion