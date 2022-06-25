import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shelf from "./shelf";
import * as BooksAPI from "../BooksAPI";
import { BooksList } from "./booksContext";

function Home() {
    const books = useContext(BooksList);
    return (
        <>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf shelfName='currentlyReading' booksList={books.allBooks} title="Currently Reading" />
                        <Shelf shelfName='wantToRead' booksList={books.allBooks} title="Want to Read" />
                        <Shelf shelfName='read' booksList={books.allBooks} title="Read" />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">About</Link>
                </div>
            </div>
        </>
    );

}

export default Home;