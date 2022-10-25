import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import AllProductsPage from './components/AllProductsPage';
import SingleProductPage from './components/SingleProductPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/products' element={<AllProductsPage />} />
        <Route path='/product/:id' element={<SingleProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
