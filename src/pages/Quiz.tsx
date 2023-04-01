import { Form, useLoaderData } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import Header from "../components/Header";
import { IQuizMongo, QuizProp, quizEventType } from "../customInterfaces";
import QuestionCard from "../components/QuestionCard";
import { useState } from "react";

export default function Quiz(props: QuizProp) {
    const data = useLoaderData() as IQuizMongo
  

    const questions = data.questions

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  

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
     
            
    }


    return <>
        {props.headerProp === "user" ? <AuthHeader /> : <Header />}
        <div className="questionArea">
        <h1>{data.title}</h1>


        <QuestionCard question={questions[currentQuestionIndex]} answerSelection={answerSelection} setAnswerSelection={HandleSelection} currentIndex={currentQuestionIndex} />

        <div className="quizControl">    
            <button onClick={() => handleClick("previous")}>Previous</button>
            <button onClick={() => handleClick("next")}>Next</button>
        </div>
        <Form className="submitFormButton">
            <input type="hidden" name="name" />
            <input type="hidden" name="quizID" value={data._id} />
            <input type="hidden" name="questions" value={JSON.stringify(data.questions)} />
            <input type="hidden" name="answers" value={answerSelection} />
                <button disabled>Submit</button>
        </Form>
        
    </div>
    </>
    
}