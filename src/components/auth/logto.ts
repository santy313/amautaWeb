'use server';

import { logtoServerConfig } from "@/lib/logto";
import { getAccessToken, signIn, signOut } from "@logto/next/server-actions";



export async function handleSignIn() {
  await signIn(logtoServerConfig);
}

export async function handleSignOut() {
  await signOut(logtoServerConfig);
}

export async function handleGetAccessToken() {
  return getAccessToken(logtoServerConfig);
}
