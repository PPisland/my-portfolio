import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/main";
import Project from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#131313] min-h-screen font-display flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/a/:projectId" element={<Project />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
