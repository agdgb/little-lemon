import About from "./About";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import logo from "./Logo.svg";
import Main from "./Main";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import Button from "./button";

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
