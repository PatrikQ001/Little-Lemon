import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Main from './components/Main';
function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Main/>
        <Menu/>
        <Footer/>
      </Router>
    </>
  );
}
export default App;
