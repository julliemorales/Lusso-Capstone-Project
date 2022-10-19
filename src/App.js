import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
