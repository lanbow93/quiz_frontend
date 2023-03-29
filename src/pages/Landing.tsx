import Header from "../components/Header";
import { Link } from "react-router-dom";
export default function Landing() {
    return <>
        <Header />
        <div className="landing">
            <h2>Welcome to Quiz Wizard - the ultimate destination for testing knowledge and gathering survey results!</h2>
            <Link to="/signup"><button>Get Started!</button></Link>
        </div>
    </>

}