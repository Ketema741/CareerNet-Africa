import React from 'react';
import { BsArrowDown } from 'react-icons/bs';
import feelingProud from '../../assets/undraw_feeling_proud_qne1.svg'


const HeaderCarousel = () => {
    return (
        <div class="overflow-hidden pt-32 md:py-12 xl:container m-auto px-6 md:px-12">
            <div aria-hidden="true" class="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 dark:opacity-20"></div>
            <div class="relative lg:flex lg:items-center lg:gap-12">
                <div class="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
                    <h1 class="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl dark:text-white">
                        Build in your way but with our experts
                        <span class="text-primary dark:text-primaryLight">Support.</span>
                    </h1>
                    <p class="mt-8 text-gray-600 dark:text-gray-300">
                        Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
                    </p>
                    <div class="mt-10 flex justify-center ">
                        <a href="#read">
                            <svg class="z-0 animate-bounce w-8 h-8">
                                <BsArrowDown class="text-3xl text-blue-800" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="overflow-hidden w-full lg:w-7/12 lg:-mr-16">
                    <img src={feelingProud} alt="feeling Proud" style={{width:'550px', height:"510px"}} />
                </div>
            </div>
        </div>
    )
};
export default HeaderCarousel;
