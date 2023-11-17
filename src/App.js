import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      < Navbar />
      <br />
      <div className="container">
        <div>< Header /></div>
        <br />
        <br />
        <div className='container-fluid row'>
          <div className="col ">
            < Card title="HUDSON HORNET" image="https://i.pinimg.com/736x/ee/9a/c3/ee9ac39aec315860964d982ed8abc891.jpg" /> </div>
          <div className="col">
            < Card title="HUDSON HORNET" image="https://i.pinimg.com/736x/ee/9a/c3/ee9ac39aec315860964d982ed8abc891.jpg" /> </div>
          <div className="col">
           < Card title="HUDSON HORNET" image="https://i.pinimg.com/736x/ee/9a/c3/ee9ac39aec315860964d982ed8abc891.jpg"/> </div>
           <div className="col">
           < Card title="HUDSON HORNET" image="https://i.pinimg.com/736x/ee/9a/c3/ee9ac39aec315860964d982ed8abc891.jpg"/> </div> 
        </div>
      </div>
      <br />
      <br />
      < Footer />
    </div>
  );
}
export default App;
