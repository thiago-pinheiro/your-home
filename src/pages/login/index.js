import './style.css'
import logo from './your.png'

function Login() {
  return (
    <div className='divLogin'>

      <div className='imageLogo'>
        <img alt='logo do aplicativo' src={logo} width='150px' style={{ borderRadius: '100%' }}></img>
      </div>

      <div className='divTextField'>
        <input className='loginInput' placeholder='usuário' />
        <input className='loginInput' placeholder='senha' />
      </div>

      <div className='divHelp'>
        <div className='divInputRemember'>
          <input type='checkbox' className='inputRemember' />
          <p className='labelRemember'>Lembrar usuário</p>
        </div>
        <a href='/' className='linkForgotPassword'>Esqueci minha senha</a>
      </div>

      <div className='divButton'>
        <button className='buttonLogin'>Login</button>
        <button className='buttonFirstAcess'>Primeiro Acesso ?</button>
      </div>

      <div className='footer'>
        <a href='/' className='linkForgotPassword'>Termos de uso</a>
      </div>

    </div>
  );
}

export default Login;