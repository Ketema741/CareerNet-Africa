import { useState } from "react";

function BlogTabs() {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ["1st", "2nd ", "3rd", "4th"];

    return (
        <div className="bg-white opacity-80 rounded-xl shadow-lg ">
            <ul className="flex justify-center items-center my-4">
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={`cursor-pointer py-2 px-4 text-gray-500 border-b-8 ${activeTab === index ? "text-blue-500 border-blue-500" : ""
                            }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab}
                    </li>
                ))}
            </ul>

            <div className="wx-auto  p-16 text-center mx-auto border">
                <div className='text-black' style={{ display: activeTab === 0 ? "block" : "none" }}>
                    Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className='text-black' style={{ display: activeTab === 1 ? "block" : "none" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
                </div>
                <div className='text-black' style={{ display: activeTab === 2 ? "block" : "none" }}>
                    Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className='text-black' style={{ display: activeTab === 3 ? "block" : "none" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
                </div>
            </div>


            <div className="flex gap-4 justify-center border-t p-4">
                <button
                    className="py-2 px-4 border rounded-md border-blue-600 text-blue-600 cursor-pointer uppercase text-sm font-bold hover:bg-blue-500 hover:text-white hover:shadow"
                    onClick={() => setActiveTab(activeTab - 1)}
                    style={{ display: activeTab > 0 ? "block" : "none" }}
                >
                    Back
                </button>
                <button
                    className="py-2 px-4 border rounded-md border-blue-600 text-blue-600 cursor-pointer uppercase text-sm font-bold hover:bg-blue-500 hover:text-white hover:shadow"
                    onClick={() => setActiveTab(activeTab + 1)}
                    style={{ display: activeTab < tabs.length - 1 ? "block" : "none" }}
                >
                    Next
                </button>
            </div>
        </div>

    );
}

export default BlogTabs;