import { useState, useEffect, useRef } from "react"
import { createRangeArray } from "../utils/dataStructure"
import { quizzes } from "../content/quiz"
import { Explain } from "../components/ExplainCard";
import { toast } from 'react-toastify';
import { falseOptionStyle, selectOptionStyle, trueOptionStyle, neutralOptionSyle } from "../styles/Option";
export const Learn = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const content = quizzes[0].data
    const numQuestion = content.length
    const [selectedOptions, setSelectedOptions] = useState([])
    const [score, setScore] = useState(0)
    const [quizFinished, setQuizFinished] = useState(false)
    const [hasAnswer, setHasAnswer] = useState(false)
    const numOptions = content[currentQuestion].options.length
    const [correctAnswer, setCorrectAnswer] = useState(true)
    const handleOptionChange = (index) => {
        if (!hasAnswer) {

            const optionElement = document.getElementById(`option_${index}`)
            setSelectedOptions((prevSelectedOptions) => {
                if (prevSelectedOptions.includes(index)) {
                    // If the option is already selected, remove it
                    optionElement.className = neutralOptionSyle
                    return prevSelectedOptions.filter((option) => option !== index);
                } else {
                    // If the option is not selected, add it
                    optionElement.className = selectOptionStyle
                    return [...prevSelectedOptions, index];
                }
            })
        }
    }
    useEffect(() => {
        console.log("new chosen", selectedOptions)
    }, [selectedOptions])
    const handleAnswer = () => {

        if (!hasAnswer) {

            createRangeArray(0, numOptions).map((index) => {

                const optionElement = document.getElementById(`option_${index}`)
                // const inputElement = document.getElementById(`input_${index}`)
                if (selectedOptions.includes(index) && !content[currentQuestion].answers.includes(index)) {
                    optionElement.className = falseOptionStyle
                    setCorrectAnswer(false)

                }
                if (content[currentQuestion].answers.includes(index)) {
                    optionElement.className = trueOptionStyle
                }
                console.log("answer correct ?", correctAnswer)
            })
        }

        setHasAnswer(true)
    }
    const handleMoveNext = () => {
        if (currentQuestion == numQuestion - 1) {
            toast.success('You have finished all the question !')
            return
        }
        createRangeArray(0, numOptions).map((index) => {

            const optionElement = document.getElementById(`option_${index}`)
            optionElement.className = neutralOptionSyle
        })

        setCurrentQuestion(currentQuestion + 1)
        setSelectedOptions([])
        setCorrectAnswer(true)
        setHasAnswer(false)

    }
    const handleMovePrevious = () => {
        if (currentQuestion > 0) {
            createRangeArray(0, numOptions).map((index) => {

                const optionElement = document.getElementById(`option_${index}`)
                optionElement.className = neutralOptionSyle
            })

            setCurrentQuestion(currentQuestion - 1)
            setSelectedOptions([])
            setCorrectAnswer(true)
            setHasAnswer(false)
        }
    }

    return (
        <>
            <div className="flex justify-center">
                <div className="max-w-[70%] ">
                    <div className="px-5 py-5 rounded overflow-hidden shadow-lg">

                        <div>
                            <span><b>Question {currentQuestion + 1} :</b> {content[currentQuestion].quest}</span>
                        </div>
                        <form>
                            {content[currentQuestion].options.map((option, index) => {
                                const div_id = `option_${index}`
                                const input_id = `input_${index}`
                                return (

                                    <>
                                        <div key={index} id={div_id} className={neutralOptionSyle} onClick={() => handleOptionChange(index)}>
                                            <div className=" h-12 overflow-auto ">

                                            <label className="block mb-2 cursor-pointer" >

                                                {option}
                                            </label>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </form>


                    </div>
                    {
                        hasAnswer ? <>
                            <Explain explain={content[currentQuestion].explain} />

                        </> :
                            <></>
                    }
                    {
                        !hasAnswer ? <>

                            <div className="flex justify-center p-3">
                                <button type="button" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600" onClick={handleAnswer} >Answer</button>
                            </div>
                        </> : <>
                            <div className="flex justify-center gap-x-5">
                                    <div className="flex justify-center p-3">
                                        <button type="button" className="w-24 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-300" onClick={handleMovePrevious}>Previous</button>
                                </div>
                                <div className="flex justify-center p-3">
                                    <button type="button" className="w-24 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600" onClick={handleMoveNext}>Next</button>
                                </div>

                            </div>
                        </>
                    }

                </div>
            </div>
        </>
    )

}