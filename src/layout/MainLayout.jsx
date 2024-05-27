import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function MainLayout(props) {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>

      <Footer />
    </div>
  );
}
