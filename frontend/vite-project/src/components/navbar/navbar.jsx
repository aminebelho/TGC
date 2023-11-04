import './navbar.css'
import logo from '../../assets/logo.png';
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom"


function Navbar() {

  return (
    <div className='nav'>
    <div className='navbar'>
        <div className='pageLogo'>
          <Link to="/landing"><img src={logo} alt="" /></Link>
        </div>
        <div className='navbarItems'>
          
            <div className='navItem'> <Link to="/about">About <IoIosArrowDown /></Link>  </div>
            <div className='navItem'>Brands <IoIosArrowDown /></div>
            <div className='navItem'>Services <IoIosArrowDown /></div>
            <div className='navItem'><Link to="/contributeAdd">Contribute <IoIosArrowDown /></Link></div>
        </div>
        <div className='darkMode'>
            rfeibn
        </div>
    </div>
    </div>
  )
}

export default Navbar