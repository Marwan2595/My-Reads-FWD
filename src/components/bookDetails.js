import { useEffect ,useState} from "react";
import { Link ,useParams } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import "./bookDetails.css"
function BookDetails(props) {
  const bookID = useParams();
  console.log("Book ID: ",bookID);
  const [bookOBJ , setBookOBJ] = useState({});
  useEffect(() => {
    BooksAPI.get(bookID.id).then((book) => {
      setBookOBJ(bookOBJ => bookOBJ = {...bookOBJ,...book});

    });
  }, [bookID.id]);
    console.log("Book : ",bookOBJ);
let image = bookOBJ.imageLinks !== null && bookOBJ.imageLinks !== undefined ? bookOBJ.imageLinks.thumbnail : "";
return(
    <>
        <Link className="close-search" to="/">Close</Link>
        <div className="detailsWrapper">
          <div className="bookImg">
            <img src={image} alt="Book" width="320px" height="400px"/>
          </div>
          <div className="bookDetails">
            <h1 >{bookOBJ.title}</h1>
            <h2>by {bookOBJ.authors != null ? bookOBJ.authors.join(" and ") : ""}</h2>
            <div className="bookInfo">
              <h5 className="bookDetail">Page Count : {bookOBJ.pageCount}</h5>
              <h5 className="bookDetail">Publish Date : {bookOBJ.publishedDate}</h5>
              <h5 className="bookDetail">Publisher : {bookOBJ.publisher}</h5>
              <h5 className="bookDetail">Category : {bookOBJ.categories != null ? bookOBJ.categories.join(",") : ""}</h5>
            </div>
            <p>{bookOBJ.description}</p>
          </div>
        </div>
    </>
);

}

export default BookDetails;
