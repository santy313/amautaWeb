'use client';

type Props = {
  onSignIn: () => Promise<void>;
};

const SignInButton = ({ onSignIn }: Props) => {
  return (
    <button
      onClick={() => onSignIn()}
      className="bg-primario text-secondary font-semibold hover:bg-[#c5bca3] px-6 py-2 rounded-lg"      
    >
      Iniciar sesión
    </button>
  );
};

export default SignInButton;
