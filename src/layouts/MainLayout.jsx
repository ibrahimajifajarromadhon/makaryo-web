import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PropTypes from "prop-types";

const MainLayout = ({children}) => {
    return (
        <>
            <Navbar />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;