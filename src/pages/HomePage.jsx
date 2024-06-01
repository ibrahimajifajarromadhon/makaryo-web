import Services from "../components/Services";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import FAQs from "../components/FAQs";
import Team from "../components/Team";
import MainLayout from "../layouts/MainLayout";
import CustomerServiceButton from "../components/CustomerServiceButton";
import BackToTopButton from "../components/BackToTopButton";

const HomePage = () => {

  return (
    <MainLayout>
      <Services />
      <Features />
      <Testimonials />
      <FAQs />
      <Team/>
      <BackToTopButton/>
      <CustomerServiceButton/>
    </MainLayout>
  );
}

export default HomePage;