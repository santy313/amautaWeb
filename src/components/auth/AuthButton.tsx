'use client';

import { Button } from "@/components/ui/button";
import { handleSignIn, handleSignOut } from "./logto";



type AuthButtonProps = {
  type: "signIn" | "signOut";
  asChild?: boolean; // si quieremob envolver con <Link> u otro componente
};

const AuthButton = ({ type, asChild = false }: AuthButtonProps) => {
  const handleClick = async () => {    
    if (type === "signIn") {
      await handleSignIn();
    } else {
      await handleSignOut();
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant={type === "signIn" ? "secondary" : "default"}
      size="sm"
      asChild={asChild}
      className="cursor-pointer"
    >
      {type === "signIn" ? "Iniciar sesión" : "Cerrar sesión"}
    </Button>
  );
};

export default AuthButton;
