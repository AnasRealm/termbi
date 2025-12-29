// src/features/auth/pages/AuthPage.jsx
import { useState } from 'react';
import Modal from '../components/Modal.jsx';
import LoginForm from '../components/LoginForm.jsx';
import SignUpForm from '../components/SignUpForm.jsx';
import '../styles/modal.css';

export default function AuthPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <button onClick={() => setShowLogin(true)}>Login</button>
      <button onClick={() => setShowSignUp(true)}>Create an account</button>

      {showLogin && (
        <Modal onClose={() => setShowLogin(false)}>
          <LoginForm />
        </Modal>
      )}

      {showSignUp && (
        <Modal onClose={() => setShowSignUp(false)}>
          <SignUpForm />
        </Modal>
      )}
    </>
  );
}