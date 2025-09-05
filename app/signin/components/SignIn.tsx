import React from 'react';
import RandomLogo from './RandomLogo';
import { signIn } from '@/lib/auth';

const signInGoogle = async () => {
    'use server';
    await signIn('google', { redirectTo: '/dashboard/explore' });
};

function SignIn() {
    return (
        <div className='flex flex-col items-center justify-evenly w-[450px] h-[500px] py-4 px-16 rounded-2xl bg-black/30 backdrop-blur-md border border-white/30 shadow-lg'>
            <RandomLogo />
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-4xl font-bold'>Sign In</h1>
                <p className='text-center'>
                    Download, contribute, and explore MCP tools by joining the
                    Tooli Community
                </p>
            </div>
            <form
                className='flex flex-col items-center gap-4 w-[100%]'
                action={signInGoogle}
            >
                <button
                    type='submit'
                    className='btn btn-primary rounded-2xl w-[100%] bg-white/20 backdrop-blur-md border border-white/30 shadow-lg hover:bg-white/50'
                >
                    Sign in with Google
                </button>
            </form>
        </div>
    );
}

export default SignIn;
