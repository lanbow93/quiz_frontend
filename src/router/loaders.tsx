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