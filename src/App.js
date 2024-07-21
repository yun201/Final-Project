import Contact from './Contact';
import Games from './Games';
import Home from './Home';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import GameInfo from './GameInfo';
import NotFound from './NotFound';
import CheckOut from './CheckOut';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; 

function App() {
  return (
    <I18nextProvider i18n={i18n}>
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
      </div>
    </I18nextProvider>
  );
}

export default App;





