

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

const apiError = (status, message) => {
  const err = new Error(message);
  err.status = status;
  throw err;
};

export const mockLogin = async ({ email, password }) => {
  await delay(800);

  if (email === 'locked@mail.com') {
    throw apiError(423, 'Account is banned');
  }

  if (email !== 'info@mail.com' || password !== 'password') {
    throw apiError(401, 'Invalid credentials');
  }

  // считаем что все валидные двухфак
  return {
    requires2fa: true,
    tempToken: 'temp-token',
  };
};

export const mockVerify2FA = async ({ code }) => {
  await delay(600);

  if (code !== '654321') {
    throw apiError(400, 'Invalid code');
  }

  return {
    accessToken: 'jwt-token',
  };
};