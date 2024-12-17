import './App.css';
import "./assets/js/script";
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Work from './components/Work/Work';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
