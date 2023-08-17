import TriviaCard from "./TriviaCard"
import { useLoaderData } from "react-router-dom"

function TriviaPage({trivia, filteredArray}) { 

    const {questions} = useLoaderData()
    
    return ( 
        <div>
            {filteredArray.map(trivia => <TriviaCard key={trivia.id} triviaObj={trivia} /> )}
            
        </div>
    )
}

export default TriviaPage