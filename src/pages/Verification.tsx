import { Form, Location, useLocation } from "react-router-dom"
import AuthHeader from "../components/AuthHeader"
import Header from "../components/Header"

export default function Verification(){
    const location: Location = useLocation()


    const correctLink: "userquizzes" | "publicquizzes" = location.state[1]
    return <>
    
        { correctLink === "userquizzes"? <AuthHeader /> : <Header />}
        <div className="verificationArea">
            <div className="formArea">
            
            <Form action={`/${correctLink}/verify`} method="post" className="userForm">
                <h3>Verification Page</h3>
                <p>Enter Quiz Password</p>
                <input type="password" name="password" placeholder="password" />
                <input type="hidden" name="id" value={location.state[0]} />
                <button>Verify</button>
            </Form>
        </div>
        </div>
    </>
}