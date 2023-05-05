import React, { useState, useContext, useEffect } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { HtmlEditor, Inject, Link, QuickToolbar, RichTextEditorComponent, Table, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import { useStateContext } from '../../../context/ContextProvider';
import { customToolbarSettings } from './Toolbar';
import BlogContext from '../../../context/blog/blogContext';



const CarForm = () => {
    const blogContext = useContext(BlogContext);
    const { current } = blogContext
    const { currentColor, setEditItem } = useStateContext();
    const [content, setContent] = useState('');

    const [Blogs, setBlog] = useState('')

    useEffect(() => {
        if (current !== null) {
            setBlog(current);
        } else {
            setBlog('');
        }
    }, [current]);


    const handleSubmit = (e) => {
        e.preventDefault();
        formData.description = content
        console.log(formData);

        // addItem(formData, images)
    };

    return (
        <div className=" bg-half-transparent fixed inset-0  flex justify-center items-center overflow-y-auto">
            <div className="mt-24 float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] max-w-screen w-full sm:w-full md:w-full lg:w-full xl:w-1/2 2xl:w-1/3 overflow-y-auto rounded-lg" style={{ width: "70%", height: "90%" }}>
                <div className="flex justify-between items-center p-4 m-4">
                    <p className="font-semibold text-lg" style={{ color: currentColor }}>Make A Blog Post</p>
                    <button
                        type="button"
                        onClick={() => setEditItem(false)}
                        style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
                        className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                    >
                        <MdOutlineCancel />
                    </button>
                </div>

                <div className="flex flex-col px-4 sm:px-6 md:px-8 lg:px-10 py-5 w-full">
                    <div className="mx-auto w-full">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <label
                                    htmlFor="quantity"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Detail Description
                                </label>
                                <RichTextEditorComponent change={args => setContent(args.value)} toolbarSettings={customToolbarSettings}>
                                    <Inject services={[HtmlEditor, Toolbar, Link, QuickToolbar, Table]} />
                                </RichTextEditorComponent>
                            </div>

                            <div>
                                <button type='submit'
                                    className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                    style={{ backgroundColor: currentColor }}
                                >
                                    {current ? "Update" : "Post"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CarForm;