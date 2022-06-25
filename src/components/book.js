import BookStatusList from "./bookStatusList";
import PropTypes from 'prop-types';



function Book(props) {


    let image = props.bookOBJ.imageLinks != null && props.bookOBJ.imageLinks != undefined ? props.bookOBJ.imageLinks.thumbnail : "";
    return (<>
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                            'url(' + image + ')',
                    }}
                ></div>
                <BookStatusList bookOBJ={props.bookOBJ} />
            </div>
            <div className="book-title">{props.bookOBJ.title}</div>
            <div className="book-authors">{props.bookOBJ.authors != null ? props.bookOBJ.authors.join(" and ") : ""}</div>
        </div>
    </>);
}
Book.propTypes={
  bookOBJ: PropTypes.object.isRequired,
}
export default Book;
