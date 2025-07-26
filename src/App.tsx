import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BodySection from "./components/BodySection";
import Footer from "./components/Footer";
import TeamMembers from "./components/TeamMembers";
import EventAnnouncement from "./components/EventAnnouncement";
import WaysToDonate from "./components/WaysToDonate";
import PhotoGallery from "./components/PhotoGallery";
import PhotoSlideShow from "./components/PhotoSlideShow";

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
        <PhotoSlideShow />
        <Footer />
      </div>
    </>
  );
}

export default App;
