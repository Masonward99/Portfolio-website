import { useState } from "react";
import Hamburger from "./hamburger";

function Header() {
  let [hamburgerOpen, setHamburgerOpen] = useState(false)
    return (
      <header >
        <div className="App-header">
        <a href="#top">
          <div className="Header-Title">
            <p>Mason Ward</p>
          </div>
        </a>
          <Hamburger hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen} />  
        <ul className="normalHeader">
          <li className="Header-Item">
            <a href="#About" className="Header-Item">
              <div>About</div>
            </a>
          </li>
          <li className="Header-Item">
            <a href="#Projects" className="Header-Item">
              <div>Projects</div>
            </a>
          </li>
          <li className="Header-Item">
            <a href="#App-Footer" className="Header-Item">
              <div>Contact</div>
            </a>
          </li>
          </ul>
        </div>
      </header>
    );
}

export default Header