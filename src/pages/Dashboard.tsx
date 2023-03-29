import { Fetcher, LoaderFunction, useLoaderData } from "react-router-dom"
import AuthHeader from "../components/AuthHeader"
import { Quizzes } from "../customInterfaces"

export default function Dashboard() {
    const quizArrays = useLoaderData() as Quizzes
    console.log(quizArrays)
    return <>
    <AuthHeader />
        <div>
            <h1>My Quizzes</h1>
            <ul>
                {quizArrays.map((quiz => {
                    return <li >{quiz.title}</li>
                }))}
            </ul>
        </div>
    </>
}