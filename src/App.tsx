import MyHeader from './layouts/header'
import Homepage from './pages/homepage';
import Work from './pages/work'
import About from './pages/about';
import Contact from './pages/contact/indext';

import React from 'react';
// @ts-ignore
import {SectionsContainer, Section, Header} from 'react-fullpage';

function App() {

  let options = {
    sectionClassName:     'section',
    anchors:              ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
    scrollBar:            false,
    navigation:           true,
    verticalAlign:        false,
    sectionPaddingTop:    '60px',
    arrowNavigation:      true
  };

  return (
    <>
      <Header>
        <MyHeader />
      </Header>
      <SectionsContainer className="container" {...options}>
        <Section><Homepage /></Section>
        <Section><Work /></Section>
        <Section><About /></Section>
        <Section><Contact /></Section>
      </SectionsContainer>
    </>
  )
}

export default App;