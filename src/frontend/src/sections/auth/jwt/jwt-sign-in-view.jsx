'use client';

import {z as zod} from 'zod';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import {useRouter} from 'src/routes/hooks';

import {useBoolean} from 'src/hooks/use-boolean';

import {Iconify} from 'src/components/iconify';
import {Field, Form} from 'src/components/hook-form';

import {useAuthContext} from 'src/auth/hooks';
import {signInWithPassword} from 'src/auth/context/jwt';
import Link from "@mui/material/Link";
import {paths} from "../../../routes/paths";
import {RouterLink} from "../../../routes/components";

// ----------------------------------------------------------------------

export const SignInSchema = zod.object({
  email: zod
    .string()
    .min(1, {message: 'Email is required!'}),
  password: zod
    .string()
    .min(1, {message: 'Password is required!'})
});

// ----------------------------------------------------------------------

export function JwtSignInView() {
  const router = useRouter();

  const {checkUserSession} = useAuthContext();

  const [errorMsg, setErrorMsg] = useState('');

  const password = useBoolean();

  const defaultValues = {
    email: '',
    password: '',
  };

  const methods = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: {isSubmitting},
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signInWithPassword({email: data.email, password: data.password});
      await checkUserSession?.();

      router.refresh();
    } catch (error) {
      console.error(error);
      setErrorMsg("Wrong email or password!");
    }
  });

  const renderHead = (
    <Stack spacing={1.5} sx={{mb: 5}}>
      <Typography variant="h5">Sign in to your account</Typography>
      <Typography sx={{color: 'text.secondary'}}>Enter your details below</Typography>

    </Stack>
  );
  const renderBottom = (
    <Stack spacing={1.5} sx={{mt: 1}}>
      <Typography variant="body2" sx={{color: 'text.secondary'}}>
        Don’t have an account? &nbsp;
        <Link href={paths.auth.signUp} component={RouterLink} variant="subtitle2"> Create Account</Link>
      </Typography>
    </Stack>
  )

  const renderForm = (
    <Stack spacing={3}>
      <Field.Text name="email" label="Email" InputLabelProps={{shrink: true}}/>

      <Stack spacing={1.5}>
        <Field.Text
          name="password"
          label="Password"
          placeholder="6+ characters"
          type={password.value ? 'text' : 'password'}
          InputLabelProps={{shrink: true}}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={password.onToggle} edge="end">
                  <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}/>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        loadingIndicator="Sign in..."
      >
        Sign in
      </LoadingButton>
    </Stack>
  );

  return (
    <>
      {renderHead}
      {!!errorMsg && (
        <Alert severity="error" sx={{mb: 3}}>
          {errorMsg}
        </Alert>
      )}

      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </Form>
      {renderBottom}
    </>

  );
}
