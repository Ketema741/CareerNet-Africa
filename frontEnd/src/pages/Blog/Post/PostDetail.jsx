import React, { useState } from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { AiOutlinePlus } from 'react-icons/ai';

import { useStateContext } from '../../../context/ContextProvider';
import PostForm from './PostForm'
import Posts from './Posts'


const PostDetail = () => {
    const {
        currentColor,
        editItem,
        setEditItem,
    } = useStateContext();

    const handleRadioChange = (e) => {
        setUploadType(e.target.value);
    };


    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10">
            <div className="flex flex-wrap items-top">
                <div className="w-full z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
                    <div className="flex justify-center items-center space-x-5 mt-4 text-lg font-medium uppercase p-4  border-b tracking-wide  border-gray-200" style={{ color: currentColor }}>
                        <div>
                            Make A Post
                        </div>
                        <div className="flex justify-center mt-4">
                            <TooltipComponent content="Add Post" position="topCenter">
                                <button type="button" onClick={() => setEditItem(true)} className="mb-4 rounded-full hover:bg-blue-600 p-3 hover:shadow-lg" style={{ backgroundColor: currentColor }}>
                                    <span className=" font-medium text-white">
                                        <AiOutlinePlus />
                                    </span>
                                </button>
                            </TooltipComponent>
                        </div>
                    </div>
                    <Posts />


                </div>
            </div>
            {editItem &&
                <div className='w-full'>
                    <PostForm />
                </div>
            }
        </div>
    );
}
export default PostDetail