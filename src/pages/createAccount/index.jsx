import { Button, TextField } from "@mui/material";
import logo from './your.png'
import './style.css'


function CreateAccount() {
  return (
    <div className="containerAccount">
      <div className="containerColor">
        <h2>Criar conta</h2>
        <div className='imageLogo'>
          <img alt='logo do aplicativo' src={logo} width='150px' style={{ borderRadius: '100%' }}></img>
        </div>
        <div className="containerTextField">
          <TextField label='Nome:' variant='standard' size="small" />
          <TextField label='Sobrenome:' variant='standard' size="small" />
          <TextField label='E-mail:' variant='standard' size="small" type="email" />
          <TextField label='Usuário:' variant='standard' size="small" />
          <TextField label='Senha:' variant='standard' size="small" type="password" />
        </div>
        <div className="containerButton">
          <Button variant="contained">Criar</Button>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount;