import React from 'react';
import { useState } from 'react';
import ProjetCard from './components/project-card/ProjectCard';
import Badge from './components/badge/Badge.jsx';
import Nav from './components/navigation/Nav'
// import { useState } from 'react'


export default function App() {

  return (
    <div>
      <Badge></Badge>
      <Nav></Nav>
      <ProjetCard></ProjetCard>
    </div>
  )
}


