import MyName from './hello'
import Navbar from './header'
import { useEffect, useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);


const toggleTheme = () => {
  setIsDarkMode(!isDarkMode);
};

  return (
        <body className={isDarkMode ? 'bodyDark' : ''}>
          <div  >
            <Navbar />
         
          </div>
          <div>
            <MyName isDarkMode={isDarkMode} cb={toggleTheme} />
          </div>
        </body>
  )
}

export default App
