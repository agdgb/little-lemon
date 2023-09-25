import "./App.css";
import Header from "./Header";
import logo from './Logo.svg'

function App() {
  return (
    <>
      <Header props={logo}/>
      <main>main</main>
      <footer>footer</footer>
    </>
  );
}

export default App;
