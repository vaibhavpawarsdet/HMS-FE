import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Report from "./pages/Report";
import Doctors from "./pages/Doctors";
import Contacts from "./pages/Contacts";
import Appointments from "./pages/Appointments";
import AppointmentList from "./pages/AppointmentList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Navigation />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/report" element={<Report />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/*" element={<h1>Page Not Found</h1>} />
          <Route path="/appointments-list" element={<AppointmentList />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
