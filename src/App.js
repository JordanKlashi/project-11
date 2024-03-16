import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { loadUserData } from "./action/data.user.js";
import Header from "./Components/Header/Header.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import Home from "./Page/Home.jsx"
import Erreur from "./Page/Erreur.jsx"
import SignIn from "./Page/SignIn.jsx"
import Account from "./Page/Account.jsx"

function App() {
  const token = useSelector(state => state.LOGIN_SUCCESS);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(loadUserData());
    }
  }, [token, dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="*" element={<Erreur />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
