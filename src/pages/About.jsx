import CV from '../MasonWardcv.pdf'
import CVLogo from '../assets/CV.png'
import github from '../assets/github-logo.png'
import email from '../assets/Email.png'

function About() {
    return (
      <section id="About">
        <h2>About Me</h2>
        <p>
          From the moment I created my first program in JavaScript I was hooked.
          For the next few days, I was completely addicted to learning about
          JavaScript, it was all that I could think about. I enjoyed it so much
          that I decided to do a fulltime bootcamp at the same time as I was
          completing my studies at university. I’m currently studying Computing
          and IT at the Open University part time.
        </p>
        <div className="aboutLinks">
          <div>
            <a href="https://github.com/Masonward99" target="blank">
              <img src={github} alt="github logo" className="logoImage" />
            </a>
            <p>GitHub</p>
          </div>
          <div>
            <a href="mailto: masonward99@hotmail.com">
              <img className="logoImage" alt="email" src={email} />
            </a>
            <p>Email</p>
          </div>
          <div>
            <a href={CV} target="blank">
              <img src={CVLogo} alt="Cv" className="logoImage" />
            </a>
            <p>CV</p>
          </div>
        </div>
      </section>
    );
}
export default About