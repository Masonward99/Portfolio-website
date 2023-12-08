function Header(){
    return (
      <header className="App-header">
        <a href="#top">
          <div className="Header-Title">
            <p>Mason Ward</p>
          </div>     
        </a>
        <ul>
          <li className="Header-Item">About</li>
          <li className="Header-Item">Projects</li>
          <li className="Header-Item">
            <a href="#App-Footer" className="Header-Item">
              <div>Contact</div>
            </a>
          </li>
          
        </ul>
      </header>
    );
}

export default Header