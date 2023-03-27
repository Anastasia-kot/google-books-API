import axios from "axios";
import { Book } from "../types";

const APIkey = "&key=AIzaSyCuPJFww6YGX7RzIF1sPyo7hDy9Qe09Uqw";
 
export type ApiDataType = {
  kind: string;
  totalItems: number;
  items:  BookWithMetaData[];
};

export type BookWithMetaData = {
  volumeInfo: Book
};

export async function getBooksByAPI(
  keyWord = "computers",
  category = "",
  sorting = "newest",
  currentPage: number
) {
  let categorySortingParameter = "";
  if (category && category !== "all") {
    categorySortingParameter = "+subject:" + category;
  }

  let currentPageParameter = "";
  if (currentPage) {
    currentPageParameter = "&startIndex=" + (currentPage + 1) * 30;
  }

  try {

  const { data } = await axios.get<ApiDataType>(
    `https://www.googleapis.com/books/v1/volumes?q=${keyWord}${categorySortingParameter}&orderBy=${sorting}&maxResults=30${currentPageParameter}${APIkey}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
   return data;
  } 
   catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }

}
