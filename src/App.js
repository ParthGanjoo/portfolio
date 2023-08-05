import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Cursor from './Components/Cursor'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
      <Cursor/>
    </>
  );
}

export default App;
