'use client';

import { useAuth } from '@/app/hooks/useAuth';
import AuthButton from './AuthButton';
import { debug } from 'console';



export default function AuthButtons() {
    const isLogged = useAuth();
    if (isLogged === null) return null;    
    return (
        <div className="flex gap-2">
            {!isLogged && <AuthButton type="signIn" />}
            {isLogged && <AuthButton type="signOut" />}
        </div>
    );
}
