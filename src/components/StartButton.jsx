import TriviaPage from "./TriviaPage";
// import Form from "./Form";
import Options from "./Options";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";


function StartButton({setChooseCategory}) { 

    const navigate = useNavigate()

    function handleStart() { 
        setChooseCategory={setChooseCategory}
        
    }
    return ( 
        <div>
            <button onClick={handleStart} >Start! </button>
            {/* Upon Button Click, Load <Options> and <TriviaPage> */}

            {/* <Options setChooseCategory={setChooseCategory} /> */}
        </div>
    )
}

export default StartButton
