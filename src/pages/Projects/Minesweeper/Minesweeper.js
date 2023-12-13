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
            <LinkButtons codeLink={"https://github.com/Masonward99/Minesweeper"} hostedLink={'https://minesweeper-mw.netlify.app/'}/>
            <h4>Features</h4>
            <ul>
                <li>Recreation of the classic video game Minesweeper</li>
                <li>Three difficulties available; changing the size of the grid and the number of mines that should be avoided</li>
                <li>Timer to show how long a succesful attempt has taken</li>
                <li>Flags can be added by pushing the flag button or by right clicking on the cell</li>
                <li>The first click can never be a mine</li>
            </ul>
            <h4>Tech stack</h4>
            <div className='techContainer'>
                <div>
                    <img src={js} alt='JavaScript logo' />
                </div>
                <div>
                    <img src={html} alt='HTML logo' />
                </div>
                <div>
                    <img src={css} alt='CSS logo'/>
                </div>
            </div>
      </section>
    );
}
export default Minesweeper