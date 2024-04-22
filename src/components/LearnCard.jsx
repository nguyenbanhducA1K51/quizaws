import { useState, useEffect } from "react"
import { createRangeArray } from "../utils/dataStructure"
export const LearnCard = (prop) => {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const content = prop.data
    const numQuestion=content.length
    const [selectedOptions, setSelectedOptions] = useState([])
    const [score, setScore] = useState[0]
    const [quizFinished, setQuizFinished] = useState(false)
    const [hasAnswer, setHasAnswer] = useState(false)
    const mode = null
    const numOptions = content[currentQuestion].options.length

    const [correctAnswer,setCorrectAnswer]=useState(true)
    const falseOptionStyle = "bg-red-500 m-2"
    const selectOptionStyle = "bg-gray-500 m-2"
    const trueOptionStyle="bg-green-500 m-2"
    const handleOptionChange = (index) => {
        const optionElement = document.getElementById(`option_${index}`)
        setSelectedOptions((prevSelectedOptions) => {
            if (prevSelectedOptions.includes(index)) {
                // If the option is already selected, remove it
                return prevSelectedOptions.filter((option) => option !== index);
            } else {
                // If the option is not selected, add it
                optionElement.className = selectOptionStyle
                return [...prevSelectedOptions, index];
            }
        })
    }
    const handleAnswer = () => {

      
        createRangeArray(0, numOptions).map((index) => {
            
            const optionElement = document.getElementById(`option_${index}`)
            if (optionElement.checked && !content[currentQuestion].answer.includes(index)){
                optionElement.className = falseOptionStyle
                setCorrectAnswer(false)
                
            }
            if (content[currentQuestion].answer.includes(index)) {
                optionElement.className = trueOptionStyle
            }
            console.log("answer correct ?", correctAnswer)
        })

setHasAnswer(true)
    }
    const handleMoveNext = () => {
        if (currentQuestion == numQuestion - 1) {
            alert("finised all")
        }
        
        setCurrentQuestion( currentQuestion+1)
        setCorrectAnswer(true)
        setHasAnswer(false)
        
    }
   
    return (
        <>
            <div className="rounded overflow-hidden shadow-lg">

                <div >

                    <span className="whitespace-normal">{content[currentQuestion].quest} </span>
                </div>
                <form>
                    {content[currentQuestion].options.map((option, index) => {
                        const id = `option_${index}`
                     
                        return (

                            <label key={index} className="block mb-2">
                                <input
                                    type="checkbox"
                                    name="options"
                                    value={index}
                                    id={id}
                                    checked={ selectedOptions.includes(index)}
                                    onChange={() => handleOptionChange(index)}
                                    className="mr-2"
                                />
                                {option}
                            </label>
                        )
                    })}
                </form>

                {
                    hasAnswer ? <>
                        <div className="">
                            <span> {content[currentQuestion.explain]}</span>
                        </div>
                    </> :
                        <></>
                }
                {
                    !hasAnswer ? <>

                        <div >
                            <button type="button" onClick={handleAnswer} >Answer</button>
                        </div>
                    </> : <>

                            <div>
                                <button type="button" onClick={handleMoveNext}>Next</button>
                        </div></>
                }


            </div>
        </>
    )

}