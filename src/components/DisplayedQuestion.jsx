import styles from "../styles/DisplayedQuestion.module.css"

function DisplayedQuestion({changeDisplay, displayCard}) {

    return(
        <div className={`${displayCard ? styles.displayedQuestion : styles.invisible}`} onClick={() => changeDisplay()}>
            <>Displayed Question</>
        </div>
    )
}

export default DisplayedQuestion