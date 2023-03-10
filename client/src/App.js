import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import logo from './logo.svg';
// import './App.css';
import './styles/style.css'
import Login from './components/login/Login';
import Home from './components/home/Home';
import Signup from "./components/signup/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route index path="/" element={<Home />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
}

export default App;
