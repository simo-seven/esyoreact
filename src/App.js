import "./css/bootstrap.min.css";
import "./css/my.css";
import "./css/style.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import NotFound from "./NotFound.js";
import Footer from "./Footer.js";
import Contact from "./Contact.js";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
