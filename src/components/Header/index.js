
import Nav from "../Nav";

function Header(props) {  
  
  return (        
    <header>
      <h1 className="title-box" id="header-title"><a href="/">Antrell Kent</a></h1>
      <Nav  currentPage={props.currentPage}  handlePageChange={props.handlePageChange} />
    </header>
  );
}

export default Header;