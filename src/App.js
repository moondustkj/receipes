import { Link } from 'react-router-dom/dist';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src='/receipes/assets/title.png' alt='title' height={85}
        className='block m-auto title' />
      <div className='footer'>
        <h4>Lets cook good food</h4>
        <p>Сheck out the app and start cooking delicious meals!</p>
        <Link to="/page1" className='btn'>
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default App;
