import { useUserContext } from '@/context/UserContext';
import React, { RefObject } from 'react';

interface ToolModalProps {
    ref: RefObject<HTMLDialogElement | null>;
}

function ToolModal({ ref }: ToolModalProps) {
    const user = useUserContext();

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
                            type='text'
                            placeholder='Tool Name'
                            className='input'
                        />
                        <input
                            type='text'
                            placeholder='Tool Description'
                            className='input'
                        />
                        <input
                            type='file'
                            className='file-input'
                        />
                        <div className='btn btn-sm'>Upload your tool</div>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default ToolModal;
