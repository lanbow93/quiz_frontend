import { useLoaderData } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import SubmissionCard from "../components/SubmissionCard";
import { ISubmissions } from "../customInterfaces";

export default function SubmissionIndex(){
    const submissionList = useLoaderData() as ISubmissions
    console.log(submissionList)
    return <>
    <AuthHeader />
    <div className="dashboard">
        <div className="quizCardArea">
        {submissionList.map((submission) => {
        return <SubmissionCard {...submission} key={submission._id} />
        })}     
        </div>
    </div>
    
    </>
}