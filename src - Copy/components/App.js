import "../css/App.css";
import Header from "./Header";
import CarouselApp from "./CarouselApp";
import Cards from "./Cards";
import Chakra from "./Chakra";
import Review from "./Review";
import Footer from "./Footer";
import React from "react";
function App() {
  return (
    <div className="App">
      <Header />
      <CarouselApp />
      <Cards />
      <Chakra />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
