import React, { useRef } from "react";
import NavBar from "../components/sections/NavBar";
import Header from "../components/HeaderMain";
import KanbanBoardSelection from "../components/sections/Board";
import { FeaturesSection } from "../components/sections/Features";
import TestimonialSlider from "../components/sections/Testimonials";
import FrequentlyAskedQuestions from "../components/sections/FAQ";
import Footer from "../components/sections/footer";
import Vision from "../components/sections/Vision";
import CTA from "../components/sections/FinalCTA";
import { useInView } from "framer-motion";

const Home: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <React.Fragment>
      <NavBar />
      <Header />
      <div ref={ref}>{isInView && <KanbanBoardSelection />}</div>
      <Vision />
      <FeaturesSection />
      <TestimonialSlider />
      <FrequentlyAskedQuestions />
      <CTA />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
