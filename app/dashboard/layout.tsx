import { SessionProvider } from 'next-auth/react';
import SideMenu from './components/SideMenu';
import { User, UserProvider } from '@/context/UserContext';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session) {
        redirect('/signin');
    }

    return (
        <SessionProvider>
            <UserProvider user={session.user as User}>
                <section className='bg-gradient-to-b from-base-100 to-base-200'>
                    <SideMenu pageContent={children} />
                </section>
            </UserProvider>
        </SessionProvider>
    );
}
