import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

import { use2FAMutation } from '../hooks/mutators';
import { ErrorText } from './ErrorText';

export const TwoFactorForm = ({ onSuccess }) => {
  const mutation = use2FAMutation();

  const submit = (e) => {
    e.preventDefault();

    mutation.mutate(
      { code: e.target.code.value },
      { onSuccess }
    );
  };

  return (
    <Card style={{ maxWidth: 420 }} className="mx-auto mt-5 p-4">
      <h4 className="mb-2 text-center">
        Two-Factor Authentication
      </h4>

      <p className="text-center text-muted">
        Enter the 6-digit code from the authenticator app
      </p>

      <Form onSubmit={submit}>
        <Form.Group className="mb-3">
          <Form.Control
            name="code"
            inputMode="numeric"
            maxLength={6}
            placeholder="••••••"
            className="text-center fs-4"
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
              <Spinner size="sm" /> Verifying…
            </>
          ) : (
            'Continue'
          )}
        </Button>
      </Form>
    </Card>
  );
};
