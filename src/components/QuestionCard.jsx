import { useState } from "react";
import { scienceQuestions } from "../questions";
import styles from "../styles/QuestionCard.module.css";

function QuestionCards({changeDisplay, displayCard, changeQuestion, setAnswer}) {

    function handleClick(question) {
        changeDisplay();
        changeQuestion(question);
        setAnswer(question.answer);
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