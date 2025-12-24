import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

import { useLoginMutation } from '../hooks/mutators';
import { ErrorText } from './ErrorText';

export const LoginForm = ({ onSuccess }) => {
  const mutation = useLoginMutation();

  const submit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    mutation.mutate(
      {
        email: form.get('email'),
        password: form.get('password'),
      },
      { onSuccess }
    );
  };

  return (
    <Card style={{ maxWidth: 420 }} className="mx-auto mt-5 p-4">
      <h4 className="mb-4 text-center">
        Sign in to your account
      </h4>

      <Form onSubmit={submit}>
        <Form.Group className="mb-3">
          <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <ErrorText error={mutation.error} />

        <Button
          type="submit"
          variant="primary"
          className="w-100 mt-3"
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? (
            <>
              <Spinner size="sm" /> Logging in…
            </>
          ) : (
            'Log in'
          )}
        </Button>
      </Form>
    </Card>
  );
};
