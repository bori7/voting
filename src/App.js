import './App.css';
import Home from './pages/Home';
import { ThemeProvider } from "./components/ThemeContext";
import Background from "./components/Background";
import Toggle from "./components/ThemeToggle";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import Sidebars from './components/Sidebars';
import Stakeholders from './pages/Stakeholders';
import Election from './components/Election';
import LandingPage from './pages/LandingPage';




function App() {
  return (
    <BrowserRouter>

    <ThemeProvider>
    <Background>
      <div className="fixed md:left-10 right-10 -top-3 mr-14 mt-7 md:mr-2 md:mt-6 z-50">
        <Toggle />  
      </div>
      <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">

<div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
  <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
    <img className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden" src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg" />
    <span className="hidden md:block">ADMIN</span>
  </div>
  <div className="flex justify-between items-center h-14 bg-white dark:bg-gray-700 header-right">
  
     
    
      <div>
        <a href="#" className="flex items-center text-blue-700 dark:text-white   mr-4 hover:text-blue-100">
          <span className="inline-flex mr-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
          </span>
          Logout
        </a>
      </div>
  </div>
</div>
<Sidebars/>
    <Routes>
      <Route path='/' element={<Home/>}/>
         <Route path="/stakeholders" element={<Stakeholders />}/>
         <Route path="elections" element={<Election />}/>
    </Routes>

</div>      
        <footer className="dark:bg-slate-900 flex py-2 justify-center align-middle border-t">
          <a
            href="https://blockgames.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-grow justify-center align-middle self-center text-sm dark:text-gray-200 text-gray-500"
            >
            Powered by{" "}
            <h1 className="text-gray-500 dark:text-gray-200 ml-2 font-bold text-sm self-center">
              Blockgames
            </h1>
          </a>
        </footer>
      </div>
    </Background>
  </ThemeProvider>
            </BrowserRouter>
    );
}

export default App;
