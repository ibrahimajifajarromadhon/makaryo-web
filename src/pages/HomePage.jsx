import Services from "../components/Services";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import FAQs from "../components/FAQs";
import MainLayout from "../layouts/MainLayout";
import CustomerServiceButton from "../components/CustomerServiceButton";

const HomePage = () => {
  return (
    <MainLayout>
      <Services />
      <Features />
      <Testimonials />
      <FAQs />
      <CustomerServiceButton/>
    </MainLayout>
  );
}

export default HomePage;