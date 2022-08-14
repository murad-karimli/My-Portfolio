import Nav from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import Social from "./Components/Social/Social";
import Tech from "./Components/Tech/Tech";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Nav />
      <Social />
      <Header />
      <About />
      <Tech />
      <Work />
      <Resume />
      <Contact />
      <p className="text-xl text-center my-8 font-semibold text-[#fffe]">
        Created by Murad :)
      </p>
    </>
  );
}
export default App;
