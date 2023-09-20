import React from "react";
import Header from "./Header/Header";
import Features from "./Features/Features";
import FAQ from "./FAQ/FAQ";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Blog from "./Blog/Blog";
import BusinessModel from "./BM/BusinessModel";

function App() {
  return (
    <div className="App">
      <Header/>
      <Features/>
      <FAQ/>
      <BusinessModel/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
