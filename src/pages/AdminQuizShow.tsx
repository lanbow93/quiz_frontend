import { Form, Location, useLocation } from "react-router-dom"
import AuthHeader from "../components/AuthHeader"
import QuestionCard from "../components/QuestionCard"
import { useState } from "react"
import { quizEventType } from "../customInterfaces"

export default function AdminQuizShow() {
    const location: Location = useLocation()
    console.log(location.state)

    const {questions} = location.state

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    console.log(questions)

    function handleClick(eventType: quizEventType){
        if(eventType === "next") {
            currentQuestionIndex === questions.length - 1 ? alert("You have reached the end. Verify you have selected an answer for every question and press 'Submit' "): setCurrentQuestionIndex(currentQuestionIndex + 1)
        } else if (eventType === "previous") {
            currentQuestionIndex === 0 ? alert("You are at the beginning. No previous option "): setCurrentQuestionIndex(currentQuestionIndex - 1)
        }
    }
    const [answerSelection, setAnswerSelection] = useState(new Array(questions.length))
    
    function HandleSelection(selectedAnswer: string) {
            const newAnswerSelection: Array<string> = [...answerSelection];
            newAnswerSelection[currentQuestionIndex] = selectedAnswer;
            setAnswerSelection([...newAnswerSelection])
            console.log({answerSelection})
    }

    return<>
    <AuthHeader />
    <div className="questionArea">
        <h3>(Preview)</h3>
        <h1>{location.state.title}</h1>


        <QuestionCard question={questions[currentQuestionIndex]} answerSelection={answerSelection} setAnswerSelection={HandleSelection} currentIndex={currentQuestionIndex} />

        <div className="quizControl">    
            <Form>
                <button>Submit</button>
            </Form>
            <button onClick={() => handleClick("previous")}>Previous</button>
            <button onClick={() => handleClick("next")}>Next</button>
        </div>
        
    </div>
    </>
}