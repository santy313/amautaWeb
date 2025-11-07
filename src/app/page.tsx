import { getAccessToken, getLogtoContext, signIn, signOut } from '@logto/next/server-actions';
import SignIn from '../components/botons/sign-in';

import { logtoConfig } from './logto';
import GetAccessToken from './get-access-token';
import SignOut from '../components/botons/sign-out';

export default async function Home() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  return (
    <main>
      <h1>Hello Logto.</h1>
      <div>
        {isAuthenticated ? (
          <>
            <SignOut
              onSignOut={async () => {
                'use server';

                await signOut(logtoConfig);
              }}
            />{' '}
            <GetAccessToken
              onGetAccessToken={async () => {
                'use server';

                return getAccessToken(logtoConfig);
              }}
            />
          </>
        ) : (
          <SignIn
            onSignIn={async () => {
              'use server';

              await signIn(logtoConfig);
            }}
          />
        )}
      </div>
      {claims && (
        <div>
          <h2>Claims:</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(claims).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{String(value)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}