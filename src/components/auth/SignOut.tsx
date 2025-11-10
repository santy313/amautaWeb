import { signOut } from '@logto/next/server-actions';
import SignOutButton from '@/components/botons/sign-out';
import { logtoServerConfig } from '@/app/logto';
import { getAccessToken } from '@logto/next/server-actions';
import GetAccessToken from '@/app/get-access-token';

export const LogingSignOut = () => {
  return (
    <>
      <SignOutButton
        onSignOut={async () => {
          
          await signOut(logtoServerConfig); 
        }}
      />{' '}
      <GetAccessToken
        onGetAccessToken={async () => {
          
          return getAccessToken(logtoServerConfig);
        }}
      />
    </>
  );
};
