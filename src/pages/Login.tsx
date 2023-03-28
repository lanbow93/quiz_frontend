import {Form} from "react-router-dom"


export default function Login() {
    return <div className="formArea">
        <Form action="/login" method="post" className="userForm">
        <input type="text" name="username" placeholder="username"  />
        <input type="password" name="password" placeholder="password" />
        <button>Login</button>
    </Form>
    </div>
}