import { useEffect, useState } from "react";
import "./styles.css";

function Header() {
  const [activePage, setActivePage] = useState('home-nav');

  useEffect(() => {
    document.addEventListener('scroll', () => handleHeaderActivePage(activePage, setActivePage))
  })

  return (
    <header className="header">
      <span className="header__name">Daniel Ben</span>
      <ul className="header__nav">
        <li className="current-page header__nav-item" id='home-nav'>
          <a href="#home">Home</a>
        </li>
        <li className="header__nav-item" id='work-nav'>
          <a href="#work">Work</a>
        </li>
        <li className="header__nav-item" id='about-nav'>
          <a href="#about">About</a>
        </li>
        <li className="header__nav-item" id='contact-nav'>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;

function handleHeaderActivePage(activePage: string, setActivePage: React.Dispatch<React.SetStateAction<string>>) {
  const navItems = ['home-nav', 'work-nav', 'about-nav', 'contact-nav'];

  const windowHeight = window.innerHeight;
  const currentScrollHeight = window.scrollY;
  const currentPage = navItems[Math.floor(currentScrollHeight / (windowHeight - 60))];

  if (currentPage !== activePage) {
    const previousPage = document.getElementById(activePage);
    previousPage?.classList.remove('current-page');

    const newPage = document.getElementById(currentPage);
    newPage?.classList.add('current-page');

    setActivePage(currentPage);
  }
}