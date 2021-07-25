import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Rotation from '../components/rotation';
import { useState, useEffect} from 'react';
import BookCollection from '../components/BookCollection';


const HomePage = () => {
    const [allBooks, setBooks]= useState([]);
    useEffect(() => {
        fetch("https://bookstore-fake-server.herokuapp.com/books")
          .then((res) => res.json())
          .then((books) => {
            setBooks(books);
          });
      }, []);

    return (
        <div>
           <main>
            <Rotation/>
            <BookCollection title={"Titles you might interest in"} content={allBooks.filter((books) => books.categories = "Computer Graphics")} />
           </main>
           
        </div>

    )
}

export default HomePage
