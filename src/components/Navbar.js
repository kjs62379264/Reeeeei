import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { Button } from './Button';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    },[]);

    window.addEventListener ('resize', showButton);

  return (
   <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                캡스톤 <i class="fa-solid fa-city" />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        홈
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        서비스
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                        길찾기?
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                        회원가입
                    </Link>
                </li>
            </ul>
            {button && 
            <Button
            to = "/sign-up"
            buttonStyle='btn--outline'
            >
                SIGN UP
            </Button>}
        </div>
    </nav>
   </>
  )
}

export default Navbar