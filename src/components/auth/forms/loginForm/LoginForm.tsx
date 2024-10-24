import { useLoginForm } from "../../../../hooks/auth/useLoginForm";
import FormInput from "../../../common/inputs/FormInput";
import { ErrorMessage } from "../../../common/errors/ErrorMessage";
import RedirectionAlert from "../../../common/alerts/RedirectionAlert";

const LoginForm: React.FC = () => {
  
  const { handleChange, handleSubmit, handleBlur, isLogged, formData, errors,serverErrors } =
    useLoginForm();



  if (isLogged) {
    return <RedirectionAlert actionType="login" children={null} delay={0} />;
  }

  return (
    <div className="form-container">
      {serverErrors && <ErrorMessage message={serverErrors} />}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          id="1"
          name="username"
          label="Username"
          value={formData.username}
          type="text"
          required={true}
          placeholder=""
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.username && <ErrorMessage message={errors.username} />}

        <FormInput
          id="2"
          name="password"
          label="Password"
          type="password"
          value={formData.password}
          required={true}
          placeholder=""
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && <ErrorMessage message={errors.password} />}

        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
