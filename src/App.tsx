import Header from './layouts/header'
import Homepage from './pages/homepage';
import Work from './pages/work'
import About from './pages/about';
import Contact from './pages/contact/indext';

import React from 'react';
// @ts-ignore

function App() {

  return (
    <>
      <Header />
      <Homepage />
      <Work />
      <About />
      <Contact />
    </>
  )
}

export default App;