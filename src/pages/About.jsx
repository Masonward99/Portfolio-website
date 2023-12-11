import CV from '../MasonWardCV.pdf'
import CVLogo from '../assets/CV.png'
import github from '../assets/github-logo.png'
import email from '../assets/Email.png'
function About() {
    return (
      <section id="about">
        <h2>About Me</h2>
        <p>
          Recent graduate from a software development bootcamp, currently
          studying Computing and IT at the open university.
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