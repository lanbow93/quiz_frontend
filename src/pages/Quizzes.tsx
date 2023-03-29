import AuthHeader from "../components/AuthHeader"
import Header from "../components/Header"
import { QuizProp } from "../customInterfaces"



export default function Quizzes(props: QuizProp) {
    return <>
        {props.headerProp === "public" ? <Header /> : <AuthHeader/>}
        <div className="quizzesPage">
            <h3>Quizzes</h3>
        </div>
    </>
}