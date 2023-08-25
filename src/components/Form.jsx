import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() { 

    const navigate = useNavigate()

    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [question, setQuestion] = useState("")
    const [correctAnswer, setCorrectAnswer] = useState("")
    const [possibleAnswers, setPossibleAnswers] = useState("")

    const handleCategory = (e) => setCategory(e.target.value)
    const handleDifficulty = (e) => setDifficulty(e.target.value)
    const handleQuestion = (e) => setQuestion(e.target.value)
    const handleCorrectAnswer = (e) => setCorrectAnswer(e.target.value)
    const handlePossibleAnswers = (e) => setPossibleAnswers(e.target.value)

    function handleForm(e) { 
        e.preventDefault()
   
    const OPTIONS = { 
        method : "POST",
        headers : { 
            "Accept" : "application/json",
            "Content-type" : "application/json"
        },
        body : JSON.stringify({ 
            "category": category, 
            "difficulty": difficulty, 
            "question": question, 
            "correctAnswer": correctAnswer, 
            "possibleAnswers": possibleAnswers.split(",")
        })
    } 
    fetch('http://localhost:3000/trivia', OPTIONS)
    .then(response => response.json())
    .then(() => navigate("/")) 
}

    return ( 
        <div className="form">
            <h2>Add New Trivia: </h2>
            <form onSubmit={handleForm} > 
                <input type="text" name="category" onChange={handleCategory} placeholder="Category" value={category} /> <br/>
                <input type="text" name="difficulty" onChange={handleDifficulty} placeholder="Difficulty" value={difficulty} /> <br/>
                <input type="text" name="question" onChange={handleQuestion} placeholder="Questions" value={question} /> <br/>
                <input type="text" name="correctAnswer" onChange={handleCorrectAnswer} placeholder="Correct Answer" value={correctAnswer} /> <br/>
                <input type="array" name="possibleAnswers" onChange={handlePossibleAnswers} placeholder="Possible Answers" value={possibleAnswers} /> <br/>
                <button>Add Trivia</button>
            </form>

        </div>
    )
}

export default Form; 

