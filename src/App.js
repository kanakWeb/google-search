import './App.css';
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer';
import Routes from './Components/Routes.jsx';
import { useState } from 'react';



function App() {
  const [darkTheme, SetDarkTheme] = useState(false)
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
       <Navbar/>
       <Footer/>
       <Routes/>
      </div>
    </div>
  );
}

export default App;
