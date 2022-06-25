import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "./components/search";
import Home from "./components/home";
import BookDetails from "./components/bookDetails"
import * as BooksAPI from "./BooksAPI";

import { BooksList } from "./components/booksContext";

function App() {
  let [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setAllBooks(books);
    });
  }, []);

  return (
    <div className="app">
      <BooksList.Provider value={{ allBooks, setAllBooks }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="book/:id" element={<BookDetails />} />
          <Route path="search" element={<Search />} />
        </Routes>
      </BooksList.Provider>
    </div>
  );
}

export default App;
