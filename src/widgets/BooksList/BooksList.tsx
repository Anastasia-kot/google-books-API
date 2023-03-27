import styles from "./BooksList.module.css";
import { FC } from "react";
import Preloader from "../../shared/Preloader/Preloader";
import store from "../../shared/store";

import { observer } from "mobx-react";
import { BookCard } from "../../entities/BookCard/BookCard";

export const BooksList: FC = observer(() => {

  const { booksTotalCount, books } = store;
  
  return (
    <div className={styles.mainContentWrapper}>
      <div className={styles.totalBookCount}>
        Found {booksTotalCount ? booksTotalCount : " some "} results
      </div>

      <ul className={styles.bookCardsWrapper}>
        {books.map((book, index) => (
          <BookCard volumeInfo={book} key={index} index={index} />
        ))}
      </ul>

      {store.isFetching && <Preloader />}
    </div>
  );
});
 