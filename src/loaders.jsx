export async function getQuestions() {
    const response = await fetch('http://localhost:3000/trivia')
    const questions = await response.json()
    return { questions }
}

export async function singleQuestions({params}) { 
    const response = await fetch(`http://localhost:3000/trivia/${params.id}`)
    const questionObj = await response.json()
    
    return{ questionObj}
}