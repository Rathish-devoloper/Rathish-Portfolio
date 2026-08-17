

/*import { Link } from "react-router-dom";

function Navbar() {
 
 
    return(
      

      <nav className="navv">
         
       <div className="navbarr">
        <h2>MERN Developer</h2>
        </div>
        <div className="navbarr2">
          <Link to="/Home">
        <button>Home</button>
        </Link>
        <Link to="/About">
        <button>About</button>
        </Link>
        <Link to="/Contact">
        <button>Contact</button>
        </Link>
        
        </div>
        <div>
        <button 
        className="buttonn" onClick={()=>window.open("https://www.linkedin.com/in/rathish-s-bb92402a6/", "_blank")}>
           Linkedin
        </button>
        
        </div>
      </nav>
     
      
      
    )
}
export default Navbar; */


import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isBlack, setIsBlack] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const blackSection = document.querySelector(".black");

      if (!blackSection) {
        return;
      }

      const blackBottom =
        blackSection.offsetTop + blackSection.offsetHeight;

      if (window.scrollY >= blackBottom) {
        setIsBlack(true);
      } else {
        setIsBlack(false);
      }
    };

    
    handleScroll();

   
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={isBlack ? "navv nav-black" : "navv nav-white"}>

      {/* MERN Developer */}
      <div className="navbarr">
        <h2>MERN Developer</h2>
      </div>

      {/* Home About Contact */}
      <div className="navbarr2">

        <Link to="/Home">
          <button>Home</button>
        </Link>

        <Link to="/About">
          <button>About</button>
        </Link>

        <Link to="/Contact">
          <button>Contact</button>
        </Link>

      </div>

      {/* LinkedIn */}
      <div className="linkedin-container">
        <button
          className="buttonn"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/rathish-s-bb92402a6/",
              "_blank"
            )
          }
        >
          Linkedin
        </button>
      </div>

    </nav>
  );
}

export default Navbar;