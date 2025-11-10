import SignOutButton from '@/components/botons/sign-out';
import GetAccessToken from '@/app/get-access-token';
import { handleGetAccessToken, handleSignOut } from './actions/logto';

export const LogingSignOut = () => {
  return (
    <>
      <SignOutButton onSignOut={handleSignOut} />
      <GetAccessToken onGetAccessToken={handleGetAccessToken} />
    </>
  );
};
