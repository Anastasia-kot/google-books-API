import axios from "axios";
import { Book } from "../types";

const APIkey = "&key=AIzaSyCuPJFww6YGX7RzIF1sPyo7hDy9Qe09Uqw";

export type ApiDataType = {
  kind: string;
  totalItems: number;
  items: BookWithMetaData[];
};

export type BookWithMetaData = {
  volumeInfo: Book;
};

export async function getBooksByAPI(keyWord = "computers",category = "",sorting = "newest",currentPage = 0) {
  let categorySortingParameter = "";
  if (category && category !== "all") {
    categorySortingParameter = "+subject:" + category;
  }

  let currentPageParameter = "";
  if (currentPage) {
    currentPageParameter = "&startIndex=" + (currentPage + 1) * 30;
  }

  return await axios.get<ApiDataType>(
    `https://www.googleapis.com/books/v1/volumes?q=${keyWord}${categorySortingParameter}&orderBy=${sorting}&maxResults=30${currentPageParameter}${APIkey}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
}
