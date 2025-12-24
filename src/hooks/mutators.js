import { useMutation } from '@tanstack/react-query';
import { login, verify2FA } from '../api/authApi';

export const useLoginMutation = () =>
  useMutation({
    mutationFn: login,
  });

export const use2FAMutation = () =>
  useMutation({
    mutationFn: verify2FA,
  });
