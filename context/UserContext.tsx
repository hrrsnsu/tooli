'use client';
import { createContext, useContext } from 'react';

export type User = {
    id?: string;
    name?: string;
    email?: string;
    emailVerified?: Date;
    image?: string;
};

const UserContext = createContext<User | undefined>(undefined);

export function UserProvider({
    user,
    children,
}: {
    user: User | null;
    children: React.ReactNode;
}) {
    return (
        <UserContext.Provider value={user || undefined}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useContext(UserContext);
}
