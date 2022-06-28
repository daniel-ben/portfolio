import React from 'react';
import './style.css';

function Homepage() {
  return (
    <div className="App">
      <header className='header'>
        <span className='header__name'>Daniel Ben</span>
        <ul className='header__nav'>
          <li className='header__nav-item'>Home</li>
          <li className='header__nav-item'>Work</li>
          <li className='header__nav-item'>About</li>
          <li className='header__nav-item'>Contact</li>
        </ul>
      </header>

      <main>
        <section className='page home'>
          <h3 className='home__upper-text'>Hi, my name is</h3>
          <h1 className='home__big-heading home__name'>Daniel Ben</h1>
          <h2 className='home__big-heading home__intro'>I'm a front-end dev</h2>

          <p className='home__description'>I'm a curious developer from Brazil currently pursuing a degree in Information Systems and studying React. I'm yet to get my first job, so if you want to give me a chance, contact me.</p>
        </section>

        <section className='page work'>
         <h2 className='section-title'>Work</h2>
        </section>

        <section className='page about'>
          <h2 className='section-title'>About</h2>

          <p className='about__text'>Hi, I'm Daniel, a developer in training and also a biologist from Brazil. I've recently decided to follow my passion for tech and started a graduation in Information Systems. I started learning programming with Front-end by myself, but I'm also learning other areas at University.</p>
          <p className='about__text'>I speak Portuguese and English fluently and I've been studying the following technologies:</p>

          <ul className='about__list'>
            <li className='about__list-item'>HTML</li>
            <li className='about__list-item'>CSS</li>
            <li className='about__list-item'>Javascript</li>
            <li className='about__list-item'>Typescript</li>
            <li className='about__list-item'>React (basic)</li>
            <li className='about__list-item'>Python (basic)</li>
            <li className='about__list-item'>C++ (basic)</li>
          </ul>
        </section>

        <section className='page contact'>
          <h2 className='section-title'>Contact</h2>

          <p className='contact__message'>Wanna say hello? Just send me a message</p>
          <form className='contact__form'>
            <input className='contact__input' type='text' placeholder='Your name (required)' required />
            <input className='contact__input' type='email' placeholder='Your email (required)' required />
            <textarea rows={5} className='contact__input' placeholder='Say hi' required />
          </form>

          <p className='contact__message'>Wanna buy me a coffe, or buy my cats some cat sachet?</p>
          <span className='contact__pay-method'>Buy me a coffe</span>
          <span className='contact__pay-method'>Pix</span>
        </section>
      </main>

    </div>
  );
}

export default Homepage;
