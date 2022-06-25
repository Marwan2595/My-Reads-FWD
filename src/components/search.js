import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import * as BooksAPI from "../BooksAPI";
import Book from "./book";


function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchBooks, setSearchBooks] = useState([]);
    useEffect(() => {
        //console.log(searchQuery);
        if (searchQuery !== '') {
            BooksAPI.search(searchQuery, 15).then((books) => {
                if (Array.isArray(books)) {
                    setSearchBooks(books);
                } else {
                    setSearchBooks([]);
                }
            }).catch(() => setSearchBooks([]));
        } else {
            setSearchBooks([]);
        }
    }, [searchQuery]);
    function searchBody() {
        if (searchBooks.length === 0 || searchBooks === 'undefined' || !Array.isArray(searchBooks)) {
            return <h1 style={{marginTop:200 , fontSize : 50}}>No Books</h1>
        } else {
            return searchBooks.map((book) => {
                book['shelf'] = 'none';
                return <li key={book.id}>
                    <Book bookOBJ={book} />
                </li>
            })
        }
    }
    return (
        <>
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}

                        />
                    </div>

                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchBody()}
                    </ol>
                </div>
            </div>
        </>
    );
}

export default Search;
