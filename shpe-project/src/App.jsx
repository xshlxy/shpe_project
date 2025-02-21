import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from "react-router";
import Header from './components/Header';
import Home from './pages/Home';
import React from 'react'
import './App.css'


function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App
