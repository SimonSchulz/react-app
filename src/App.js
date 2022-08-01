import React from 'react';
import Header from "./components/views/header/header";
import "./style.scss"
import Footer from "./components/views/footer/footer";
import AllBooksPage from "./pages/allBooksPage/allBooksPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import BookPage from "./pages/bookPage/bookPage";
import ErrorPage from "./pages/errorPage/errorPage";
import SignUp from "./components/Forms/signup/signUp";
import LogIn from "./components/Forms/login/logIn";
import OrderPage from "./pages/orderPage/orderPage";
import {ErrorBoundary} from "./components/errorBoundary/errorBoundary";



function App() {
  return (
      <>
          <Header/>
          <ErrorBoundary>
              <Routes>
                <Route path='/' element={<AllBooksPage/>} />
                <Route path='/order' element={<OrderPage/>} />
                <Route path='/:bookID' element={<BookPage/>} />
                <Route path='/signup' element={<SignUp/>} />
                <Route path='/login' element={<LogIn/>} />
                <Route path='/*' element={<ErrorPage/>} />
              </Routes>
           </ErrorBoundary>
          <Footer/>
      </>
);
}

export default App;
