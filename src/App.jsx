import 'index.css';
import Hotel from './components/page/Hotel'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Hotel />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
