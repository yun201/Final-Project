import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Games from './Games';
import Contact from './Contact';
import GameInfo from './GameInfo';
import NotFound from './NotFound';
import CheckOut from './CheckOut';
import Navbar from './Navbar';
import Footer from './Footer';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/games" element={<Games />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gameinfo/:id" element={<GameInfo />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;



