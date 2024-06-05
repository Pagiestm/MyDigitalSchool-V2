import "./index.css";
import Accueil from "./components/pages/Accueil";
import Locaux from "./components/pages/Locaux";
import Ecole from "./components/pages/Ecole";
import Formation from "./components/pages/Formation";
import Equipe from "./components/pages/Equipe";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavigationBar from "./components/layout/NavigationBar";
import Footer from "./components/layout/Footer";

function App() {
    return (
       <>
              <Router>
                     <NavigationBar/>
                            <Routes>
                                   <Route path="/"
                                          element={<Accueil/>}/>
                                   <Route path="/ecole"
                                          element={<Ecole/>}/>
                                   <Route path="/equipe"
                                          element={<Equipe/>}/>
                                   <Route path="/locaux"
                                          element={<Locaux/>}/>
                                   <Route path="/formations"
                                          element={<Formation/>}/>
                            </Routes>
                     <Footer/>
              </Router>
       </>
    );
}

export default App;
