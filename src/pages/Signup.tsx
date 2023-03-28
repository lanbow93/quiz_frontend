import { useState } from "react"
import {Form} from "react-router-dom"

interface UserForm {
    name: string,
    username: string,
    password: string,
    confirmPassword: string
}


export default function Signup() {
    const [formData, setFormData] = useState<UserForm>({
        name: "",
        username: "",
        password: "",
        confirmPassword: ""
    })

    return <div className="formArea">
        <Form action="/signup" method="post" className="userForm">
        <h3>Create New User</h3>

        <label htmlFor="name" >Name:</label>
        <input type="text" name="name" value={formData.name} onChange={event => setFormData({...formData, name: event.target.value})} />

        <label htmlFor="username" >Username:</label>
        <input type="text" name="username" value={formData.username} onChange={event => setFormData({...formData, username: event.target.value})} />

        <label htmlFor="name" >Password:</label>
        <input type="password" name="password" value={formData.password}  onChange={event => setFormData({...formData, password: event.target.value})}/>

        <label htmlFor="name" >Confirm Password:</label>
        {formData.password === formData.confirmPassword ? <input type="password" name="confirmpassword" value={formData.confirmPassword} onChange={event => setFormData({...formData, confirmPassword: event.target.value})} /> : <input type="password" name="confirmpassword"  value={formData.confirmPassword} onChange={event => setFormData({...formData, confirmPassword: event.target.value})} className="redHighlight"/>}

        
        {formData.name && formData.confirmPassword && formData.password && formData.username && formData.password === formData.confirmPassword ?  <button className="ready" >Create User</button> :  <button className="disabled" disabled >Create User</button> }
        </Form>
    </div>
}