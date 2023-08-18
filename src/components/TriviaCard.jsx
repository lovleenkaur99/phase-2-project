import { useState } from "react";
import { useNavigate } from "react-router-dom"


function TriviaCard({triviaObj}) { 

    const navigate = useNavigate()

    const [didAnswerIsTrue, setDidAnswerIsTrue] = useState(false)
    // answer: "19"

    

    function handlePossibleAnswer(e) { 
        // "19" = "19"
        if(triviaObj.correctAnswer === e.target.textContent){ 
            // answer: true
            setDidAnswerIsTrue(true)    
            console.log("I am correct!")
        } else {
            setDidAnswerIsTrue(false)
            console.log("Am I correct?")
        }
    }
    
    return (
        
        <div className="card" style={{border : "solid #ebf4f1"}} navigate={navigate("/")} >
            
            <p>{triviaObj.category}</p>
            
            <p>{triviaObj.difficulty}</p>
            
            <p>{triviaObj.questions}</p>
                
            {triviaObj.possibleAnswers.map(answer => <button disabled={didAnswerIsTrue} style={didAnswerIsTrue ? {backgroundColor: "green"} : {backgroundColor: "red"}}  onClick={handlePossibleAnswer}  >{answer}</button> )}
            
        </div>
    )
}

export default TriviaCard