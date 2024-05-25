import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <Header />
        <Services />
        <Features />
        <Testimonials />
        <FAQs />
        <Footer />
      </main>
    </div>
  );
}

export default App;
