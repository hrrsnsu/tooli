import Link from 'next/link';
import React from 'react';

interface SideMenuProps {
    pageContent: React.ReactNode;
}

function SideMenu({ pageContent }: SideMenuProps) {
    return (
        <div className='drawer'>
            <div className='drawer-open h-screen'>
                <ul className='menu gap-2 bg-gradient-to-b from-base-100 to-base-200 min-h-full w-80'>
                    <li>
                        <Link
                            href='/dashboard/user'
                            className='flex menu-item'
                        >
                            <div className='avatar'>
                                <div className='w-12 rounded-full'>
                                    <img src='https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp' />
                                </div>
                            </div>
                            <p className='text-2xl'>Harrison Su</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='menu-item'
                            href='/dashboard/explore'
                        >
                            explore
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='menu-item'
                            href='/dashboard/tools'
                        >
                            Toolbox
                        </Link>
                    </li>
                    <div>
                        <div className='divider m-0' />
                        <li>
                            <a className='menu-item'>Settings</a>
                        </li>
                    </div>
                </ul>
            </div>
            <div className='drawer-content h-screen overflow-auto'>
                <div className='p-2 pl-0'>{pageContent}</div>
            </div>
        </div>
    );
}

export default SideMenu;
