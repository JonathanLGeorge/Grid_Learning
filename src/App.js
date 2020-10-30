import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Realtors from "./components/Realtors";
import Story from "./components/Story";
import "./sass/main.css";
function App() {
  return (
    <div className="container">
      <Header />
      <Realtors />
      <section class="features">
        <Features />
      </section>
      <Story />
      <Footer />
    </div>
  );
}

export default App;
