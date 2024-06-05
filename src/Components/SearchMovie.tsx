import { useDatabaseHook } from "../Hooks/useDatabaseHook";
import "./SearchMovie.css"
import { Trending } from "./Trending";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useSearchHook } from "../Hooks/UseSearchHook";
import { MovieCard } from "./MovieCard";
import { ChangeEvent, useCallback, useRef } from "react";
import { Header } from "./Header";

export const SearchMovie =()=>{

    const {  movieCategory } = useDatabaseHook();
    const {searchMovie, setSearchMovie, movieSuggestionArray} = useSearchHook();
    
    // const handleSearch = (e: ChangeEvent<HTMLInputElement>)=>{
    //     console.log("e.target.value", e.target.value)
    //     setSearchMovie(prevSearchMovie => e.target.value);

    //  } 
 
    // const useDebouncedCallback = (callbackFn: (event:ChangeEvent<HTMLInputElement>)=>void, delay: number)=>{
    //     const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
    //     return (event: ChangeEvent<HTMLInputElement>) => {
    //         console.log(Event)
    //         if (timer.current) {
    //             clearTimeout(timer.current);
    //         }
    //         timer.current = setTimeout(()=>{
    //             console.log("event in calllback is", event)
    //             callbackFn(event);
    //         }, delay)
    //     }
    // }

    // const debouncedOnChange = useDebouncedCallback(handleSearch, 1000)

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchMovie(value);
    };


    return (
        <div>
                    <Header></Header>
        <div className="search-display-movie">
        <div className="search-container">
            <div className="search-icon-container"><FontAwesomeIcon className="icon" icon={faSearch}></FontAwesomeIcon></div>
            <div className="search-input">
                <input type="text" placeholder="Movies, shows and more" value={searchMovie} onChange={handleSearch}></input>
                <div className = {searchMovie.length ? "cross-icon-container visible": "cross-icon-container" } onClick={() => setSearchMovie("") }><FontAwesomeIcon className="icon" icon={faTimes}></FontAwesomeIcon></div>
            </div>
        </div>
        {searchMovie.length? <MovieCard movieCategory= {movieSuggestionArray}></MovieCard> : <Trending movieCategory={movieCategory.trending}/>}
        </div>
        </div>
    )
}