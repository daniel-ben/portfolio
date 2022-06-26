import React from 'react';
import './style.css';

function Homepage() {
  return (
    <div className="App">
      <header className='header'>
        <ul className='header__nav'>
          <li className='header__nav-item'>Home</li>
          <li className='header__nav-item'>Work</li>
          <li className='header__nav-item'>About</li>
          <li className='header__nav-item'>Contact</li>
        </ul>
      </header>

      <main>
        <section className='home'>
          <h3 className='home__upper-text'>Hi, my name is</h3>
          <h1 className='home__big-heading home__name'>Daniel Ben</h1>
          <h2 className='home__big-heading home__intro'>I'm a front-end dev</h2>

          <p className='home__description'>I'm a curious developer from Brazil currently pursuing a degree in Information Systems and studying React. I'm yet to get my first job, so if you want to give me a chance, contact me.</p>
        </section>

        <section>
         <h2>Work</h2>
        </section>

        <section>
          <h2>About</h2>

          <p>Hi, I'm Daniel, a developer in training and also a biologist from Brazil. I've recently decided to follow my passion for tech and started a graduation in Information Systems. I started learning programming with Front-end by myself, but I'm also learning other areas at University.</p>
          <p>I speak Portuguese and English fluently and I've been studying the following technologies:</p>

          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>React (basic)</li>
            <li>Python (basic)</li>
            <li>C++ (basic)</li>
          </ul>
        </section>

        <section>
          <h2>Contact</h2>

          <p>Wanna say hello? Just send me a message</p>
          <form>
            <input type='text' placeholder='Your name (required)' required />
            <input type='email' placeholder='Your email (required)' required />
            <textarea placeholder='Say hi' required />

          </form>

          <p>Wanna buy me a coffe, or buy my cats some cat sachet?</p>
          <span>Buy me a coffe</span>
          <span>Pix</span>
        </section>
      </main>

    </div>
  );
}

export default Homepage;
