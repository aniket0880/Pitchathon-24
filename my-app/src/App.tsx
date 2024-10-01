import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="w-full min-h-screen flex flex-col">
        {/* Ensure full-width for Navbar */}
        <Navbar />
        <main className="w-full flex-grow">
          {/* Ensure main content fills available space */}
          <Routes>
            <Route path="/" element={<h1 className="text-center">Welcome to My Website!</h1>} />
            <Route path="/about" element={<AboutUs />} />
            {/* You can add more routes here */}
          </Routes>
        </main>
        {/* Ensure full-width for Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
