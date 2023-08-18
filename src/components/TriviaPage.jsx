import TriviaCard from "./TriviaCard"


function TriviaPage({ filteredArray}) { 

    return ( 
        <div>
            {filteredArray.map(trivia => <TriviaCard key={trivia.id} triviaObj={trivia} /> )}
        </div>
    )
}

export default TriviaPage