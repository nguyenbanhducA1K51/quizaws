import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from "react";
import { Button_1 } from "./Button";
import { btnStyles } from "../styles/button";
import AWS_DVA_C02 from "../images/AWS_DVA_C02.jpeg"

export const TitleCard = (props) => {
    const navigate = useNavigate();
    const {quiz}=props
    const bg_url = quiz.bg_name
    const title = quiz.title
    const quiz_data = quiz.data
    const handleClick = () => {
        navigate('/learn', { replace: true, state: quiz_data });
    };

    const img_map = {
        AWS_DVA_C02:AWS_DVA_C02
    }

    return (

        <>

            <div className="m-6 max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={ img_map[bg_url]} alt="background"/>

                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{ title}</div>
                        {/* <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p> */}
                </div>
                <button className={btnStyles.blue} onClick={handleClick}>Learn </button>
                {/* <Button_1 text="Learn" click={ handleClick} /> */}
                    {/* <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div> */}
            </div>
        
        </>
    )

}