import {Form} from "react-router-dom"


export default function Signup() {
    return <Form action="/signup" method="post">
        <h3>Create New User</h3>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="username" placeholder="username"  />
        <input type="text" name="password" placeholder="password" />
        <button>Create User</button>
    </Form>
}