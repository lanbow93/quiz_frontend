import { useParams } from "react-router-dom"
import { QuizProp } from "../customInterfaces"
import AuthHeader from "../components/AuthHeader"
import Header from "../components/Header"

export default function Results(props:QuizProp){
    const {id} = useParams()
    return <>
        {props.headerProp === "user" ? <AuthHeader /> : <Header />}
        <h1>You Scored A {id}</h1>
    </>
}