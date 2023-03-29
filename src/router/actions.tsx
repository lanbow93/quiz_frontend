import url from "./url"
import { redirect } from "react-router-dom"


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

