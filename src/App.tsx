import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ModelPage from './components/ModelPage';

function Home() {
  return <h2>Welcome to our Machine Learning Landing Page</h2>;
}

function Info() {
  return <h2>This page provides information about our project.</h2>;
}

function App() {
  return (
    <Router>
      <div className="header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/use">Use</Link>
          <Link to="/info">Info</Link>
        </nav>
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
