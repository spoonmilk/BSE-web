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
          <div className="welcome-button">
            <button>HELlO</button>
          </div>
        </div>
          <GlobeAndStars/>
      </div>
    </ThemeProvider>
  );
}

export default Home;
