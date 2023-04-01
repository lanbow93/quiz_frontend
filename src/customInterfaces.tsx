export interface QuizProp {
    headerProp: "public" | "user"
}

export interface IQuiz {
    username: string,
    title: string,
    isPublic: boolean,
    password?: string,
    questions: [[string]]
};

export interface ISubmission {
    _id: string,
    quizID: string,
    grade: number,
    name: string,
    questions: Array<Array<string>>,
    createdAt: string,
    updatedAt: string
}

export type ISubmissions = [ISubmission]

export interface IQuizMongo extends IQuiz {
    createdAt: string,
    updatedAt: string,
    _id: string
}

export interface IQuizMongoProps extends IQuizMongo {
    link: "userquizzes" | "publicquizzes" | "dashboard"
}

export type Quizzes = [IQuizMongo]

export interface IQuestionInputProps {
    questionArray: Array<string>,
    index: number,
    questionData: Array<Array<string>>,
    setQuestionFunction: Function
}

export type quizEventType = "previous" | "next"

export interface IQuestionProps {
    question: Array<string>,
    answerSelection: Array<string>,
    setAnswerSelection: Function,
    currentIndex: number,
}
export interface IQuestionPropsSolo {
    question: Array<string>,
    answerSelection: Array<string>,
    setAnswerSelection: Function,
    currentIndex: number,
    doTheThing: Function
}