import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Facts from './components/Fact/Fact';
function App() {
  return (
    <div className="App">
      <header className="App-Head">
        <Navbar />
        <Facts />
        <Footer />
      </header>
    </div>
  );
}

export default App;
