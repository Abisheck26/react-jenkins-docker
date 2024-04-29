import logo from './logo.svg';
import './App.css';

function App() {
  // Create a square element on the right side
  const squareRight = document.createElement('div');
  squareRight.className = 'square';

  // Apply styles to the square on the right side
  squareRight.style.width = '100px';
  squareRight.style.height = '100px';
  squareRight.style.backgroundColor = 'white';
  squareRight.style.position = 'fixed';
  squareRight.style.top = '350px'; 
  squareRight.style.right = '500px';

  // Append the square to the body of the document
  document.body.appendChild(squareRight);

  // Create a square element on the left side
  const squareLeft = document.createElement('div');
  squareLeft.className = 'square';

  // Apply styles to the square on the left side
  squareLeft.style.width = '100px';
  squareLeft.style.height = '100px';
  squareLeft.style.backgroundColor = 'white';
  squareLeft.style.position = 'fixed';
  squareLeft.style.top = '350px'; 
  squareLeft.style.left = '500px'; // Changed to left side

  // Append the square to the body of the document
  document.body.appendChild(squareLeft);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="squareContainer"> {/* Container for squares and logo */}
          {/* Squares will be appended here */}
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
