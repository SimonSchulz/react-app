import React from 'react';
import Header from "./components/views/header/header";
import "./style.scss"
import Footer from "./components/views/footer/footer";
import AllBooksPage from "./pages/allBooksPage/AllBooksPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import BookPage from "./pages/bookPage/bookPage";
import ErrorPage from "./pages/errorPage/errorPage";


function App() {
  return (
      <>
          <Header/>
          <Routes>
            <Route path='/' element={<AllBooksPage/>} />
            <Route path='/:bookID' element={<BookPage/>} />
             <Route path='/*' element={<ErrorPage/>} />
          </Routes>
          <Footer/>
      </>
);
}

export default App;
