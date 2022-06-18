import './App.css'
import React from "react";
import {Route, Routes} from 'react-router-dom'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./Pages/home";

//redux
import {Provider} from "react-redux";
import store from "./store/index";
import Contact from './components/Contact';
import City from './components/City';
import About from './components/about';

function App() {
  return (
    <Provider store={store}>
      <NavBar/>

        <div className="body">
          <div className="container">
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="/ciudad/:id" element={<City/>}/>
              </Routes>
          </div>
        </div>
      <Footer/>
    </Provider>
  );
}

export default App;
