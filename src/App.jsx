import './index.css';
import Accueil from './components/page/Accueil'
import Locaux from './components/page/Locaux'
import Ecole from './components/page/Ecole'
import Formation from './components/page/Formation'
import Equipe from './components/page/Equipe'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/layout/NavigationBar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/locaux" element={<Locaux />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/ecole" element={<Ecole />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
