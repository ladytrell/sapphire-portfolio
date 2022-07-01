import './App.css';
//import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  //const [currentPage, handlePageChange] = useState('About');
/*
  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    // YOUR CODE HERE
    //
    switch (currentPage) {
      case "About": return <About />;
      case "Contact": return <Contact />;    
      default: return <About />;
    }
  };

  */
  return (    
    <div> 
        <Header></Header>
        <About></About>
        <Portfolio></Portfolio>
        <Resume></Resume>
        <Contact></Contact>
    </div>
  );
}

export default App;
