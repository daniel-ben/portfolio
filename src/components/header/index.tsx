import "./styles.css";

function Header() {
    return (
        <header className='header'>
        <span className='header__name'>Daniel Ben</span>
        <ul className='header__nav'>
          <li className='header__nav-item'>Home</li>
          <li className='header__nav-item'>Work</li>
          <li className='header__nav-item'>About</li>
          <li className='header__nav-item'>Contact</li>
        </ul>
      </header> 
    )
}

export default Header;