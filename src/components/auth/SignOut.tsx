import { signOut } from '@logto/next/server-actions';
import SignOutButton from '@/components/botons/sign-out';
import { logtoConfig } from '@/app/logto';
import { getAccessToken } from '@logto/next/server-actions';
import GetAccessToken from '@/app/get-access-token';

export const LogingSignOut = () => {
  return (
    <>
      <SignOutButton
        onSignOut={async () => {
          'use server';
          await signOut(logtoConfig); // ✅ sin logtoConfig
        }}
      />{' '}
      <GetAccessToken
        onGetAccessToken={async () => {
          'use server';
          return getAccessToken(logtoConfig);
        }}
      />
    </>
  );
};
