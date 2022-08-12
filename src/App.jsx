import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/views/header/header';
import Footer from './components/views/footer/footer';
import AllBooksPage from './pages/allBooksPage/allBooksPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookPage from './pages/bookPage/bookPage';
import ErrorPage from './pages/errorPage/errorPage';
import SignUp from './components/Forms/signup/signUp';
import LogIn from './components/Forms/login/logIn';
import OrderPage from './pages/orderPage/orderPage';
import { ErrorBoundary } from './components/errorBoundary/errorBoundary';
import UserForm from './components/Forms/user/userForm';
import History from './pages/history/history';
import SearchPage from './pages/search/searchPage';
import './style.scss';

function App() {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<AllBooksPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/history" element={<History />} />
          <Route path="/details/:bookID" element={<BookPage />} />
          <Route path="/search/:searchString" element={<SearchPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/user" element={<UserForm />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </>
  );
}

export default App;
