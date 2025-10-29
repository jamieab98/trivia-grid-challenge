import styles from "../styles/DisplayedQuestion.module.css"

function DisplayedQuestion({changeDisplay, displayCard, selectedQuestion}) {

    return(
        <div className={`${displayCard ? styles.displayedQuestion : styles.invisible}`} onClick={() => changeDisplay()}>
            <div className={styles.questionText}>{selectedQuestion}</div>
        </div>
    )
}

export default DisplayedQuestion