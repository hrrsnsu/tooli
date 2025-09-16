'use client';
import React, { useRef } from 'react';
import ToolModal from './ToolModal';

function Hero() {
    const modalRef = useRef<HTMLDialogElement>(null);
    const openModal = () => {
        if (modalRef && modalRef.current) {
            modalRef.current.showModal();
        }
    };

    return (
        <section className='hero'>
            <div className='hero-content items-start w-[100%] p-0'>
                <div>
                    <h1 className='text-4xl font-bold'>Explore Tooli</h1>
                    <p className='pt-6'>
                        Discover, utilize, and explore community created MCP
                        tools
                    </p>
                </div>
                <button
                    className='btn btn-primary rounded-4xl ml-auto'
                    onClick={openModal}
                >
                    Create a tool
                </button>
                <ToolModal ref={modalRef} />
            </div>
        </section>
    );
}

export default Hero;
