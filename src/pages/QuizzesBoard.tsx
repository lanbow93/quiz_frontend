import { Link, useLoaderData } from "react-router-dom"
import AuthHeader from "../components/AuthHeader"
import Header from "../components/Header"
import { QuizProp, Quizzes } from "../customInterfaces"
import QuizCard from "../components/QuizCard"



export default function QuizzesBoard(props: QuizProp) {
    const quizList = useLoaderData() as Quizzes
    console.log(quizList)
    return <>
        {props.headerProp === "public" ? <Header /> : <AuthHeader/>}
        <div className="dashboard">
            <h1>Quizzes</h1>
            <div className="quizCardArea">
                {quizList.map((quiz => {
                    return <QuizCard {...quiz} link="quizzes" key={quiz._id} />
                }))}
            </div>
            
        </div>
        
    </>
}