import styles from "../styles/Header.module.css"

function Header() {

    return(
        <div className={styles.header}>
            <h2>Trivia Grid Challenge</h2>
            <h3 className={styles.score}>Current Score: </h3>
        </div>
    )
}

export default Header