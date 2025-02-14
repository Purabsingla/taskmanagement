import Header from "./components/HeaderMain";
import KanbanBoardSelection from "./components/sections/Board";
import { FeaturesSectionDemo } from "./components/sections/Features";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Add your main application components here */}
      {/* ... */}
      <KanbanBoardSelection />
      <FeaturesSectionDemo />
    </div>
  );
}

export default App;
