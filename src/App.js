import About from "./components/About";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import logo from "./Logo.svg";
import Main from "./components/Main";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
// import Button from "./button";

function App() {
  return (
    <>
      <Header props={logo} />
      <Main>Main</Main>
      <Specials></Specials>
      <Testimonials></Testimonials>
      <About></About>
      <Footer>footer</Footer>
    </>
  );
}

export default App;
