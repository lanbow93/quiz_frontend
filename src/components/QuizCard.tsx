import { Link } from "react-router-dom";
import {  IQuizMongoProps } from "../customInterfaces";
import { dateConverter } from "../functions";

export default function DashboardQuizCard(props: IQuizMongoProps){
    return <Link to={`/${props.link}/${props._id}`}  state={props}>
        <div className="quizCard">
        <h2>{props.title}</h2>
        <p>Created At: {dateConverter(props.createdAt)}</p>
    </div>
    </Link>

}