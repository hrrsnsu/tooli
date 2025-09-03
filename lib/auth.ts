import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { prisma } from './prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';

export const { handlers, signIn, signOut, auth } = NextAuth({
    session: {
        strategy: 'jwt',
        maxAge: 1 * 24 * 60 * 60,
    },
    adapter: PrismaAdapter(prisma),
    providers: [Google],
});
