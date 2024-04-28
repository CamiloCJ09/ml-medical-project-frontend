import "./App.css";
import { Input, Button } from "reactstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ModelPage from "./components/ModelPage";

function Home() {
  return <h2>Welcome to our Machine Learning Landing Page</h2>;
}

function Info() {
  return (
    <div>
      <div>
        <Input className="talk" type="textarea" />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="header">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/use">Use</Link>
          <Link to="/info">let's talk</Link>
        </nav>
        <div className="logo">Logo</div>
      </div>
      <div className="main">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/use" Component={ModelPage} />
          <Route path="/info" Component={Info} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
