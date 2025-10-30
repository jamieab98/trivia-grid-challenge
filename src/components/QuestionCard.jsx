import { scienceQuestions } from "../questions";
import styles from "../styles/QuestionCard.module.css";
import { useState } from "react";

function QuestionCards({changeDisplay, displayGrid, changeQuestion, setCorrectAnswer, setDisplayGrid, setPoints}) {
    const [questions, setQuestions] = useState(scienceQuestions);

    function handleClick(question, id) {
        changeDisplay();
        changeQuestion(question);
        setCorrectAnswer(question.answer);
        setDisplayGrid(false);
        setPoints(question.points);
        setQuestions(prev => prev.map(q => q.id === id ? { ...q, answered: true} : q));
    }

    return(
        <div>
            <div className={`${displayGrid ? styles.questionGrid : styles.invisible}`}>
                {questions.map((question, index) => (
                    <div className={question.answered ? styles.answeredQuestion : styles.questionCard} key={index} onClick={() => handleClick(question, question.id)}>
                        <div>Question Number {question.id}</div>
                        <div>Point Value: {question.points}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCards