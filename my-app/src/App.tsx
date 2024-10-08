// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Import your main CSS file
import Navbar from './components/Navbar'; // Import your Navbar component
import AboutUs from './components/AboutUs'; // Import your About component
import Footer from './components/Footer'; // Import your Footer component
import GridContainer from './components/GridContainer'; // Import your GridContainer component
import Collab from './components/Collab'; // Import your Collab component
import Support from './components/Upload.tsx'; // Import your Support component
import MentorshipPage from './components/MentorshipPage'; // Import your Mentorship component

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow w-full mx-0">
          {/* Add HeroSection at the top of the main content */}
          
          
          {/* Routes to different pages */}
          <Routes>
            <Route path="/" element={<GridContainer />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/collab" element={<Collab />} /> {/* Route for Collab page */}
            <Route path="/support" element={<Support />} /> {/* Route for Support page */}
            <Route path="/mentorship" element={<MentorshipPage />} /> {/* Route for Mentorship page */}
          </Routes>
        </main>
        n
        <Footer />
      </div>
    </Router>
  );
};

export default App;
