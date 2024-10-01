// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Import your main CSS file
import Navbar from './components/Navbar'; // Import your Navbar component
import AboutUs from './components/AboutUs'; // Import your About component
import Footer from './components/Footer'; // Import your Footer component
import GridContainer from './components/GridContainer'; // Import your GridContainer component
import Collab from './components/Collab'; // Import your Collab component
import Support from './components/Support'; // Import your Support component
import Mentorship from './components/Mentorship'; // Import your Mentorship component

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<GridContainer />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/collab" element={<Collab />} /> {/* Route for Collab page */}
            <Route path="/support" element={<Support />} /> {/* Route for Support page */}
            <Route path="/mentorship" element={<Mentorship />} /> {/* Route for Mentorship page */}
          </Routes>
        </main>
        
        <Footer />
      </div>
      <MentorshipPage/>
    </Router>
  );
};

export default App;
