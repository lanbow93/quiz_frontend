import { Location, useLocation } from "react-router-dom"
import AuthHeader from "../components/AuthHeader"

export default function AdminQuizShow() {
    const location: Location = useLocation()
    console.log(location.state)
    return<>
    <AuthHeader />
    <h1>Admin Show Page For Quizzes</h1>
    </>
}