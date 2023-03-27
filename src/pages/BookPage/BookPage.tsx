import styles from "./BookPage.module.css";
import { FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Preloader from "../../shared/Preloader/Preloader";
import Header from "../../widgets/Header/Header";
import { observer } from "mobx-react";
import { Book } from "../../shared/types";
import store from "./../../shared/store/index";

 
 

const BookPage: FC = observer(() => {
  const navigate = useNavigate();
  let URLbookId = useParams().id;
  const { books } = store;
  const [book, setBook] = useState<null | Book>(null);

  useEffect(() => {
 
    if (!URLbookId || !books[+URLbookId]) {
      navigate("/");
    } else {
      setBook(books[+URLbookId]);
     }
  }, [URLbookId, books, navigate]);

  return (
    <>
      {!book ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <div className={styles.bookPageWrapper}>
            <div className={styles.bookCoverWrapper}>
              <img
                className={styles.bookCover}
                alt="Book cover"
                src={
                  book?.imageLinks?.thumbnail
                    ? book.imageLinks.thumbnail
                    : "https://img.freepik.com/premium-vector/blank-book-cover_134452-8.jpg"
                }
              />
            </div>

            <div className={styles.bookInfoWrapper}>
              <div className={styles.bookCategory}>
                {book?.categories?.length > 0 && book?.categories.join("/ ")}
              </div>

              <div className={styles.bookTitle}>
                {book?.authors?.length > 0 && book?.authors .join(", ")}
                {book?.authors?.length > 0 && book?.title && "  -  "}
                {book?.title ? book?.title : ""}
              </div>

              <div className={styles.bookPublisher}>
                {book.publisher ? book.publisher : "no publisher"}
              </div>

              <div className={styles.bookDescription}>
                {book?.description ? book.description : "no description"}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
   
})

export default BookPage;
