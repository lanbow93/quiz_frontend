import { Form, useLoaderData } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import Header from "../components/Header";
import { IQuizMongo, QuizProp, quizEventType } from "../customInterfaces";
import QuestionCard from "../components/QuestionCard";
import { useState } from "react";

export default function Quiz(props: QuizProp) {
    const data = useLoaderData() as IQuizMongo
  

    const questions: Array<Array<string>> = data.questions
   

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [grade, setGrade] = useState(0)
  

    function handleClick(eventType: quizEventType){
        if(eventType === "next") {
            currentQuestionIndex === questions.length - 1 ? alert("You have reached the end. Verify you have selected an answer for every question and press 'Submit' "): setCurrentQuestionIndex(currentQuestionIndex + 1)
            doTheThing()
        } else if (eventType === "previous") {
            currentQuestionIndex === 0 ? alert("You are at the beginning. No previous option "): setCurrentQuestionIndex(currentQuestionIndex - 1)
            doTheThing()
        }
    }
    const [answerSelection, setAnswerSelection] = useState(new Array(questions.length))

    const [userName, setUserName] = useState("")
    function  HandleSelection (selectedAnswer: string) {
            const newAnswerSelection: Array<string> = [...answerSelection];
            newAnswerSelection[currentQuestionIndex] = selectedAnswer;
            setAnswerSelection([...newAnswerSelection])
            doTheThing()
    }

    function doTheThing(){
        let tempValue: number = 0
        for (let answerIndex in answerSelection) {
            if(questions[answerIndex][1] === answerSelection[answerIndex]){
                tempValue += 1
            }
        }
        setGrade(Math.round((tempValue / questions.length) * 100))
        
    }

    return <>
        {props.headerProp === "user" ? <AuthHeader /> : <Header />}
        <div className="questionArea">
        <h1>{data.title}</h1>
        <div className="nameField">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" value={userName} onChange={(event) => setUserName(event.target.value)} />
        </div>


        <QuestionCard question={questions[currentQuestionIndex]} answerSelection={answerSelection} setAnswerSelection={HandleSelection} currentIndex={currentQuestionIndex} doTheThing={doTheThing}/>

        <div className="quizControl">    
            <button onClick={() => handleClick("previous")}>Previous</button>
            <button onClick={() => handleClick("next")}>Next</button>
        </div>
        
        <Form action={`/${props.headerProp === "user" ? "userquizzes": "publicquizzes"}/submit`} method="post" className="submitFormButton">
            <input type="hidden" name="name" value={userName} />
            <input type="hidden" name="quizID" value={data._id} />
            <input type="hidden" name="grade" value={grade} />
            <input type="hidden" name="questions" value={JSON.stringify(questions)} />
            <input type="hidden" name="answers" value={answerSelection} />
                {userName ? <button >Submit</button> : <button className="disabled" disabled>Submit</button>}
        </Form>
        
    </div>
    </>
    
}