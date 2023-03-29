import { useLoaderData } from "react-router-dom"

export default function UserQuizIndex() {
    const data = useLoaderData()
    console.log(data)
    return <div>
        <h1>My Quizzes</h1>
    </div>
}