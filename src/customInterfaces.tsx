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

export interface IQuizMongo extends IQuiz {
    createdAt: string,
    updatedAt: string,
    _id: string
}

export type Quizzes = [IQuizMongo]

export interface IQuestionInputProps {
    questionArray: Array<string>,
    index: number,
    questionData: Array<Array<string>>,
    setQuestionFunction: Function
}