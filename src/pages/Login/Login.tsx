import LoginForm from '../../components/auth/forms/loginForm/LoginForm'
import './Login.css'


const Login: React.FC = () => {
  return (
    <>
    <div className='main-login'>
    <LoginForm></LoginForm>
    </div>    
    </>
  )
}

export default Login