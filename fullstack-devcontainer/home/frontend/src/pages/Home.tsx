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
          <div className="title-text">
            <h1>Welcome to Brown Space Engineering!</h1>
          </div>
          <p className="body-text">
            Explore all that the most successful space engineering club
            has to offer! Here is where innovation is at its finest.
          </p>
        </div>
          <GlobeAndStars/>
      </div>
    </ThemeProvider>
  );
}

export default Home;
