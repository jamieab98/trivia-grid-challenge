import { useState } from "react";
import { scienceQuestions } from "../questions";
import styles from "../styles/QuestionCard.module.css";

function QuestionCards({changeDisplay, displayCard, changeQuestion}) {

    function handleClick(question) {
        changeDisplay();
        changeQuestion(question);
    }

    return(
        <div>
            <div className={`${displayCard ? styles.invisible : styles.questionGrid}`}>
                {scienceQuestions.map((question, index) => (
                    <div className={styles.questionCard} key={index} onClick={() => handleClick(question)}>
                        <div>Question Number {question.id}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCards