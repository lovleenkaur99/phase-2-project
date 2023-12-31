import TriviaPage from "./TriviaPage";
// import Form from "./Form";
import StartButton from "./StartButton";
import Options from "./Options";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";


function Homepage() { 

    const [trivia, setTrivia] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/trivia')
        .then(response => response.json())
        .then(triviaData => setTrivia(triviaData) )
    }, [])

    function addTrivia(newTrivia) { 
        setTrivia([...trivia, newTrivia])
    }
    const [chooseCategory, setChooseCategory] = useState("");

    const filteredArray = trivia.filter(trivia => {return trivia.category.includes(chooseCategory)})

    return ( 
        <div>
            <h1>Quiz Voyage</h1>
            {/* <button>
                <Link to="/triviaPage" >Start!</Link>
            </button> */}
            {/* <button>
                <Link  to="/options" >Choose a category </Link>
            </button> */}
            <button className="button2">
                <Link to="/form">Add New Trivia Here!</Link> 
            </button>
                
            
            <Options setChooseCategory={setChooseCategory} />
            {<StartButton setChooseCategory={setChooseCategory}/>}
            <TriviaPage setTrivia={setTrivia} filteredArray={filteredArray} />
            {/* <Form addTrivia={addTrivia} /> */}
        </div>
    )
}

export default Homepage;
