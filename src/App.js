import './App.css';
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer';
import Routes from './Components/Routes.jsx';
import { useState } from 'react';



function App() {
  const [darkTheme,SetDarkTheme] = useState(false)
  return (
    <div className={darkTheme ? 'Dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navbar darkTheme={darkTheme} SetDarkTheme={SetDarkTheme} />
        <Footer />
        <Routes />
      </div>
      {/* {console.log({ darkTheme, SetDarkTheme })} checking perpase */}
    </div>

  );
}

export default App;
