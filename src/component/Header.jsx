import "../styles/Tina.css";
// import teeket from '../../src/imgs/TeeketLogo.png' ;
// import { Button } from "./Button";
import TeeketLogo from '../imgs/TeeketLogo.png';

export default function Header() {
  return (
    // <header className="Header">
    //   <img src={teeket} alt="logo" />
    //   <Button bg="#001133" label="Menu" color="#FFFFFF"/>
    // </header>
    <header className='flex items-center justify-between mx-2'>
        <img className='md:h-14 md:w-20 h-10 w-16' src={TeeketLogo} alt='teeketLogo' />
        <button className='md:bg-green-300 bg-blue-500 text-white md:p-4 p-2 rounded-lg'
        style={{ backgroundColor: '#001133' }}>
        Menu</button>
      </header>
  );
}