import { signIn } from '@logto/next/server-actions';
import SignInButton from '@/components/botons/sign-in';
import { logtoConfig } from '@/app/logto';

export const LogingSignIn = () => {
  return (
    <SignInButton
      onSignIn={async () => {
        'use server';
        await signIn(logtoConfig); // ✅ sin logtoConfig
      }}
    />
  );
};
