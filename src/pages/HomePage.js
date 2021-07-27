import React from 'react';
import Rotation from '../components/rotation';
import { useState, useEffect} from 'react';
import BookCollection from '../components/BookCollection';


const HomePage = () => {
  const [allMovies, setMovies]= useState([]);
  useEffect(() => {
      fetch("https://fake-book-db.herokuapp.com/books")
        .then((res) => res.json())
        .then((movies) => {
          setMovies(movies);
        });
    }, []);

    return (
        <div>
           <main>
            <Rotation/>
            <BookCollection title={"Titles you might interest in"} content={allMovies.filter((movie) => movie.genre_ids === 1)} />
           </main>
           
        </div>

    )
}

export default HomePage
