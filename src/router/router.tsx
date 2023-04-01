import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { createQuiz, loginAction, signupAction, updateQuiz } from "./actions";
import UserQuizIndex from "../pages/Dashboard";
import { publicQuizzesLoader, quizIndexLoader } from "./loaders";
import Landing from "../pages/Landing";
import Quizzes from "../pages/QuizzesBoard";
import QuizzesBoard from "../pages/QuizzesBoard";
import AdminQuizShow from "../pages/AdminQuizShow";
import QuizCreate from "../pages/QuizCreate";
import QuizEdit from "../pages/QuizEdit";

const router = createBrowserRouter(createRoutesFromElements(
    
    <Route path="/" element={<App/>}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login/>} action={loginAction} />
        <Route path="/signup" element={<Signup/>} action={signupAction}/>
        <Route path="/logout" />
        <Route path="/publicquizzes" element={<QuizzesBoard headerProp="public" />} loader={publicQuizzesLoader} />
        <Route path="/userquizzes" element={<QuizzesBoard headerProp="user" />}  loader={publicQuizzesLoader}/>
        <Route path="/dashboard" >
            <Route path="" element={<UserQuizIndex />} loader={quizIndexLoader}/>
            <Route path="/dashboard/create" element={<QuizCreate />} />
            <Route path="/dashboard/new" action={createQuiz} />
            <Route path="/dashboard/:id">
                <Route path="" element={<AdminQuizShow />} />
                <Route path="/dashboard/:id/submissions" element={<h1>Submissions</h1>} />
                <Route path="/dashboard/:id/edit" element={<QuizEdit />} />
                <Route path="/dashboard/:id/update" action={updateQuiz} />
                <Route path="/dashboard/:id/delete"  />

            </Route>
        </Route>
    </Route>
))

export default router