import styles from "./BookCard.module.css";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Book } from "../../shared/types";

 

export const BookCard: FC<{ volumeInfo: Book; index: number }> = ({
  volumeInfo,
  index,
}) => {
  const { title, imageLinks, categories, authors } = volumeInfo;
   return (
     <li className={styles.bookCard}>
       <div className={styles.bookCoverWrapper}>
         <Link to={"/bookPage/" + index}>
           {imageLinks?.smallThumbnail ? (
             <img
               className={styles.bookCover}
               alt="Book cover"
               src={imageLinks.smallThumbnail}
             />
           ) : (
             <span className={styles.bookCoverSpan}></span>
           )}
         </Link>
       </div>

       <div className={styles.bookCategory}>
         {categories?.length > 0 ? categories[0] : "no categories"}
       </div>

       <div className={styles.bookTitle}>
         <Link to={"/bookPage/" + index}>{title ? title : "no title"}</Link>
       </div>

       <div className={styles.bookAuthor}>
         {authors?.length > 0 && authors.join(", ")}
       </div>
     </li>
   );
};
