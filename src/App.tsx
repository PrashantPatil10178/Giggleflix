import Body from "./components/Body";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Main2 from "./components/Main2";
import Cards from "./components/Cards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App(): JSX.Element {
  return (
    <>
      <Nav />
      <Body />
      <Main />
      <Main2 />
      <Cards />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
