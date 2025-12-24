import Alert from 'react-bootstrap/Alert';

export const ErrorText = ({ error }) => {
  if (!error) return null;

  let message = 'Something went wrong';

  switch (error.status) {
    case 401:
      message = 'Invalid email or password';
      break;
    case 423:
      message = 'Account is locked';
      break;
    case 429:
      message = 'Too many attempts. Try later';
      break;
    case 400:
      message = 'Invalid authentication code';
      break;
    case 410:
      message = 'Code expired';
      break;
    default:
      break;
  }

  return (
    <Alert variant="danger" className="mt-3">
      {message}
    </Alert>
  );
};
