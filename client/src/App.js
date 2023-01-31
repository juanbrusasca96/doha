import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import logo from './logo.svg';
// import './App.css';
import './styles/style.css'
import Login from './components/login/Login';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
