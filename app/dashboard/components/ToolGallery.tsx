import React from 'react';
import ToolCard from './ToolCard';

function ToolGallery() {
    return (
        <div className='flex flex-col'>
            <section className='hero mb-4'>
                <div className='hero-content items-start w-[100%] p-0 flex-col'>
                    <h1 className='text-2xl font-bold'>Trending Tools</h1>
                    <div className='flex gap-4'>
                        <div className='badge rounded-4xl border-1 border-transparent hover:border-white'>
                            Coding
                        </div>
                        <div className='badge rounded-4xl border-1 border-transparent hover:border-white'>
                            Productivity
                        </div>
                        <div className='badge rounded-4xl border-1 border-transparent hover:border-white'>
                            Design
                        </div>
                    </div>
                </div>
            </section>
            <section className='join'>
                <ToolCard />
                <ToolCard />
            </section>
            <section className='join'>
                <ToolCard />
                <ToolCard />
            </section>
        </div>
    );
}

export default ToolGallery;
