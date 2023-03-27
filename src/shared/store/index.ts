
import { makeAutoObservable } from "mobx";
import { Book, GoogleArgsType, SearchParameters } from "../types";
import { BookWithMetaData, getBooksByAPI } from "../API/api";

class BooksStore {
  books = [] as Book[];
  booksTotalCount = null as number | null;
  isFetching = false as boolean;
  searchParameters = {
    keyWord: "ReactJS",
    category: "",
    sorting: "newest",
  } as SearchParameters;
  currentPage = 0 as number ;

  constructor() {
    makeAutoObservable(this);
  }

  setSearchParameters(payload: SearchParameters) {
    this.searchParameters = payload;
  }

  async getBooks(GoogleArgs: GoogleArgsType) {
    this.isFetching = true;

    const { keyWord, category, sorting, currentPage } = GoogleArgs;
    const data = await getBooksByAPI(keyWord, category, sorting, currentPage);

     
    this.books = data?.items?.map((i: BookWithMetaData) => i.volumeInfo);
    this.booksTotalCount = data.totalItems;
    this.currentPage = 0;

    this.isFetching = false;
  }

  async loadMoreBooks(GoogleArgs: GoogleArgsType) {
    this.isFetching = true;

    const { keyWord, category, sorting, currentPage } = GoogleArgs;
    const data = await getBooksByAPI(keyWord, category, sorting, currentPage);

    this.books.push(...data.items.map((i: BookWithMetaData) => i.volumeInfo));
    this.currentPage = this.currentPage + 1;

    this.isFetching = false;
  }
}

const store = new BooksStore();

export default store;