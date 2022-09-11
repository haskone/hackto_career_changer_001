import "./App.css";

import {Routes, Route} from 'react-router-dom';

import SpecificPath from "./SpecificPath";

import Login from './components/Login';
import ProfilePage from './components/ProfilePage';

import {useAppContext} from './context/AppContext';

const ProtectedRoute = ({
  children
}) => {
  const [state] = useAppContext();

  return state.auth.user ? children : <Login />;
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route index path="/login" element={<Login />} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }>
          <Route path="position/:positionId" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
        </Route>
        <Route path="/roadmap" element={<SpecificPath />} />
      </Routes>
    </div>
  );
}

export default App;
