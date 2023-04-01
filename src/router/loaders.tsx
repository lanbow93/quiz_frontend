import url from "./url";

export const quizIndexLoader = async () => {
    try {
        return await fetch(url + "/quiz", {
            method: "GET",
            credentials: "include"
        })
    } catch (error) {
        return error
    }
}

export const publicQuizzesLoader = async () => {
    try {
        return await fetch(url + "/public", {
            method: "GET",
            credentials: "include"
        })
    } catch (error) {
        return error
    }
}

export const quizLoader = async ({params}: any) => {
    try {
        return await fetch(url + "/public/access/" + params.id, {
            method: "GET",
            credentials: "include"
        })
    } catch (error) {
        return error
    }
}

export const submissionLoader = async ({params}: any) => {
    try {
        return await fetch(url + "/user/index/" + params.id, {
            method: "GET",
            credentials: "include"
        })
    } catch (error) {
        return error
    }
}

