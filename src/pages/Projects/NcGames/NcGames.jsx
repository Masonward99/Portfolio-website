import pic from '../../../assets/nc_games/nc_games.png'
import react from '../../../assets/React.png'
import psql from '../../../assets/PSQL.png'
import js from '../../../assets/Javascript.png'
import jest from '../../../assets/Jest.png'
import LinkButtons from '../components/LinkButtons'
function NcGames() {
    
    return (
      <section id="NcGames">
        <h3>Board Games Review Website</h3>
        <img src={pic} alt="ncGames homepage" />
        <div className="doubleLinks">
          <div>
            <h4>Frontend</h4>
            <LinkButtons
              hostedLink={"https://nc-games-mw.netlify.app/"}
              codeLink={"https://github.com/Masonward99/FE_nc_games"}
            />
          </div>
          <div>
            <h4>Backend</h4>
            <LinkButtons
              codeLink={"https://github.com/Masonward99/nc_games"}
              hostedLink={"https://nc-games-83l3.onrender.com/api"}
            />
          </div>
        </div>
        <p>
          <i>
            Due to how this project is hosted, it may take a bit longer than
            usual to load when first opened.
          </i>
        </p>
        <p>
          This a website that allows users to post reviews of board games and
          comment on reviews that other users have posted. This project utilises
          Firebase authentication to allow users to create accounts.
        </p>
        <h4>Features</h4>
        <ul>
          <li>
            Board game review website created using React for the frontend
          </li>
          <li>Backend was created using test driven development</li>
          <li>
            Uses firebase authentication to allow users to login or signup
          </li>
          <li>
            Allows the user to upload a profile image; which is stored using
            firebase storage
          </li>
        </ul>
        <h4>Tech Stack</h4>
        <div className="techContainer">
          <div>
            <img src={react} alt="React logo" />
          </div>
          <div>
            <img src={js} alt="JavaScript logo" />
          </div>
          <div>
            <img src={psql} alt="PSQL logo" />
          </div>
          <div>
            <img src={jest} alt="Jest logo" />
          </div>
        </div>
      </section>
    );
}
export default NcGames