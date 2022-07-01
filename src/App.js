import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, handlePageChange] = useState();
  var showFooter = true;

  const renderPage = () => {
    switch (currentPage) {
      case "Portfolio": return <Portfolio />;
      case "Resume": showFooter = true; return <Resume />; 
      case "Contact": showFooter = false; return <Contact />;    
      default: showFooter = true; return <About />;
    }
  };
  
  return (    
    <div> 
      <Header currentPage={currentPage}  handlePageChange={handlePageChange} >
      </Header>
      { renderPage() }
      { showFooter &&
        <Footer />
      }
      
    </div>
  );
}

export default App;
