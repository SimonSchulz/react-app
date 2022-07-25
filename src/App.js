import React from 'react';
import Header from "./components/Views/header";
import Footer from "./components/Views/footer";
import Item from "./components/Views/card";
import Loading from "./components/Views/spinner";

function App() {
  return (
  <>
    <Header/>
    <Item/>
    <Loading/>
    <Footer/>
  </>
  );
}

export default App;
