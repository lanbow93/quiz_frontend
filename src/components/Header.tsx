import { Link, Form } from "react-router-dom"
export default function Header(){
    return <header>
            <h1><span className="underline">Quiz Wizard</span></h1>
            <div className="navSelection">
            <Link to="/signup"><button>Sign Up</button></Link>
            <Link to="/login"><button>Login</button></Link>
            <Form><button>Logout</button></Form>
            </div>
    </header>
}