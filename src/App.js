import React from 'react';
import Header from "./components/views/header/header";
import "./style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/views/footer/footer";
import AllBooksPage from "./components/views/allBooksPage/AllBooksPage";

function App() {
  return (
  <>
    <Header/>
    <AllBooksPage/>
    <Footer/>
  </>
  );
}

export default App;
