import './App.css';
import Register from './components/regixter';
import Login from './components/login';
import Profile from './components/profile';
import { Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <>
      <nav
        style={{
          display: 'flex',
          gap: '15px',
        }}
      >
        <Link to="/"> Home</Link>
        <Link to="/login"> login</Link>
        <Link to="/register"> Regicter</Link>
        <Link to="/profile"> profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};
export default App;
