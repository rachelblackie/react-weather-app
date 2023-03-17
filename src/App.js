import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Valencia" />
      <footer>
        <a
          href="https://github.com/rachelblackie/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by{" "}
        <a
          href="https://www.linkedin.com/in/rachel-blackie-273b18127/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rachel Blackie
        </a>
      </footer>
    </div>
  );
}

export default App;
