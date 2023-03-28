
import {Form} from "react-router-dom"


export default function Signup() {
    return <div className="formArea">
        <Form action="/signup" method="post" className="userForm">
        <h3>Create New User</h3>
        <label htmlFor="name" >Name:</label>
        <input type="text" name="name" placeholder="name" />
        <label htmlFor="username" >Username:</label>
        <input type="text" name="username" placeholder="username"  />
        <label htmlFor="name" >Password:</label>
        <input type="password" name="password" placeholder="password" />
        <label htmlFor="name" >Confirm Password:</label>
        <input type="password" name="confirmpassword" placeholder="confirm password"  />
        <button className="disabled" >Create User</button>
        </Form>
    </div>
}