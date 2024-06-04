import './index.css';
import Accueil from './components/page/Accueil'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/layout/NavigationBar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
