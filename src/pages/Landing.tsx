import Header from "../components/Header";
import { Link } from "react-router-dom";
export default function Landing() {
    return <>
        <Header />
        <div className="landing">
            <div className="logo">
                <img src="https://cdn-icons-png.flaticon.com/512/477/477154.png" alt="Wizard Logo" />
            </div>
            <h2>Welcome to Quiz Wizard - The ultimate destination for testing knowledge and gathering survey results!</h2>
            <Link to="/signup"><button>Get Started!</button></Link>
        </div>
    </>

}
