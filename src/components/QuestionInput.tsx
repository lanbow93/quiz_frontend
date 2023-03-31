import { ChangeEvent, ChangeEventHandler, useState } from "react"
import { IQuestionInputProps } from "../customInterfaces"



export default function QuestionInput(props: IQuestionInputProps ){
    
    const [dataArray, setDataArray] = useState(props.questionArray)

    function handleChange(newValue: string , index: number) {
        const newDataArray: Array<string> = dataArray
        console.log(newDataArray)
        newDataArray[index] = newValue
        setDataArray([...newDataArray])
    }

    console.log({dataArray})
    return <>
        <label htmlFor="question" className="emphasis">Question: {props.index + 1}</label>
        <input type="text" name={`question:${props.index}`} value={dataArray[0]} onChange={(event) => handleChange(event.target.value, 0)} />

        <label htmlFor={`correctanswer:${props.index}`}>Correct Answer:</label>
        <input type="text" name={`correctanswer:${props.index}`} value={dataArray[1]} onChange={(event) => handleChange(event.target.value, 1)}  />

        <label htmlFor={`incorrectanswer1:${props.index}`}>Incorrect Answer 1:</label>
        <input type="text" name={`incorrectanswer1:${props.index}`} value={dataArray[2]} onChange={(event) => handleChange(event.target.value, 2)}  />

        <label htmlFor={`incorrectanswer2:${props.index}`}>Incorrect Answer 2:</label>
        <input type="text" name={`incorrectanswer2:${props.index}`} value={dataArray[3]} onChange={(event) => handleChange(event.target.value, 3)}  />

        <label htmlFor={`incorrectanswer3:${props.index}`}>Incorrect Answer 3:</label>
        <input type="text" name={`incorrectanswer3:${props.index}`} value={dataArray[4]} onChange={(event) => handleChange(event.target.value, 4)}  />


     </>
}