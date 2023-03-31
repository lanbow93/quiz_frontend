import { IQuestionProps } from "../customInterfaces"

export default function QuestionCard(props: IQuestionProps){
    console.log(props.question)
    const answers = [...props.question]
    answers.shift()
    return <div className="questionCard">
        <p className="question bold">{props.question[0]}</p>
        {props.answerSelection[props.currentIndex] === answers[0] ? <p className="answer selected" onClick={() => props.setAnswerSelection(answers[0])}><span className="bold">A:</span> {answers[0]}</p> : <p className="answer" onClick={() => props.setAnswerSelection(answers[0])}><span className="bold">A:</span> {answers[0]}</p>}
        {props.answerSelection[props.currentIndex] === answers[1] ? <p className="answer selected" onClick={() => props.setAnswerSelection(answers[1])}><span className="bold">B:</span> {answers[1]}</p> : <p className="answer" onClick={() => props.setAnswerSelection(answers[1])}><span className="bold">B:</span> {answers[1]}</p>}
        {props.answerSelection[props.currentIndex] === answers[2] ? <p className="answer selected" onClick={() => props.setAnswerSelection(answers[2])}><span className="bold">C:</span> {answers[2]}</p> : <p className="answer" onClick={() => props.setAnswerSelection(answers[2])}><span className="bold">C:</span> {answers[2]}</p>}
        {props.answerSelection[props.currentIndex] === answers[3] ? <p className="answer selected" onClick={() => props.setAnswerSelection(answers[3])}><span className="bold">D:</span> {answers[3]}</p> : <p className="answer" onClick={() => props.setAnswerSelection(answers[3])}><span className="bold">D:</span> {answers[3]}</p>}
    </div>

}