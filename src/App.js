import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import Home from './pages/Home.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
