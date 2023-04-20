import React from 'react'
import { FaCode, FaEye } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';

const Timeline = ({ timeline }) => {

    const colors = ['-purple-600', '-green-600', '-teal-700', '-blue-600']
    const icons = [IoMdTime, FaEye, FaCode]

    function getIconComponent(index) {
        const IconComponent = icons[index % icons.length];

        return (

            <div className={`bg${colors[index%colors.length]} p-2 rounded-full`}>

                <IconComponent className='text-white ' />
            </div>)
    }

    return (
        timeline.length > 0 ? (
            <div>
                <h3 className="text-2xl text-gray-700 font-bold mb-6 ml-3">Latest News</h3>
                <ol >
                    {timeline && timeline.map((timeline, index) => (
                        <li className={`border-l-2 border${colors[index % colors.length]}`}>
                            <div className="md:flex flex-start">
                                <div className="bg${colors[index%colors.length]} w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                                    {getIconComponent(index)}

                                </div>
                                <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                                    <div className="flex justify-between mb-4">
                                        <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">New Web Design</a>
                                        <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">04 / 02 / 2022</a>
                                    </div>
                                    <p className="text-gray-700 mb-6">
                                        {timeline}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))
                    }
                </ol>
            </div>
        ) : <div></div>
    )
}

export default Timeline