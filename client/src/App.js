import {Route, BrowserRouter, Routes} from "react-router-dom"

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import Messages from "./screens/Messages/Messages";

function App() {
  return (
  <BrowserRouter>
      <Header/>
      <main>
        <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/message" element={<Messages />} />
      </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
