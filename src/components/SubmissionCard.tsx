import { ISubmission } from "../customInterfaces";
import { dateConverter } from "../functions";

export default function SubmissionCard(props: ISubmission){
    
    return <div className="quizCard">
        <h2>{props.name}</h2>
        <p><span className="bold">Created At:</span> {dateConverter(props.createdAt)}</p>
        <p><span className="bold">Grade:</span> {props.grade}</p>
    </div>
}