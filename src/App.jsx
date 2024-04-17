import React from 'react';
import { useState } from 'react';
import Nav from './components/navigation/Nav'
import Home from './components/Home/Home.jsx';
import Projects from './components/Projects/Projects.jsx';
import Photography from './components/Photography/Photography.jsx';

export default function App() {

  return (
    <div>
      <Nav></Nav>
    <Home>

    </Home>
    <Projects>

    </Projects>
    <Photography></Photography>
    </div>
  )
}


