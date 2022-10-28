import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/home/Home';
import Services from './Components/services/Services';
import Features from './Components/features/Features';
import Testimonail from './Components/testimonail/Testimonail';
import ContactUs from './Components/contact us/ContactUs';
import Footer from './Components/footer/Footer';
function App() {
  return (
    <div>
      <Header />
      <Home />
      <Services />
      <Features />
      <Testimonail />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
