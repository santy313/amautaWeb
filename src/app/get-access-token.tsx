'use client';

type Props = {
  onGetAccessToken: () => Promise<string>;
};

const GetAccessToken = ({ onGetAccessToken }: Props) => {
  return (    
    <button
      onClick={async () => {
        const token = await onGetAccessToken();        
      }}
    />


  );
};

export default GetAccessToken;