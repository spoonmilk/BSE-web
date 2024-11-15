import { Navbar } from "@/components/hero/navbar";
import "./Home.css";
import { ThemeProvider } from "@/components/theme-provider";
import GlobeAndStars from "@/components/hero/globe-wrapper";

function Home() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">  
      <Navbar />
      <div className="side-by-side">
        <div className="welcome">
          <div className="title-text">
            <h1>Brown<br />Space<br />Engineering</h1>
          </div>
          <div className="welcome-buttons">
            <button className="join-button">Join BSE</button>
            <button className="contact-button">Contact Us</button>
          </div>
        </div>
          <GlobeAndStars/>
      </div>
    </ThemeProvider>
  );
}

export default Home;
