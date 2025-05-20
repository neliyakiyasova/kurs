import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AscentsList from './pages/AscentsList';
import AddPeak from './pages/AddPeak';
import ProfileSection from './pages/ProfileSection';
import AddGroup from './pages/AddGroup';
import Statistics from './pages/Statistics';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ascents" element={<AscentsList />} />
          <Route path="/add-peak" element={<AddPeak />} />
          <Route path="/profile/*" element={<ProfileSection />} />
          <Route path="/add-group" element={<AddGroup />} />
          <Route path="/stats" element={<Statistics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



/*import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AscentsList from './pages/AscentsList';
import AddPeak from './pages/AddPeak';
import ClimberProfile from './pages/ClimberProfile';
import AddGroup from './pages/AddGroup';
import Statistics from './pages/Statistics';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ascents" element={<AscentsList />} />
          <Route path="/add-peak" element={<AddPeak />} />
          <Route path="/profile/:id" element={<ClimberProfile />} />
          <Route path="/add-group" element={<AddGroup />} />
          <Route path="/stats" element={<Statistics />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;*/


/*import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AscentsList from './pages/AscentsList';
import AddPeak from './pages/AddPeak';
import ClimberProfile from './pages/ClimberProfile';
import AddGroup from './pages/AddGroup';
import Statistics from './pages/Statistics';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ascents" element={<AscentsList />} />
          <Route path="/add-peak" element={<AddPeak />} />
          <Route path="/profile" element={<ClimberProfile />} />
          <Route path="/add-group" element={<AddGroup />} />
          <Route path="/stats" element={<Statistics />} />
          <Route path="/profile/:id" element={<ClimberProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;*/