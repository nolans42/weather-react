import Weather from "./Weather";
import "./Weather.css";
import "./App.css";

function App() {
  return (
    <div className="code">
      <div className="container">
        <header className="code-header">
          <Weather />
        </header>
        <footer>
          <small>
            This project is coded by Sarah Nolan and is {""}
            <a href="https://github.com/nolans42/weather-react">
              Open-sourced on Github {""}
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
