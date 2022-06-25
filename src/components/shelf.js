import Book from "./book";
import PropTypes from 'prop-types';


function Shelf(props) {
    const books = props.booksList;
    return (<>
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => {
                        if (book.shelf === props.shelfName) {
                            return <li key={book.id}>
                                <Book changeBookShelf={props.changeBookShelf} bookOBJ={book} />
                            </li>
                        }else {
                          return [];
                        }
                    })}


                </ol>
            </div>
        </div>
    </>);
}
Shelf.propTypes={
  booksList: PropTypes.array.isRequired,
}
export default Shelf;
