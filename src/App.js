import React, { useState } from 'react';

import Footer from './components/Footer';
import  Navbar  from './components/Navbar';
import  Routess  from './components/Routess';

const App = () => {
  
  const [darkTheme, setDarkTheme] = useState(true);
  // setDarkTheme={setDarkTheme} darkTheme={darkTheme}
  const onchangedarkthemehandler=()=>{
    setDarkTheme(!darkTheme);
  }
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar darkTheme={darkTheme} onSetTheme={onchangedarkthemehandler} />
        {/* {darkTheme ? "💡 Light" : "🌙 Dark"} */}
        
        <Routess />
        <Footer />
      </div>
    </div>

  );
};

export default App;