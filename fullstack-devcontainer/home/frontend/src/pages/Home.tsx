import { Navbar } from "@/components/hero/navbar";
import "./Home.css";
import { ThemeProvider } from "@/components/theme-provider";
import GlobeAndStars from "@/components/hero/globe-wrapper";

function Home() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">  
      <Navbar />
      <div className="side-by-side">
        <div className="intro-text">
          <h1>Welcome to Brown Space Engineering!</h1>
          <p>
            Explore all that the most successful space engineering club
            has to offer!
          </p>
        </div>
      </div>
      <div className="globe-container">
        <GlobeAndStars/>
      </div>
    </ThemeProvider>
  );
}

export default Home;
