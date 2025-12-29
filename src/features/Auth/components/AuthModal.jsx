import { useState } from 'react';
import Modal from './Modal';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

export default function AuthModal({ isOpen, onClose, initialMode = 'login' }) {
  const [mode, setMode] = useState(initialMode);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClose = () => {
    setMode('login');
    onClose();
  };

  const switchMode = (newMode) => {
    setIsAnimating(true);
    setTimeout(() => {
      setMode(newMode);
      setIsAnimating(false);
    }, 150);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className={`auth-container ${isAnimating ? 'animating' : ''}`}>
        {mode === 'login' ? (
          <LoginForm onSwitchToSignup={() => switchMode('signup')} />
        ) : (
          <SignUpForm onSwitchToLogin={() => switchMode('login')} />
        )}
      </div>
    </Modal>
  );
}