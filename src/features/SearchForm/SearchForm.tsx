import   { FC } from "react";
import styles from "./SearchForm.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { SearchParameters } from "../../shared/types";
import { observer } from "mobx-react";
import store from './../../shared/store/index'

 
export const SearchForm: FC = observer(() => {
  const { register, handleSubmit } = useForm<SearchParameters>();
   const onSubmit: SubmitHandler<SearchParameters> = (data) => {
     store.setSearchParameters(data);
     store.getBooks();

  };

  return  (
  <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.searchInputGroup}>
        <input
          className={styles.searchInput}
          placeholder="Type key word for search"
          type="text"
          defaultValue=""
          {...register("keyWord")}
        />
        <button className={styles.searchLoupButton} type="submit">
          🔎
        </button>
      </div>

      <div className={styles.searchParametersGroup}>
        <label className={styles.searchParameter}>
          Categories
          <select
            className={styles.select}
            defaultValue="all"
            {...register("category")}
          >
            <option value="all">All</option>
            <option value="art">Art</option>
            <option value="biography">Biography</option>
            <option value="computers">Computers</option>
            <option value="history">History</option>
            <option value="medical">Medical</option>
            <option value="poetry">Poetry</option>
          </select>
        </label>

        <label className={styles.searchParameter}>
          Sorting by
          <select
            className={styles.select}
            defaultValue="relevance"
            {...register("sorting")}
          >
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
          </select>
        </label>
      </div>
    </form>
  )
})
