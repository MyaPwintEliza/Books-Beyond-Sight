import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BodySection from "./components/BodySection";
import Footer from "./components/Footer";
import TeamMembers from "./components/TeamMembers";
import EventAnnouncement from "./components/EventAnnouncement";
import WaysToDonate from "./components/WaysToDonate";
import PhotoGallery from "./components/PhotoGallery";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <BodySection />
        <WaysToDonate />
        <TeamMembers />
        <EventAnnouncement />
        <PhotoGallery />
        <Footer />
      </div>
    </>
  );
}

export default App;
