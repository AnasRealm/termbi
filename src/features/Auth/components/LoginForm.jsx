import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogin } from '../services/useAuth';
import { authApi } from '../services/authApi';

export default function LoginForm({ onSwitchToSignup }) {
  
  const schema = Yup.object().shape({
    email: Yup.string().email("Email is not valid").required("Email is required"),
    password: Yup.string().min(6, "Password is too short").required("Password is required"),
  });

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loginMutation = useLogin();

  const onSubmit = (data) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="auth-form">
      <h2 className="auth-title">Log in</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" {...register("email")} />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" {...register("password")} />
          <p className="error">{errors.password?.message}</p>
        </div>

        <button type="submit" className="auth-btn primary" disabled={loginMutation.isPending}>
          {loginMutation.isPending ? 'Logging in...' : 'Log in'}
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        <button type="button" className="social-btn google" onClick={authApi.googleLogin}>
          <img src="https://developers.google.com/identity/images/g-logo.png" alt="" />
          Continue with Google
        </button>

        <button type="button" className="social-btn facebook" onClick={authApi.facebookLogin}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877f2">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Continue with Facebook
        </button>

        <div className="switch-auth">
          <span>New to termbi? </span>
          <button type="button" onClick={onSwitchToSignup}>Create new account</button>
        </div>
      </form>
    </div>
  );
}