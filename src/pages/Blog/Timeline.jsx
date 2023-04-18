import React from 'react'
import { FaCode, FaEye } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';

const Timeline = () => {
    return (
        <div>
            <h3 className="text-2xl text-gray-700 font-bold mb-6 ml-3">Latest News</h3>

            <ol >
                <li className="border-l-2 border-purple-600">
                    <div className="md:flex flex-start">
                        <div className="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                            <FaCode className='text-white'/>
                        </div>
                        <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                            <div className="flex justify-between mb-4">
                                <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">New Web Design</a>
                                <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">04 / 02 / 2022</a>
                            </div>
                            <p className="text-gray-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.</p>
                            <button type="button" className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">Preview</button>
                            <button type="button" className="inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true">See demo</button>
                        </div>
                    </div>
                </li>
                <li className="border-l-2 border-green-600">
                    <div className="md:flex flex-start">
                        <div className="bg-green-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                            <IoMdTime className='text-white' />
                        </div>
                        <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                            <div className="flex justify-between mb-4">
                                <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">21 000 Job Seekers</a>
                                <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">12 / 01 / 2022</a>
                            </div>
                            <p className="text-gray-700 mb-6">Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto recusandae natus sapiente sit nam eaque, consectetur porro molestiae ipsam an deleniti.</p>
                            <button type="button" className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">Preview</button>
                            <button type="button" className="inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true">See demo</button>
                        </div>
                    </div>
                </li>
                <li className="border-l-2 border-green-600">
                    <div className="md:flex flex-start">
                        <div className="bg-green-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                            <FaEye className='text-white'/>
                        </div>
                        <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                            <div className="flex justify-between mb-4">
                                <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">Awesome Employers</a>
                                <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">21 / 12 / 2021</a>
                            </div>
                            <p className="text-gray-700 mb-6">Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit natus! Eum corporis illum nihil officiis tempore. Excepturi illo natus libero sit doloremque, laborum molestias rerum pariatur quam ipsam necessitatibus incidunt, explicabo.</p>
                            <button type="button" className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">Preview</button>
                            <button type="button" className="inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true">See demo</button>
                        </div>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default Timeline