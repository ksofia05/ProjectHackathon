import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './page/home'; 
// import Destinations from './components/Destinations';
// import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* La página principal con toda la información */}
        {/* <Route path="/destinations" element={<Destinations />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
