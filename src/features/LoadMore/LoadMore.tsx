import styles from "./LoadMore.module.css"; 
import store from "./../../shared/store/index";
import { observer } from "mobx-react";

export const LoadMore = observer (() => {

  const onClick = () => {

    store.loadMoreBooks();
  };
   return (
     <button
       className={styles.loadMoreButton}
       disabled={store.isFetching || store.books.length === store.booksTotalCount}
       onClick={onClick}
     >
       Load more
     </button>
   );
}
)

 