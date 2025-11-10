'use server';

import { signIn, signOut, getAccessToken } from '@logto/next/server-actions';
import { logtoServerConfig } from '@/app/logto';

export async function handleSignIn() {
  await signIn(logtoServerConfig);
}

export async function handleSignOut() {
  await signOut(logtoServerConfig);
}

export async function handleGetAccessToken() {
  return getAccessToken(logtoServerConfig);
}
