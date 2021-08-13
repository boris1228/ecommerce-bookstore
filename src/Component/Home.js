import Hero from './Hero';
import BookCollection from './BookCollection';
import { useState, useEffect} from 'react'

 
//

function Home(){
    const [allMovies, setMovies]= useState([]);
    useEffect(() => {
        fetch("https://fake-book-db.herokuapp.com/books")
          .then((res) => res.json())
          .then((movies) => {
            setMovies(movies);
          });
      }, []);
    return (
        <>
            <Hero/>
            <BookCollection title={"New Release"} content={allMovies.filter((movie) => movie.genre_ids === 2)} />
            <BookCollection title={"Featured Books"} content={allMovies.filter((movie) => movie.genre_ids === 1)} />
           
        
        </>
    )
}

export default Home;