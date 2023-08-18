import { useNavigate, } from "react-router-dom";

function Options({setChooseCategory}) { 

    const navigate = useNavigate() 

    function handleChooseCategory(e) { 
        setChooseCategory(e.target.value)
    }

    return ( 
        <div className="options">
            
            <select onChange={handleChooseCategory} navigate="/">
                <option value="">--Choose Category--</option>
                <option value="General Knowledge">General Knowledge</option>
                <option value="Cartoon and Animation">Cartoon and Animation</option>
                <option value="Japanese Anime & Manga">Japanese Anime & Manga</option>
                <option value="Celebrity">Celebrity</option>
                <option value="Geography">Geography</option>
            </select>
        </div>
    )
}

export default Options;