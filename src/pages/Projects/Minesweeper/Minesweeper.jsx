import pic from '../../../assets/minesweeper.png'
import js from '../../../assets/Javascript.png'
import html from '../../../assets/Html.png'
import css from '../../../assets/css.png'
import LinkButtons from '../components/LinkButtons';
function Minesweeper() {
    return (
      <section id="minesweeper">
        <h3>Minesweeper</h3>
        <img src={pic} alt="Minesweeper" />
        <LinkButtons
          codeLink={"https://github.com/Masonward99/Minesweeper"}
          hostedLink={"https://minesweeper-mw.netlify.app/"}
        />
        <p>
          Based on the classic video game Minesweeper, this project utilises raw
          JavaScript and CSS. This app creates a grid and randomly places a
          specified number of mines inside it. The user wins when all the cells
          that do not contain a bomb are visible.
        </p>
        <p>
          This app manipulates DOM elements to create the grid and place the
          mines.
        </p>
        <h4>Features</h4>
        <ul>
          <li>
            Three difficulties levels. Each level has a different grid size and
            number of mines
          </li>
          <li>Timer to show how long a succesful attempt has taken</li>
          <li>
            Flags can be added by pressing the flag button or by right clicking
            on the cell
          </li>
          <li>
            The first cell clicked cannot contain a mine, allowing for gameplay
            that feels fairer
          </li>
        </ul>
        <h4>Tech stack</h4>
        <div className="techContainer">
          <div>
            <img src={js} alt="JavaScript logo" />
          </div>
          <div>
            <img src={html} alt="HTML logo" />
          </div>
          <div>
            <img src={css} alt="CSS logo" />
          </div>
        </div>
      </section>
    );
}
export default Minesweeper