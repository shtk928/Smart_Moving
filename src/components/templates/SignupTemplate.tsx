import { Box } from '@mui/material';
import Header from '../organisms/Header';
import AuthTitle from '../organisms/auth/AuthTitle';
import SignupForm from '../organisms/auth/SignupForm';

const SignupTemplate = () => {
  return (
    <Box height='100vh'>
      <Header />
      <AuthTitle value={'Sign up'} />
      <SignupForm />
    </Box>
  )
}

export default SignupTemplate;