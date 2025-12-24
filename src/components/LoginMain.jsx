import { useState } from 'react';
import { LoginForm } from '../components/LoginForm';
import { TwoFactorForm } from './TwoFA';


export const LoginPage = () => {
  const [step, setStep] = useState('login');

  if (step === '2fa') {
    return (
      <TwoFactorForm
        onSuccess={() => alert('Logged in')}
      />
    );
  }

  return (
    <LoginForm
      onSuccess={(data) => {
        if (data.requires2fa) {
          setStep('2fa');
        } else {
          alert('Logged in');
        }
      }}
    />
  );
};
