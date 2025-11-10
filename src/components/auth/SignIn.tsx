import { signIn } from '@logto/next/server-actions';
import SignInButton from '@/components/botons/sign-in';
import { logtoServerConfig } from '@/app/logto';

export const LogingSignIn = () => {
  return (
    <SignInButton
      onSignIn={async () => {
        'use server';
        await signIn(logtoServerConfig); 
      }}
    />
  );
};
