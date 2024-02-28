import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import Home from "./Page/Home.jsx"
import Erreur from "./Page/Erreur.jsx"
import SignIn from "./Page/SignIn.jsx"
import Account from "./Page/Account.jsx"

function App() {
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
