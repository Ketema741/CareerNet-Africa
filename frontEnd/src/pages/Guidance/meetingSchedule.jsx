import React from 'react'
import { schedule } from '../../data/dummy';
import meeting from './meetingSchedule';
import { Link } from 'react-router-dom'
const meetingSchedule = () => {
    return (
        <div className="container pt-24">
            <div className="flex flex-col justify-center items-center m-8">
                <p className="text-2xl font-bold">Looking For Advice and Guidance</p>
                <p className="text-lg font-semibold text-gray-500">Join our guidance program</p>
            </div>
            <div className="flex m-3 flex-wrap justify-center gap-1 items-center text-center">
                {schedule.map((meeting) => (

                    <div key={meeting.title} className="bg-white h-64 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-52  p-5 pt-9 rounded-2xl " >
                        <button
                            type="button"
                            style={{ color: meeting.iconColor, backgroundColor: meeting.iconBg }}
                            className="text-4xl opacity-0.9 rounded-full  p-7 hover:drop-shadow-xl"
                        >
                        <Link to='https://react-icons.github.io/react-icons/search?q=read'> 

                            {meeting.icon}
                        </Link>
                        </button>
                        <p className="mt-3">
                            <p className="text-md font-semibold">{meeting.title}</p>
                            <p className={`text-sm text-gray-400 m-2`}>
                                with {meeting.person}
                            </p>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default meetingSchedule