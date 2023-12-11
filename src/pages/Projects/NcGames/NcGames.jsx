import pic from '../../../assets/nc_games/nc_games.png'
import backend from '../../../assets/Database.png'
function NcGames() {
    
    return (
      <section id="NcGames">
        <h3>Nc Games</h3>
        <img src={pic} alt="ncGames homepage" />
        <div>
          <a href="https://github.com/Masonward99/FE_nc_games">Code</a>
          <a href="https://nc-games-mw.netlify.app/">Try it</a>
        </div>
        <h4>Frontend</h4>
        <h5>About</h5>
        <p>
          The goal of this project was to produce a board games review website
          using React.
        </p>
        <h5>Skills developed</h5>
        <p>React, ExpressJs, POSTGRESQL, Jest</p>
        <h5>Challenges</h5>
        <p></p>
        <h4>Backend</h4>
        <img src={backend} alt="entity relationship diagram for the database" />
        <div>
          <a href="https://github.com/Masonward99/nc_games">code</a>
          <a href="https://nc-games-83l3.onrender.com/api">Try it</a>
        </div>
      </section>
    );
}
export default NcGames