import styles from "../styles/DisplayedQuestion.module.css"

function DisplayedQuestion({flipCard, displayCard}) {

    return(
        <div className={`${displayCard ? styles.displayedQuestion : styles.invisible}`} onClick={() => flipCard()}>
            <>Displayed Question</>
        </div>
    )
}

export default DisplayedQuestion