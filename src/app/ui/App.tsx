import   { FC, lazy, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Preloader from "../../shared/Preloader/Preloader";
import "./App.css";
import "./index.css";
const BookPage = lazy(() => import("../../pages/BookPage/BookPage"));
const SearchResults = lazy(
  () => import("../../pages/SearchResults/SearchResults")
);


const App:FC =  ( ) => {
   return (
    <div className="App">
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<SearchResults />} />
          <Route path="/bookPage/:id" element={<BookPage />} />
          <Route
            path="*"
            element={
              <>
                <h1>404 not found</h1> 
                <Link to="/">Go Home</Link>
              </>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
} 

export default App;
