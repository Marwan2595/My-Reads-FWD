import { useContext, useState ,useEffect} from "react";
import { BooksList } from "./booksContext";
import * as BooksAPI from "../BooksAPI";
import PropTypes from 'prop-types';

function BookStatusList(props) {
    const [bookState, setBookState] = useState(props.bookOBJ.shelf)
    const books = useContext(BooksList);
    useEffect(() => {
        BooksAPI.get(props.bookOBJ.id).then((book) => {
            setBookState(book.shelf);
        });
    }, [props.bookOBJ.id]);
    const changeBookShelf = (event) => {
        let newBookStatus = event.target.value;
        BooksAPI.update(props.bookOBJ, newBookStatus).then((b) => {
            setBookState(newBookStatus);
            BooksAPI.getAll().then((newBooksList) => {
                books.setAllBooks(newBooksList);
            });
        });
    }
    return (<>
        <div  className="book-shelf-changer">
            <select  onChange={changeBookShelf} value={bookState}>
                <option  disabled>
                    Move to...
                </option>
                <option value="currentlyReading">
                    Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    </>);

}
BookStatusList.propTypes={
  bookOBJ: PropTypes.object.isRequired,
}
export default BookStatusList;
