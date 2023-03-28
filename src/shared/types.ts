export interface Book {
  title: string;
  subtitle: string;
  authors: string[];
  categories: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
}
export interface SearchParameters {
  keyWord: string;
  category: string;
  sorting: string;
}
 
