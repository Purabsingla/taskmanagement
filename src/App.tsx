import Header from "./components/HeaderMain";
import KanbanBoardSelection from "./components/sections/Board";
import FrequentlyAskedQuestions from "./components/sections/FAQ";
import { FeaturesSectionDemo } from "./components/sections/Features";
import Footer from "./components/sections/footer";
import NavBar from "./components/sections/NavBar";
import TestimonialSlider from "./components/sections/Testimonials";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      {/* Add your main application components here */}
      {/* ... */}
      <KanbanBoardSelection />
      <div className="-z-50 ">
        <FeaturesSectionDemo />
      </div>
      <TestimonialSlider />
      <FrequentlyAskedQuestions />
      <Footer />
    </div>
  );
}

export default App;
