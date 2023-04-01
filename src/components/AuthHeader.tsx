import { Link, Form } from "react-router-dom"
export default function AuthHeader() {
    return <header>
            <h1><Link to="/"><span className="underline">Quiz Wizard</span></Link></h1>
            <div className="navSelection">
            <Link to="/userquizzes"><button>Quizzes</button></Link>
            <Link to="/dashboard"><button>Dashboard</button></Link>
            <Form action="/logout" method="post"><button>Logout</button></Form>
            </div>
    </header>
}