import React from "react";
import { TitleCard } from "@/components/TitleCard";
import { quizzes } from "../content/quiz";
export const Home = () => {
    return (
        <>
            {quizzes.map((quiz, index) => {


                return (

                    < TitleCard key={index} quiz={quiz} />
                )
            })
            }


        </>
    )
}