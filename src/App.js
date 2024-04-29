import logo from './logo.svg';
import './App.css';

function App() {
  // Create a square element
  const square = document.createElement('div');
  square.className = 'square';

  // Apply styles to the square
  square.style.width = '100px';
  square.style.height = '100px';
  square.style.backgroundColor = 'white';
  square.style.position = 'fixed';
  square.style.top = '300px'; 
  square.style.right = '300px';

  // Append the square to the body of the document
  document.body.appendChild(square);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="squareContainer"> {/* Container for square and logo */}
          {/* Square will be appended here */}
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
