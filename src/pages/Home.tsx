import React from "react";
import NavBar from "../components/sections/NavBar";
import Header from "../components/HeaderMain";
import KanbanBoardSelection from "../components/sections/Board";
import { FeaturesSectionDemo } from "../components/sections/Features";
import TestimonialSlider from "../components/sections/Testimonials";
import FrequentlyAskedQuestions from "../components/sections/FAQ";
import Footer from "../components/sections/footer";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Header />
      <KanbanBoardSelection />
      <div className="-z-50 ">
        <FeaturesSectionDemo />
      </div>
      <TestimonialSlider />
      <FrequentlyAskedQuestions />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
