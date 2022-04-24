import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import Home from './pages/Home.js';
import ImageSlideShow from './pages/ImageSlideShow.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imageslideshow" element={<ImageSlideShow />} />
      </Routes>
    </div>
  );
}

export default App;
