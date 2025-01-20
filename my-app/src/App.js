import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Nav from './components/Nav';
import BookingForm from './components/BookingForm';
import Menu from './components/Menu';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Header/> 
        <BookingForm/>
        <Menu/>
        <Footer/>
      </Router>
    </>
  );
}
export default App;
