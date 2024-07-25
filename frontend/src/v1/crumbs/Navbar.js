
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faPhone, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import Image from '../Images/favicon.png'
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';


const Navbar = () => {
  const pathname = useLocation().pathname;
  const [trigger, setTrigger] = useState(false)

  const toggleTrigger = () => {
    setTrigger(!trigger)
  }

  const links = [
    { name: "Home", link: "/home" },
    { name: "About us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Projects", link: "/projects" },
    { name: "Contact us", link: "/contact" }
  ]
  return (
    <div className='relative flex flex-col md:flex-row justify-between items-center py-5 md:px-10'>
      <Link className="flex flex-col justify-center items-center p-4 md:p-0 border-b-2 md:border-b-0" href="/">
        <img src={Image} alt="logo" className="circle-wrap w-[100px] h-[100px] rounded-full border-4 border-double border-cyan" />
        <h1 className='font-merriweather font-extrabold text-sm text-cyan'>IC Engineering Inc.</h1>
      </Link>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col md:flex-row justify-end items-center gap-3'>
          <p className='p-4 md:p-0 border-b-2 md:border-b-0'><FontAwesomeIcon icon={faPhone} className="text-cyan mr-2" />+1 (919) 271-0051</p>
          <a href="#" className='bg-cyan px-3 py-1 rounded-full text-white'>contact us</a>
        </div>
        <nav className=" hidden md:flex flex-row gap-5 justify-center items-center">
          {links.map((link, index) => (
            <Link href={link.link} key={index} className={`${link.link === pathname ? "text-cyan border-b-2 border-cyan" : ""} capitalize font-medium hover:text-cyan transition-all`}>{link.name}</Link>
          ))}
        </nav>

        <nav className="md:hidden flex flex-col justify-center items-center gap-8">
          {trigger && links.map((link, index) => {
            return (
              <Link href={link.link} key={index} className={`${link.link === pathname && "text-cyan border-b-2 border-cyan"} text-xl capitalize hover:text-cyan transition-all`}>
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <FontAwesomeIcon icon={trigger ? faClose : faBars} onClick={toggleTrigger} size="1x" className='xl:hidden md:hidden absolute top-10 right-2 bg-opacity-100 bg-cyan rounded-full p-4 text-justify text-white' />
    </div>
  );
}

export default Navbar;