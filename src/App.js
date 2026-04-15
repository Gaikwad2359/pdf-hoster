import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // This tells the browser to look for 'my-document.pdf' in the public folder
    // Replace 'my-document.pdf' with the actual name of your file
    window.location.replace('/pdf.pdf');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Opening PDF...</h1>
        <p>
          If the document doesn't load automatically, 
          <a
            className="App-link"
            href="/my-document.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here to open it
          </a>.
        </p>
      </header>
    </div>
  );
}

export default App;