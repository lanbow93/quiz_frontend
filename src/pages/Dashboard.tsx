import { Link, useLoaderData } from "react-router-dom"
import AuthHeader from "../components/AuthHeader"
import { Quizzes } from "../customInterfaces"
import DashboardQuizCard from "../components/QuizCard"

export default function Dashboard() {
    const quizArrays = useLoaderData() as Quizzes
    return <>
    <AuthHeader />
        <div className="dashboard">
            
            <h1>My Quizzes</h1>
            <div className="userOptions">
                <Link to="/dashboard/create"><button>New Quiz</button></Link>
            </div>
            <div className="quizCardArea">
                {quizArrays.map((quiz => {
                    return <DashboardQuizCard {...quiz} link="dashboard" key={quiz._id} />
                }))}
            </div>
            
        </div>
    </>
}