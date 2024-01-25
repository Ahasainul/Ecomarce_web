import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Routelayot from "./components/Routelayot";
import Products from "./pages/Products";
import Card from "./pages/Card";
import Brands from "./pages/Brands";
import Map from "./layouts/Map";



const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path="/" element={<Routelayot/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<Products/>}/>
    <Route path="/shop" element={<Card/>}/>
    <Route path="card" element={<Brands/>}/>
    <Route path="/Contacts" element={<Map/>}/>
   </Route>
  )
);
function App() {


  return (
    <>










<RouterProvider router={router} />
    </>
  )
}

export default App
