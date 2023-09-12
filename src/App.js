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
            </a>{" "}
            and{" "}
            <a
              href="https://master--eclectic-pudding-7c6c06.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
