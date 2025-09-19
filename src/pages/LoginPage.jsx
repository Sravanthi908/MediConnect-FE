import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h1>MediConnect</h1>
          <p>Your healthcare companion</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;