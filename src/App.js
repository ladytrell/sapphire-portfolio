import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [currentPage, handlePageChange] = useState();

  const renderPage = () => {
    switch (currentPage) {
      case "Portfolio": return <Portfolio />;
      case "Resume": return <Resume />; 
      case "Contact": return <Contact />;    
      default: return <About />;
    }
  };
  
  return (    
    <div> 
      <Header currentPage={currentPage}  handlePageChange={handlePageChange} >
      </Header>
      { renderPage() }
    </div>
  );
}

export default App;

/*
        <About></About>
        <Portfolio></Portfolio>
        <Resume></Resume>
        <Contact></Contact>
 */