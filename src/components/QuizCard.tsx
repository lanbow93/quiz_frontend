import { Link } from "react-router-dom";
import { IQuizMongo } from "../customInterfaces";
import { dateConverter } from "../functions";

export default function DashboardQuizCard(props: IQuizMongo){
    return <Link to={`/dashboard/${props._id}`}  state={props}>
        <div className="quizCard">
        <h2>{props.title}</h2>
        <p>Created At: {dateConverter(props.createdAt)}</p>
    </div>
    </Link>

}