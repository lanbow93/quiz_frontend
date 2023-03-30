import { Fetcher, LoaderFunction, useLoaderData } from "react-router-dom"
import AuthHeader from "../components/AuthHeader"
import { Quizzes } from "../customInterfaces"
import DashboardQuizCard from "../components/QuizCard"

export default function Dashboard() {
    const quizArrays = useLoaderData() as Quizzes
    console.log(quizArrays)
    return <>
    <AuthHeader />
        <div className="dashboard">
            <h1>My Quizzes</h1>

            <div className="quizCardArea">
                {quizArrays.map((quiz => {
                    return <DashboardQuizCard {...quiz} key={quiz._id} />
                }))}
            </div>
            
        </div>
    </>
}