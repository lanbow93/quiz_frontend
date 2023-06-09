import url from "./url"
import { Params, redirect } from "react-router-dom"


export const signupAction = async({request }: any) => {
    const formData = await request.formData()
    const user = {
        name: formData.get("name"),
        username: formData.get("username"),
        password: formData.get("password")
    }

    const response = await fetch(url + "/auth/signup", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    } )

    if (response.status === 400) {
        alert("Failed Signup")
        return redirect("/signup")
    }

    return redirect("/login")
}

export const loginAction = async ({request}: any) => {

    const formData = await request.formData()
    const user = {
        username: formData.get("username"),
        password: formData.get("password")
    }

    const response = await fetch(url+ "/auth/login", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(user)
    } )

    if (response.status === 400) {
        alert("Failed Login")
        return redirect("/login")
    }

    return redirect("/dashboard")
    
}

export const verifyUserAction = async ({request}: any) => {

    const formData = await request.formData()
    const password = formData.get("password")
    const id = formData.get("id")

    const response = await fetch(url+ "/auth/" + id, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({password})
    } )

    if (response.status === 400) {
        alert("Failed Verification")
        return redirect(`/userquizzes`, )
    }

    return redirect(`/userquizzes/${id}`)
    
}

export const verifyPublicAction = async ({request}: any) => {

    const formData = await request.formData()
    const password = formData.get("password")
    const id = formData.get("id")

    const response = await fetch(url+ "/auth/" + id, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({password})
    } )

    if (response.status === 400) {
        alert("Failed Verification")
        return redirect(`/publicquizzes`)
    }

    return redirect(`/publicquizzes/${id}`)
    
}

export const logoutAction = async () => {
    const response = await fetch(url+ "/auth/logout", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include"
    } )

    if (response.status === 400) {
        alert("Failed To Logout")
        return redirect("/dashboard")
    }

    return redirect("/")
    
}


export const createQuiz = async ({request}: any) => {
    const formData = await request.formData();
    const isPublicCheck = formData.get("isPublic") ? true : false; 

    const quiz = {
        title: formData.get("title"),
        isPublic: isPublicCheck,
        password: formData.get("password"),
        questions: JSON.parse(formData.get("questions")),
    }
    const response = await fetch(url+ "/quiz", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(quiz)
    } )

    if (response.status === 400) {
        alert("Failed Creation")
        return redirect("/dashboard/create")
    }

    return redirect("/dashboard")
}

export const updateQuiz = async ({request, params}: any) => {
    const formData = await request.formData();
    const isPublicCheck = formData.get("isPublic") ? true : false; 

    const quiz = {
        title: formData.get("title"),
        isPublic: isPublicCheck,
        password: formData.get("password"),
        questions: JSON.parse(formData.get("questions")),
    }
    const response = await fetch(url+ "/quiz/" + params.id , {
        method: "put",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(quiz)
    } )

    if (response.status === 400) {
        alert("Failed To Update")
        return redirect(`/dashboard`)
    }

    return redirect(`/dashboard`)
}

export const deleteAction = async ({request, params}: any) => {
    const id = params.id

    const response = await fetch(url+ "/quiz/" + id, {
        method: "delete",
        credentials: "include"
    } )

    if (response.status === 400) {
        alert("Failed To Delete")
        return redirect("/dashboard")
    }

    return redirect("/dashboard")
}

export const submitUserQuiz = async ({request}: any) => {
    const formData = await request.formData(); 
    const answers = formData.get("answers")
    const questions = JSON.parse(formData.get("questions"))
    const newQuestion = [].concat(...questions,...answers)
    const submission = {
        quizID: formData.get("quizID"),
        grade: formData.get("grade"),
        name: formData.get("name"),
        questions: newQuestion,
    }
    const response = await fetch(url+ "/user", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(submission)
    } )

    if (response.status === 400) {
        alert("Failed Submission")
        return redirect("/userquizzes")
    }

    return redirect(`/userquizzes/results/${formData.get("grade")}`)
}

export const submitPublicQuiz = async ({request}: any) => {
    const formData = await request.formData(); 
    const answers = formData.get("answers")
    const questions = JSON.parse(formData.get("questions"))
    const newQuestion = [].concat(...questions,...answers)
    const submission = {
        quizID: formData.get("quizID"),
        grade: formData.get("grade"),
        name: formData.get("name"),
        questions: newQuestion,
    }
    const response = await fetch(url+ "/user", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(submission)
    } )

    if (response.status === 400) {
        alert("Failed Submission")
        return redirect("/publicquizzes")
    }

    return redirect(`/publicquizzes/results/${formData.get("grade")}`)
}