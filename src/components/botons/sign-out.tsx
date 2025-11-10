'use client';

type Props = {
  onSignOut: () => Promise<void>;
};

const SignOutButton = ({ onSignOut }: Props) => {
  return (
    <button
      onClick={() => onSignOut()}
      className="px-4 py-2 transition-all"
    >
      Cerrar sesión
    </button>
  );
};

export default SignOutButton;
