import { ChangeEvent, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';

const api = axios.create();

export const ForgotPassword = () => {
  const [value, setValue] = useState('');

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = async () => {
    await api.post('/account/forgot_password', { username: value });
  };

  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TextField
        type="email"
        name="email"
        label="Email"
        autoComplete="email"
        value={value}
        onChange={handleValueChange}
        id="password-reset-email-input"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        type="submit"
      >
        Confirm email
      </Button>
    </form>
  );
};
