import RegisterForm from '../components/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h1>MediConnect</h1>
          <p>Create your account</p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;