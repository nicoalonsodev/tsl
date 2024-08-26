import React from 'react'
import logo from "../../assets/logo/logo_blanco-re.png";
const Header = () => {

  const backgroundStyle = {
    backgroundImage:
    "linear-gradient(90deg, rgba(29,29,27,1) 32%, rgba(83,59,20,1) 64%, rgba(167,107,10,1) 100%, rgba(245,152,0,1) 100%)",
    };
  return (
    <div  style={backgroundStyle} className='w-screen h-32 border-b-[2px] border-gray-600 flex justify-center items-center'>
      <img className='w-28' src={logo} alt="logo" />
    </div>
  )
}

export default Header


// backgroundImage:
// "linear-gradient(90deg, rgba(29,29,27,1) 32%, rgba(83,59,20,1) 64%, rgba(167,107,10,1) 91%, rgba(245,152,0,1) 100%)",
// };