'use client';

type Props = {
  onGetAccessToken: () => Promise<string>;
};

const GetAccessToken = ({ onGetAccessToken }: Props) => {
  return (
    <button
      onClick={async () => {
        const token = await onGetAccessToken();
        console.log(token);
      }}
    >
      Get access token (see console log)
      <br /> 
      Hola mundo como estas?
    </button>
  );
};

export default GetAccessToken;