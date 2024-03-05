//css
import '../assets/css/Header.css'
//components
import Logo from "../assets/images/logo.png";


const Header = () => {
  return (

    <div className='header'>
      <div className='logo-name'>

        <div className='words'>
          <img className='logo-width' src={Logo} alt="" />
          <div>
            <h1 className='h1-header'>Raulinno </h1>
            <p className='p-header'>construções</p>
          </div>

        </div>
        <div>

          <div className='contatoIcons'>
            <span class="material-symbols-outlined">mail</span>
            <h3 className='h1HeaderCont'>r.ind@gmail.com</h3>
          </div>

          <div className='contatoIcons'>
            <span class="material-symbols-outlined">phone_forwarded</span>
            <h3 className='h1HeaderCont'>(48) 99159-5451</h3>
          </div>

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