import React, { useRef } from 'react';
import { useEffect, useState } from "react";
import { FaBeer } from 'react-icons/fa';


import './search.scss';

function Search() {

    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loadding, setLoading] = useState(false)

    const inputRef = useRef()

    // useEffect(() => {
    //     if(!debounce.trim()){
    //         setSearchResult([])
    //         return;
    //     }
        
    //     // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce) }&type=less`)
    //     //     .then(res => res.json())
    //     //     .then(res => {
    //     //         setSearchResult(res.data)
    //     //         setLoading(false)
    //     //     })
    //     //     .catch(() =>{
    //     //         setLoading(false)
    //     //     })

    //     const fetchApi = async () => {
    //         setLoading(true)
            
    //         const result = await searchServices.search(debounce)
    //         setSearchResult(result)
            
    //         setLoading(false)
    //     }

    //     fetchApi();

       
    // },[debounce])

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([])
        inputRef.current.focus();
    }

    const handleHideResult = () =>{
        setShowResult(false)
    }

    const handleChange = (e) =>{
        const searchVal = e.target.value
        if(!searchVal.startsWith(' ')){
            setSearchValue(searchVal)
        }
    }

    return (
            <div className="search">
                <input 
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search music" 
                    spellCheck={false}
                    onChange = {handleChange}
                    onFocus = {() => setShowResult(true)}
                />
                {!!searchValue && !loadding &&  (
                    <button className="clear" onClick={handleClear}>
                        Lets go for a <FaBeer />
                    </button>
                )}
                {/* {loadding && <FontAwesomeIcon icon={faSpinner} className='loading'/>}
                <button className="search-btn">
                    <FontAwesomeIcon icon={faSearch} onMouseDown={(e)=> e.preventDefault()} />
                </button> */}
            </div>
        );
}

export default Search;