import React, {useMemo, useState, useCallback, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import AuthAPI from '../../api/AuthAPI';

import {useAppContext} from '../../context/AppContext';

import {useStyles} from './Login.styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        MyRoadmap
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignIn() {
  const navigate = useNavigate();

  const classes = useStyles();

  const authAPI = useMemo(() => {
    return new AuthAPI();
  }, []);

  const [state, setState] = useAppContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // warn: client side redirect
    if (state.auth.user) {
      navigate('/profile', {replace: true});
    }
  }, [state.auth.user, navigate]);

  const onSignIn = useCallback(async (e) => {
    e.preventDefault();

    try {
      const resp = await authAPI.login({
        email,
        password
      });

      setState((prev) => {
        return {
          ...prev,
          auth: {
            ...prev.auth,
            user: resp.user
          }
        }
      });

      navigate('/profile', {replace: true});
    } catch (e) {
      alert('Something went wrong!');
    }
  }, [navigate, authAPI, email, password, setState]);

  const onEmailChange = useCallback((e) => {
    setEmail(e.target.value.trim());
  }, []);

  const onPasswordChange = useCallback((e) => {
    setPassword(e.target.value.trim());
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            onChange={onEmailChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={onPasswordChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            onClick={onSignIn}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
