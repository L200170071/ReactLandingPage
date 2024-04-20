import React from 'react';
import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Pagesatu from "./components/Pagesatu"
import Accordion from "./components/Accordion"
import Footer from "./components/Footer"
import "./style/LandingPage.css"

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Pagesatu />
        <Accordion />
        <Footer />
      </div>
    </div>
  );
}

export default App;