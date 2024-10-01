// App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import GridContainer from './components/GridContainer'; // Import the GridContainer
import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


const App = () => {
  return (
    <Router>
      <div className="w-full min-h-screen flex flex-col">
        {/* Ensure full-width for Navbar */}
        <Navbar />
        <main className="w-full flex-grow">
          <Routes>
            <Route path="/" element={<h1 className="text-center">Welcome to My Website!</h1>} />
            <Route path="/about" element={<AboutUs />} />
            {/* Add the GridContainer below the AboutUs component */}
            <Route path="/grid" element={<GridContainer />} />
            {/* You can add more routes here */}
          </Routes>
        </main>
        {/* Place GridContainer here directly */}
        <GridContainer /> {/* Add GridContainer component here */}
        {/* Ensure full-width for Footer */}
        <Footer />
      </div>
      <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </Router>
  );
};

export default App;
