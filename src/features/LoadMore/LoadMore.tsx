import styles from "./LoadMore.module.css"; 
import store from "./../../shared/store/index";
import { observer } from "mobx-react";

export const LoadMore = observer (() => {

  const onClick = () => {
    store.loadMoreBooks({
      ...store.searchParameters,
      currentPage: store.currentPage + 1,
    });
  };
   return (
     <button
       className={styles.loadMoreButton}
       disabled={
         (store.currentPage + 1) * 30 >=
           (store.booksTotalCount ? store.booksTotalCount : 0) ||
         store.isFetching
       }
       onClick={onClick}
     >
       Load more
     </button>
   );
}
)

 