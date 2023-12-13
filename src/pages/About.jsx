import CV from '../MasonWardCV.pdf'
import CVLogo from '../assets/CV.png'
import github from '../assets/github-logo.png'
import email from '../assets/Email.png'

function About() {
    return (
      <section id="About">
        <h2>About Me</h2>
        <p>
            Currently studying Computing and IT at the Open University.
            I previously attended a JavaScript bootcamp. Looking to begin my carrer in tech.
        </p>
            <div className='aboutLinks'>
                <div>
                    <a href="https://github.com/Masonward99" target='blank'>
                    <img src={github} alt='github logo' className='logoImage' />
                    </a>
                    <p>GitHub</p>
                </div>
                <div>
                    <a href='mailto: masonward99@hotmail.com'>
                        <img className='logoImage' alt='email' src={email} />
                    </a>
                        <p>Email</p>
                </div>
                <div>
                    <a href={CV} target='blank'>
                        <img src={CVLogo} alt='Cv' className='logoImage'/>
                    </a>
                    <p>CV</p>
                </div>
            </div>    
      </section>
    );
}
export default About