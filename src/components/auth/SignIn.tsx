
import SignInButton from '@/components/botons/sign-in';
import { handleSignIn } from './actions/logto';


export default function LogingSignIn() {
  return <SignInButton onSignIn={handleSignIn} />;
}