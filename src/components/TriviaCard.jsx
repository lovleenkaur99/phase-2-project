// import { useState } from "react";
// import { useNavigate } from "react-router-dom"


// function TriviaCard({triviaObj}) { 

    
//     const [iscorrect, setiscorrect] = useState(false)

//     const [didAnswerIsTrue, setDidAnswerIsTrue] = useState(false)
//     // answer: "19"

    

//     function handlePossibleAnswer(e) { 
//         // "19" = "19"
//         if(triviaObj.correctAnswer === e.target.textContent){ 
//             // answer: true
//             setDidAnswerIsTrue(true)    
//             console.log("I am correct!")
//         } else {
//             setDidAnswerIsTrue(false)
//             console.log("Am I correct?")
//         }
//     }
    
    
//     return (
        
//         <div className="card" style={{border : "solid #ebf4f1"}} >
            
//             <p>{triviaObj.category}</p>
            
//             <p>{triviaObj.difficulty}</p>
            
//             <p>{triviaObj.questions}</p>
                
//             {triviaObj.possibleAnswers.map(answer => <button disabled={didAnswerIsTrue} style={didAnswerIsTrue ? {correctAnswer: "green"} : {backgroundColor: "grey"}}  onClick={handlePossibleAnswer}  >{answer}</button> )}
            
//         </div>
//     )
// }

// export default TriviaCard


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TriviaCard({ triviaObj }) {
    const [iscorrect, setiscorrect] = useState(false);
    const [didAnswerIsTrue, setDidAnswerIsTrue] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    function handlePossibleAnswer(e) {
        if (!didAnswerIsTrue) {
            const selectedText = e.target.textContent;
            setSelectedAnswer(selectedText);
            

            if (triviaObj.correctAnswer === selectedText) {
                setDidAnswerIsTrue(true);
                setiscorrect(true);
                console.log("I am correct!");
            } else {
                setDidAnswerIsTrue(true);
                setiscorrect(false);
                console.log("Am I correct?");
            }
        }
    }

    // console.log(`TRIVIA OBJECT: ${triviaObj}`);
    // console.log(`TYPE OF TRIVIA OBJECT: ${typeof(triviaObj)}`)
    // console.log(`TRIVIA OBJECT ANSWERS: ${triviaObj.possibleAnswers}`);
    // console.log(`TYPE OF TRIVIA OBJECT ANSWERS: ${typeof(triviaObj.possibleAnswers)}`)

    return (
        <div className="card" style={{ border: "solid #ebf4f1" }}>
            <p>{triviaObj.category}</p>
            <p>{triviaObj.difficulty}</p>
            <p>{triviaObj.questions}</p>
            {triviaObj.possibleAnswers.map((answer, index) => (
                <button
                    key={index}
                    disabled={didAnswerIsTrue}
                    style={{
                        backgroundColor: selectedAnswer === answer
                            ? (iscorrect ? "green" : "red")
                            : "grey",
                    }}
                    onClick={handlePossibleAnswer}
                >
                    {answer}
                </button>
            ))}
        </div>
    );
}

export default TriviaCard;
