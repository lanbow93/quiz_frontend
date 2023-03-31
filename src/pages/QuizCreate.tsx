import { useState } from "react";
import AuthHeader from "../components/AuthHeader";
import { Form } from "react-router-dom";
import QuestionInput from "../components/QuestionInput";

export default function QuizCreate(){
    const [formData, setFormData] = useState({
        title: "",
        password: "",
        confirmPassword: "",
    })

    const [questionData, setQuestionData] = useState([["","","","",""]])
    function addQuestion() {
        const newQuestionData = [...questionData]
        newQuestionData.push(["","","","",""])
        setQuestionData(newQuestionData )
    }

    return <>
    <AuthHeader />
    <div className="formArea">    
        <Form action="/signup" method="post" className="userForm">
        <h3>Create New Quiz</h3>

        <label htmlFor="title" >Title:</label>
        <input type="text" name="title" value={formData.title} onChange={event => setFormData({...formData, title: event.target.value})} />
        <label htmlFor="password" >Password:</label>
        <input type="password" name="password" value={formData.password} placeholder="Leave blank for no password" onChange={event => setFormData({...formData, password: event.target.value})}/>

        <label htmlFor="name" >Confirm Password:</label>
        {formData.password === formData.confirmPassword ? <input type="password" name="confirmpassword" value={formData.confirmPassword} onChange={event => setFormData({...formData, confirmPassword: event.target.value})} /> : <input type="password" name="confirmpassword"  value={formData.confirmPassword} onChange={event => setFormData({...formData, confirmPassword: event.target.value})} className="redHighlight"/>}

        <label htmlFor="isPublic" >Public:<input type="checkbox" name="isPublic" /></label>
        
        <h4>Question Section</h4>

        {questionData.map((question, index) => <QuestionInput questionArray={question} index={index} setQuestionFunction={setQuestionData} key={`inputQuestionIndex:${index}`} /> )}
        <p className="simulatedButton" onClick={addQuestion}>New Question</p>
        
        
        {formData.title && formData.confirmPassword && formData.password && formData.password === formData.confirmPassword ?  <button className="ready" >Create Quiz</button> :  <button className="disabled" disabled >Create Quiz</button> }
        </Form>
    </div>
    </>
}