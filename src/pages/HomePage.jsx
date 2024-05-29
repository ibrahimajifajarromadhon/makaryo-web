import Services from "../components/Services";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import FAQs from "../components/FAQs";
import MainLayout from "../layouts/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <Services />
      <Features />
      <Testimonials />
      <FAQs />
    </MainLayout>
  );
}

export default HomePage;