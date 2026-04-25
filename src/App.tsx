import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Home from "@/pages/home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-black">
      <Navbar />

      <div className="min-h-screen pt-14">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
