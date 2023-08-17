import { useState } from "react";
import { useNavigate } from "react-router-dom"


function TriviaCard({triviaObj}) { 

    const navigate = useNavigate()

    const [answer, setAnswer] = useState(triviaObj.correctAnswer)


    function handlePossibleAnswer() { 

        if(answer === triviaObj.correctAnswer){ 
            setAnswer(true)
            console.log("I am correct!")
        } else {
            setAnswer(false)
            console.log("Am I correct?")
        }
    }
    
    return (
        
        <div>
            
            <p>{triviaObj.category}</p>
            
            <p>{triviaObj.difficulty}</p>
            
            <p>{triviaObj.questions}</p>
                
            {triviaObj.possibleAnswers.map(answer => <button  onClick={handlePossibleAnswer}  >{answer}</button> )}
            
        </div>
    )
}

export default TriviaCard