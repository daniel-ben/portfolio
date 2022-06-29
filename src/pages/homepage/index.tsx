import React from 'react';
import './styles.css';

function Homepage() {
  return (
    <>
      <main>
        <section className='page home'>
          <h3 className='home__upper-text'>Hi, my name is</h3>
          <h1 className='home__big-heading home__name'>Daniel Ben</h1>
          <h2 className='home__big-heading home__intro'>I'm a front-end dev</h2>

          <p className='home__description'>I'm a curious developer from Brazil currently pursuing a degree in Information Systems and studying React. I'm yet to get my first job, so if you want to give me a chance, contact me.</p>
        </section>
      </main>

    </>
  );
}

export default Homepage;