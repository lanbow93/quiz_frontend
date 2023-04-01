import { Link } from "react-router-dom";
import {  IQuizMongoProps } from "../customInterfaces";
import { dateConverter } from "../functions";

export default function DashboardQuizCard(props: IQuizMongoProps){
    const linkEnding: string = props.link === "dashboard" ? props._id : "verify"
    const newState: IQuizMongoProps | Array<string> = props.link === "dashboard" ? props: [props._id, props.link] 
    return <Link to={`/${props.link}/${linkEnding}`}  state={newState}>
        <div className="quizCard">
        <h2>{props.title}</h2>
        <p>Created At: {dateConverter(props.createdAt)}</p>
    </div>
    </Link>

}