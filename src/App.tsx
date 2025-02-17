import Header from "./components/HeaderMain";
import KanbanBoardSelection from "./components/sections/Board";
import { FeaturesSectionDemo } from "./components/sections/Features";
import TestimonialSlider from "./components/sections/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Add your main application components here */}
      {/* ... */}
      <KanbanBoardSelection />
      <div className="-z-50 ">
        <FeaturesSectionDemo />
      </div>
      <TestimonialSlider />
    </div>
  );
}

export default App;
