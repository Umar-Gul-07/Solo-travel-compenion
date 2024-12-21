import ToastContainers from "./Utils/ToastContainer";
import PageNotFound404 from "./Errors/PageNotFound404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Pages/Base";
import Home from "./Pages/Home";
import About from "./Pages//About";
import Package from "./Pages/Package";
import PackageDetail from "./Pages/PackageDetail";
import Hotels from "./Pages/Hotels";
import Flights from "./Pages/Flights";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";


function App() {
  return (
    <>
      <BrowserRouter>

        {/* ToastContainer */}
        <ToastContainers />

        {/* Routes */}
        <Routes>

          {/* Web Routes */}
          <Route path='/' element={<Base><Home/></Base>} />

          <Route path='*' element={<PageNotFound404 />} />
         <Route path="/about" element={<Base><About title="About Us"/></Base>} />
         <Route path="/package" element={<Base><Package title="Packages"/></Base>} />
         <Route path="/package-detail" element={<Base><PackageDetail title="Package Details"/></Base>} />
         <Route path="/hotels" element={<Base><Hotels title="Hotels"/></Base>} />
         <Route path="/flights" element={<Base><Flights title="Flights"/></Base>} />
         <Route path="/blogs" element={<Base><Blogs title="Blogs"/></Base>} />
         <Route path="/blogs-detail" element={<Base><PackageDetail title="Blog Details"/></Base>} />
         <Route path="/contact" element={<Base><Contact title="Contact Us"/></Base>} />


        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
