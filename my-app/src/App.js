import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages'
import WaitlistPage from './pages/waitlist';
import ConfirmationPage from './pages/confirmation_page';
import ContactPage from './pages/contact';
import ContactConfirmationPage from './pages/contact_confirmation_page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/waitlistpage" element={<WaitlistPage />} exact />
        <Route path="/waitlist_success" element = {<ConfirmationPage />} exact />
        <Route path="/contact_us" element = {<ContactPage />} exact/> 
        <Route path="/contact_us_success" element = {<ContactConfirmationPage />} exact /> 
      </Routes>
    </Router>
  );
}

export default App;