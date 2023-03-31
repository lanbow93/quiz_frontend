import { useLoaderData } from "react-router-dom"
import AuthHeader from "../components/AuthHeader"
import Header from "../components/Header"
import { QuizProp, Quizzes } from "../customInterfaces"



export default function QuizzesBoard(props: QuizProp) {
    const quizList = useLoaderData() as Quizzes
    console.log(quizList)
    return <>
        {props.headerProp === "public" ? <Header /> : <AuthHeader/>}
        <div className="quizzesPage">
            <h3>Quizzes</h3>
        </div>
    </>
}