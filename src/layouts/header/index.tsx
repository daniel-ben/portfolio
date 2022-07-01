import "./styles.css";

function Header() {
    return (
        <header className='header'>
        <span className='header__name'>Daniel Ben</span>
        <ul className='header__nav'>
          <li className='current-page header__nav-item'>
            <a href="#home">Home</a>
          </li>
          <li className='header__nav-item'>
            <a href="#work">Work</a>
          </li>
          <li className='header__nav-item'>
            <a href="#about">About</a>
          </li>
          <li className='header__nav-item'>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header> 
    )
}

export default Header;