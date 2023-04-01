import { Link, useLoaderData } from "react-router-dom"
import AuthHeader from "../components/AuthHeader"
import Header from "../components/Header"
import { QuizProp, Quizzes } from "../customInterfaces"
import QuizCard from "../components/QuizCard"



export default function QuizzesBoard(props: QuizProp) {
    const quizList = useLoaderData() as Quizzes
 
    const isUser: boolean = props.headerProp === "user"
    return <>
        {isUser ? <AuthHeader/> : <Header />}
        <div className="dashboard">
            <h1>Quizzes</h1>
            <div className="quizCardArea">
                {quizList.map((quiz => {
                    return <QuizCard {...quiz} link={isUser ? "userquizzes" : "publicquizzes"} key={quiz._id} />
                }))}
            </div>
            
        </div>
        
    </>
}