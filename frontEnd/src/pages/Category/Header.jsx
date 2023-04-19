import React from 'react'
import { Link } from 'react-router-dom'
import Selection from '../../assets/undraw_selection_re_ycpo.svg'
const Category = () => {
    return (
        <div className="py-6">
            <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
                <div className="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
                    <div className="md:5/12 lg:w-1/2">
                        <img
                            src={Selection}
                            alt="image"
                            width=""
                            height=""
                        />
                    </div>
                    <div className="md:7/12 lg:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                            Category Name
                        </h2>
                        <p className="my-8 text-gray-600 dark:text-gray-300">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>

                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category