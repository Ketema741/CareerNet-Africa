import { useState } from "react";

function BlogTabs({ steps }) {
    const [activeTab, setActiveTab] = useState(0);
    
    const tabs = steps && steps.length ? Array.from({ length: steps.length }, (_, index) => `Step ${index + 1}`) : [];

    return (

        tabs ? (
            <div className="bg-white opacity-80 rounded-xl shadow-lg ">
                <ul className="flex justify-center items-center my-4">
                    {tabs && tabs.map((tab, index) => (
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
                    {steps && steps.map((element, index) => (

                        <div className='text-black' style={{ display: activeTab === index ? "block" : "none" }}>
                            {element}
                        </div>
                    ))}

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

        ) : <div></div>



    );
}

export default BlogTabs;