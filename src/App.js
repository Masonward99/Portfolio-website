import './App.css';
import Footer from './pages/Footer';
import Header from './pages/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-Main">
        <h1>Mason Ward</h1>
        <section href="about">
          <h2>About</h2>
          <p>
            Before Northcoders I was a student, but during my studies I had
            realized that what I wasn’t passionate about what I was studying.
            So, I decided to look for other options for career paths and
            development was suggested to me by a friend. I started learning the
            pre course material for Northcoders and immediately realized this
            was what I wanted to do, I became addicted to solving the problems
            provided, constantly refactoring my solutions as I was learning. I
            enjoyed it so much I decided to start my bootcamp before I had
            finished university.
          </p>
          <a href="src/MasonWardCV.pdf" target="blank">
            <p>Cv</p>
          </a>
          <h3>Experience</h3>
          <ul>
            <li>
              <p>March-June 2023: Trainee Software Developer</p>
              <p>Northcoders</p>
            </li>
          </ul>
          <h3>Education</h3>
          <ul>
            <li>
              <p>2023-Present: Open University</p>
              <p>
                <i>Computing and IT (Software)</i>
              </p>
              <ul></ul>
            </li>
            <li>
              <p>2019-2023: University Of Manchester</p>
              <p>Finance</p>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
