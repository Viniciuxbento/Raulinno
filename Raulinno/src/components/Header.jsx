//css
import '../assets/css/Header.css'
//components
import Logo from "../assets/images/logo.png";


const Header = () => {
  return (

    <div className='header'>
      <div className='logo-name'> 
        <img className='logo-width' src={Logo} alt="" />
        <div className='words'>
          <h1 className='h1-header'>Raulinno </h1>
          <p className='p-header'>construções</p>

        </div>
      </div>

      <div>
        <ul className='ul-container'>
          <li><a href="">Quem somos</a></li>
          <li><a href="">Portifólio</a></li>
          <li><a href="">Entre em contato</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header