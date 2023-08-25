import TriviaCard from "./TriviaCard"
// import { useNavigate } from "react-router-dom"

function TriviaPage({ filteredArray}) { 

    // const navigate = useNavigate()

    return ( 
        <div >
            {filteredArray.map(trivia => <TriviaCard key={trivia.id} triviaObj={trivia} /> )}
        </div>
    )
}

export default TriviaPage