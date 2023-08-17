

function Options({setChooseCategory}) { 

    function handleChooseCategory(e) { 
        setChooseCategory(e.target.value)
    }

    return ( 
        <div>
            
            <select onChange={handleChooseCategory} >
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