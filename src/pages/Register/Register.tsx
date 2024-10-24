import RegisterForm from "../../components/auth/forms/registerForm/RegisterForm";
import "./Register.css";

const Register: React.FC = () => {
  return (
    <>
      <div className="main-register">
        <RegisterForm />
      </div>
    </>
  );
};

export default Register;
