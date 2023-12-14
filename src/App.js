import './App.css';
import Footer from './pages/Footer';
import Header from './pages/Header';
import About from './pages/About';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='heroDiv'>
        <div>
          <h1>Mason Ward</h1>
          <h3>Junior developer</h3>
          <a href='#Projects'>See my work</a>
        </div>
      </div>
      <main className="App-Main">     
        <About />
        <Projects/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
