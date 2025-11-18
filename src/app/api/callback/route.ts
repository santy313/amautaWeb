import { handleSignIn } from '@logto/next/server-actions';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';
import { logtoServerConfig } from '../../../lib/logto';



export async function GET(request: NextRequest) {
  
  const searchParams = request.nextUrl.searchParams;

  console.log('searchParams: ',searchParams);

  await handleSignIn(logtoServerConfig, searchParams);

  redirect('/dashboard/main');
}
