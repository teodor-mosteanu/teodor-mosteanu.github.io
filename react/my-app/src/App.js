import React from 'react';
import Main from "./Main"
import Footer from "./Footer"
import Nav from "./components/Nav"
import Greeting from "./Tracing"


function App() {
  return (
    <div className="styled">
      <Nav/>
      <Main/>
      <Footer/>
      <Greeting/>
    </div>
  );
}

export default App;
