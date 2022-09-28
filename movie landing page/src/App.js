import React from 'react';
import { useEffect,useState } from 'react'
import './App.css'
import searchIcon from './search.svg'
import MovieCard from './movieCard';

//API_KEY=605c93a9

const API_URL= 'http://www.omdbapi.com?apikey=605c93a9'


const App = () => {

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState([])

    //get movies by title
    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`)   
        const data = await response.json()

        setMovies(data.Search)
    }

    useEffect(()=>{
        searchMovies('Spiderman')
    },[])

    return (
        //this will be returned to the render function to render
        <div className="App"> 

            
            <h1>Movie Land</h1> 

            <div className ="search">
                <input placeholder="Search For Movies" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}></input>
                <img src={searchIcon} alt = 'poster not available' onClick={()=>searchMovies(searchTerm)}/>

            </div>

            {
                movies?.length > 0 ? (
                    <div className='container'>
                        {
                            movies.map((movie)=>(
                                <MovieCard movie = {movie}/>
                            ))
                        }
                    </div>
                ):(
                   <div className = "empty">
                    <h2>No Movies Found</h2>
                    </div>  
                )
            }

            
        </div>
        );

}

export default App; 