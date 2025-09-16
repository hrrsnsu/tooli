'use client';
import { useUserContext } from '@/context/UserContext';
import React, { RefObject, useRef } from 'react';
interface ToolModalProps {
    ref: RefObject<HTMLDialogElement | null>;
}

function ToolModal({ ref }: ToolModalProps) {
    const user = useUserContext();
    const toolNameRef = useRef<HTMLInputElement>(null);
    const toolDescriptionRef = useRef<HTMLInputElement>(null);
    const toolFileRef = useRef<HTMLInputElement>(null);

    const validateForm = () => {
        const allFilled = [toolNameRef, toolDescriptionRef].every(
            (ref) => !!ref.current?.value
        );
        if (allFilled) {
            return true;
        }
        return false;
    };

    const createTool = async () => {
        if (validateForm()) {
            try {
                const res = await fetch('/api/tool', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: toolNameRef.current?.value as string,
                        description: toolDescriptionRef.current
                            ?.value as string,
                        user: user,
                    }),
                });
                const json = await res.json();
                console.log(json);
            } catch (err) {
                console.error(err);
            }
        } else {
            console.error('invalid form');
        }
    };

    return (
        <div>
            <dialog
                className='modal'
                ref={ref}
            >
                <div className='modal-box'>
                    <form method='dialog'>
                        <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
                            ✕
                        </button>
                    </form>
                    <div className='flex flex-col gap-4 justify-between items-center'>
                        <input
                            ref={toolNameRef}
                            type='text'
                            placeholder='Tool Name'
                            className='input'
                        />
                        <input
                            ref={toolDescriptionRef}
                            type='text'
                            placeholder='Tool Description'
                            className='input'
                        />
                        <input
                            ref={toolFileRef}
                            type='file'
                            className='file-input'
                        />
                        <div
                            className='btn btn-sm'
                            onClick={createTool}
                        >
                            Upload your tool
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default ToolModal;
