import {Form} from "react-router-dom"
import Header from "../components/Header"


export default function Login() {
    return <>
    <Header />
        <div className="formArea">
            
            <Form action="/login" method="post" className="userForm">
                <h3>Login</h3>
                <input type="text" name="username" placeholder="username"  />
                <input type="password" name="password" placeholder="password" />
                <button>Login</button>
            </Form>
        </div>
    </>
}