import Header from "./components/Header";
import Introduce from "./components/Introduce";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  //리턴 밖에선 이렇게 주석작성

  return (
    <div className="bg-[#131313] min-h-screen font-display">
      <Header></Header>
      <main>
        <Introduce></Introduce>
        <Portfolio></Portfolio>
        <ContactMe></ContactMe>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
