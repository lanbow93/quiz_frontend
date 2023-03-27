import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { loginAction, signupAction } from "./actions";

const router = createBrowserRouter(createRoutesFromElements(
    
    <Route path="/" element={<App/>}>
        <Route path="/login" element={<Login/>} action={loginAction} />
        <Route path="/signup" element={<Signup/>} action={signupAction}/>
        <Route path="/logout" />
        <Route path="/dashboard" >
            <Route path="" element={<h1>Index</h1>} />
            <Route path="/dashboard/create" element={<h1>Create</h1>} />
            <Route path="/dashboard/:id">
                <Route path="" element={<h1>Show</h1>} />
                <Route path="/dashboard/:id/update" element={<h1>Update</h1>} />
                <Route path="/dashboard/:id/delete" element={<h1>Delete</h1>} />
            </Route>
        </Route>
    </Route>
))

export default router