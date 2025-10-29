import styles from "../styles/DisplayedQuestion.module.css"

function DisplayedQuestion({changeDisplay, displayCard, selectedQuestion}) {

    return(
        <div className={`${displayCard ? styles.displayedQuestion : styles.invisible}`} onClick={() => changeDisplay()}>
            <>{selectedQuestion}</>
        </div>
    )
}

export default DisplayedQuestion