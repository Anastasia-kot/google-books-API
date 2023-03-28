import { makeAutoObservable } from "mobx";
import { Book, GoogleArgsType, SearchParameters } from "../types";
import { BookWithMetaData, getBooksByAPI } from "../API/api";
import axios from "axios";

class BooksStore {
  books = [] as Book[];
  booksTotalCount = null as number | null;
  isFetching = false as boolean;
  searchParameters = {
    keyWord: "ReactJS",
    category: "",
    sorting: "newest",
  } as SearchParameters;
  currentPage = 0 as number;

  constructor() {
    makeAutoObservable(this);
  }

  setSearchParameters(payload: SearchParameters) {
    this.searchParameters = payload;
  }

  async getBooks(GoogleArgs: GoogleArgsType) {


    try {
      this.isFetching = true;

      const { keyWord, category, sorting, currentPage } = GoogleArgs;
      const { data } = await getBooksByAPI(keyWord,category,sorting,currentPage);

      this.books = data?.items?.map((i: BookWithMetaData) => i.volumeInfo);
      this.booksTotalCount = data.totalItems;
      this.currentPage = 0;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
      } else {
        console.log("unexpected error: ", error);
      }
    } finally {
      this.isFetching = false;
    }

  }

  async loadMoreBooks(GoogleArgs: GoogleArgsType) {
   try {
     this.isFetching = true;

     const { keyWord, category, sorting, currentPage } = GoogleArgs;
     const {data} = await getBooksByAPI(keyWord, category, sorting, currentPage);
    
       this.books.push(...data.items.map((i: BookWithMetaData) => i.volumeInfo));
       this.currentPage = this.currentPage + 1;
    } catch (error) {
     if (axios.isAxiosError(error)) {
       console.log("error message: ", error.message);
     } else {
       console.log("unexpected error: ", error);
     }
   } finally {
     this.isFetching = false;
   }



  

 ;
  }
}

const store = new BooksStore();

export default store;
