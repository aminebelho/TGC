import './navbar.css'
import logo from '../../assets/logo.png';
import { IoIosArrowDown } from "react-icons/io";


function Navbar() {

  return (
    <div className='nav'>
    <div className='navbar'>
        <div className='pageLogo'>
            <img src={logo} alt="" />
        </div>
        <div className='navbarItems'>
            <div className='navItem'>About <IoIosArrowDown /></div>
            <div className='navItem'>Brands <IoIosArrowDown /></div>
            <div className='navItem'>Services <IoIosArrowDown /></div>
            <div className='navItem'>Goverements <IoIosArrowDown /></div>
            <div className='navItem'>Contribute</div>
        </div>
        <div className='darkMode'>
            rfeibn
        </div>
    </div>
    </div>
  )
}

export default Navbar