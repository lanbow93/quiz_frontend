import { useState } from "react";
import AuthHeader from "../components/AuthHeader";
import { Form, Location, useLocation } from "react-router-dom";
import QuestionInput from "../components/QuestionInput";

export default function QuizEdit(){
    const location: Location = useLocation()

    const [formData, setFormData] = useState({
        title: location.state.title,
        password: "",
        confirmPassword: "",
    })

    const [questionData, setQuestionData] = useState(location.state.questions)
    function addQuestion() {
        const newQuestionData = [...questionData]
        newQuestionData.push(["","","","",""])
        setQuestionData(newQuestionData )
    }

    return <>
    <AuthHeader />
    <div className="formArea">    
        <Form action={`/dashboard/${location.state._id}/update`} method="post" className="userForm">
        <h3>Edit Quiz</h3>

        <label htmlFor="title" >Title:</label>
        <input type="text" name="title" value={formData.title} onChange={event => setFormData({...formData, title: event.target.value})} />
        <label htmlFor="password" >Password:</label>
        <input type="password" name="password" value={formData.password} placeholder="Leave blank for no password" onChange={event => setFormData({...formData, password: event.target.value})}/>

        <label htmlFor="name" >Confirm Password:</label>
        {formData.password === formData.confirmPassword ? <input type="password" name="confirmpassword" value={formData.confirmPassword} onChange={event => setFormData({...formData, confirmPassword: event.target.value})} /> : <input type="password" name="confirmpassword"  value={formData.confirmPassword} onChange={event => setFormData({...formData, confirmPassword: event.target.value})} className="redHighlight"/>}

    
        {location.state.isPublic ? <label htmlFor="isPublic" >Public:<input type="checkbox" name="isPublic" checked /></label> : <label htmlFor="isPublic" >Public:<input type="checkbox" name="isPublic" /></label>}

        <input type="hidden" name="questions" value={JSON.stringify(questionData)} />
        <h4>Question Section</h4>

        {questionData.map((question: Array<string>, index: number) => <QuestionInput questionArray={question} index={index} questionData={questionData} setQuestionFunction={setQuestionData} key={`inputQuestionIndex:${index}`} /> )}
        <p className="simulatedButton" onClick={addQuestion}>New Question</p>
        
        
        {formData.title && formData.password === formData.confirmPassword ?  <button className="ready" >Update Quiz</button> :  <button className="disabled" disabled >Update Quiz</button> }
        </Form>
    </div>
    </>
}