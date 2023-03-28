import { FC, useEffect } from "react";
import store from "../../shared/store";
import { observer } from "mobx-react";

import Header from "../../widgets/Header/Header";
import { BooksList } from "../../widgets/BooksList/BooksList";
import { LoadMore } from "../../features/LoadMore/LoadMore";

const SearchResults: FC = observer(() => {

    useEffect(() => {
      store.setSearchParameters({
        keyWord: "ReactJS",
        category: "",
        sorting: "newest",
      });
    store.getBooks( );
  }, []);
  return (
    <>
      <Header />
      <BooksList />
      <LoadMore />
    </>
  );
});

export default SearchResults;
