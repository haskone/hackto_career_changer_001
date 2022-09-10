import logo from "./logo.svg";
import "./App.css";

import {Routes, Route} from 'react-router-dom';

import SpecificPath from "./SpecificPath";

import Login from './components/Login';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/roadmap" element={<SpecificPath />} />
      </Routes>
    </div>
  );
}

export default App;
