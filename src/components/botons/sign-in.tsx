'use client';

type Props = {
  onSignIn: () => Promise<void>;
};

const SignInButton = ({ onSignIn }: Props) => {
  return (
    <button
      onClick={() => onSignIn()}
      className="px-4 py-2 bg-secundario text-primary rounded-lg hover:bg-primario hover:text-white transition-all"
    >
      Iniciar sesión
    </button>
  );
};

export default SignInButton;
