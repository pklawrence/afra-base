import MyName from './Home'
import Navbar from './Header'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Blog";
import Footer from './Footer';
import Brief from './Optimize';
import Solve from './Problem';
import Systematic from './Approach';



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);


const toggleTheme = () => {
  setIsDarkMode(!isDarkMode);
};

  return (
        <body className="py-8">
          <div  >
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" isDarkMode={isDarkMode} cb={toggleTheme} element={<MyName />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/brief/:id" element={<Brief />} />
                <Route path="/solve/:id" element={<Solve />} />
                <Route path="/systematic/:id" element={<Systematic />} />
              </Routes>
              <Footer />

            </BrowserRouter>
          </div>
        </body>
  )
}

export default App
