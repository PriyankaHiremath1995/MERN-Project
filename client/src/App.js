import {Route, BrowserRouter, Routes} from "react-router-dom"

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import Messages from "./screens/Messages/Messages";
import LoginPage from "./screens/LoginPage/LoginPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import CreateMessage from "./screens/Messages/CreateMessage";
import SingleMessageEdit from "./screens/Messages/SingleMessageEdit";
import ProfilePage from "./screens/ProfilePage/ProfilePage";

function App() {
  return (
  <BrowserRouter>
      <Header/>
      <main>
        <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/profile" element={<ProfilePage />} />
      <Route exact path="/register" element={<RegisterPage />} />
      <Route exact path="/message" element={<Messages />} />
      <Route exact path="/createNewMessage" element={<CreateMessage/>}/>
      <Route exact path="/message/:id" element={<SingleMessageEdit/>}/>
      </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
