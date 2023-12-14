function Hamburger({hamburgerOpen, setHamburgerOpen}) {
    function handleClick() {
        setHamburgerOpen(!hamburgerOpen)
    }
    return (
        <button id="hamburger" onClick={() => handleClick()}>
            <span></span>
            <span></span>
            <span></span>
            <div className={hamburgerOpen ? "visible" : null}>
            <div className="headingDiv">
                 <h3>Close</h3>   
            </div>
          <ul>
            <li className="Burger-Item">
                <a href="#About">                
                    <div>
                       <p>About</p> 
                    </div>
                </a>
            </li>
            <li className="Burger-Item">
                <a href="#Projects">
                    <div>
                        <p>Projects</p>
                    </div>
                </a>
            </li>
            <li className="Burger-Item">
                <a href="#App-Footer">
                    <div>
                        <p>Contact</p>
                    </div>
                </a>
            </li>
          </ul>
        </div>
      </button>
    );
}
export default Hamburger
