import './styles.css';

function About() {
    return (
        <section className='page about' id='about'>
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
    )
} 

export default About;