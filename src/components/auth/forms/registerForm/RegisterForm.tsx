import { useRegisterForm } from '../../../../hooks/auth/useRegisterForm';
import RedirectionAlert from '../../../common/alerts/RedirectionAlert';
import { ErrorMessage } from '../../../common/errors/ErrorMessage';
import FormInput from '../../../common/inputs/FormInput';

const RegisterForm: React.FC = () => {

  const { formData, handleChange, handleSubmit,handleBlur, isRegistered, errors,serverErrors } = useRegisterForm();

  if (isRegistered) {
    return (
      <RedirectionAlert children={null} actionType="register"/>
    );
  }

  return (
    <>
      <div className="form-container">
        {serverErrors && <ErrorMessage message={serverErrors} />}
        <h2>Create Your Account</h2>
        <form onSubmit={handleSubmit}>

          <FormInput
            id="3"
            label="Username"
            name="username"
            value={formData.username}
            type="text"
            required={true}
            placeholder=""
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.username && <ErrorMessage message={errors.username}/>}

          <FormInput
            id="4"
            label="Email"
            name="email"
            value={formData.email}
            type="email"
            required={true}
            placeholder=""
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <FormInput
            id="5"
            label="Password"
            name="password"
            value={formData.password}
            type="password"
            required={true}
            placeholder=""
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && <ErrorMessage message={errors.password}/>}

          <FormInput
            id="6"
            label="Confirm Password"
            name="passwordVerify"
            value={formData.passwordVerify}
            type="password"
            required={true}
            placeholder=""
            onChange={handleChange}
            onBlur={handleBlur}

          />
          {errors.passwordVerify && <ErrorMessage message={errors.passwordVerify}/>}

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;


