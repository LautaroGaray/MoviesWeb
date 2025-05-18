import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import './App.css';
import './css/common.css';
import { MovieBrowser } from './pages/MovieBrowser';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <div className="app-container">       
        <Header onMenuToggle={toggleSidebar} />     
        <Sidebar isVisible={isSidebarVisible} onClose={toggleSidebar} />      
        <div className={`main-content ${isSidebarVisible ? 'sidebar-visible' : ''}`}>
          <Routes>
            <Route path="/" element={<MovieBrowser />} />           
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
