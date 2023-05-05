import React, { useState, useContext } from 'react';
import { FaRegHeart, FaRegComment, FaShareAlt } from 'react-icons/fa';
import { BsEye } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { useStateContext } from '../../../context/ContextProvider';
import { DeleteWarning } from '../../../components';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title} position="BottomCenter">
        <button
            type="button"
            onClick={() => customFunc()}
            style={{ color }}
            className="relative text-xl rounded-full p-1 hover:bg-light-gray"
        >
            <span
                style={{ background: dotColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
            />
            {icon}
        </button>
    </TooltipComponent>
);


const Posts = () => {
   ;
    const { currentColor } = useStateContext();
    const [showWarning, setShowWarning] = useState(false);
    const { setEditItem } = useStateContext();

    const handleDelete = () => {
        console.log('delete');

    };

    const handleEdit = () => {
        setEditItem(true)
    };

    const handleClick = () => {
        console.log('click');
    };

    return (
        <div className="flex w-full flex-wrap content-center justify-center p-12 bg-gray-200">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                <div className="w-50 bg-white p-3 rounded-xl shadow-xl ">
                    <img className="h-52 w-full object-cover" src="https://i.imgur.com/5yeBVeM.jpeg" alt="example image 1" />
                    <div className='py-4'>
                        Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
                    </div>
                    <ul className="mt-3 flex flex-wrap">
                        <li className="flex space-x-2 mr-auto">

                            <NavButton
                                title="Delete"
                                customFunc={() => setShowWarning(true)}
                                color={currentColor}
                                icon={<FaTrashAlt />}
                            />
                            <NavButton
                                title="Edit"
                                customFunc={handleEdit}
                                color={currentColor}
                                icon={<FiEdit />}
                            />
                        </li>
                        <li className="mr-2">
                            <a href="#" className="flex text-gray-400 hover:text-gray-600">
                                <NavButton
                                    title="View"
                                    customFunc={handleClick}
                                    color={currentColor}
                                    icon={<BsEye />}
                                />
                                20
                            </a>
                        </li>
                        <li className="mr-2">
                            <a href="#" className="flex text-gray-400 hover:text-gray-600">
                                <NavButton
                                    title="Comment"
                                    customFunc={handleClick}
                                    color={currentColor}
                                    icon={<FaRegComment />}
                                />
                                3
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex text-gray-400 hover:text-gray-600">
                                <NavButton
                                    title="Share"
                                    color={currentColor}
                                    customFunc={handleClick}
                                    icon={<FaShareAlt />}
                                />
                                3
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-50 bg-white p-3 rounded-xl shadow-xl">
                    <img className="h-52 w-full object-cover" src="https://i.imgur.com/5yeBVeM.jpeg" alt="example image 1" />
                    <div className='py-4'>
                        Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!

                    </div>
                    <ul className="mt-3 flex flex-wrap">
                        <li className="flex space-x-2 mr-auto">

                            <NavButton
                                title="Delete"
                                customFunc={() => setShowWarning(true)}
                                color={currentColor}
                                icon={<FaTrashAlt />}
                            />
                            <NavButton
                                title="Edit"
                                customFunc={handleEdit}
                                color={currentColor}
                                icon={<FiEdit />}
                            />
                        </li>
                        <li className="mr-2">
                            <a href="#" className="flex text-gray-400 hover:text-gray-600">
                                <NavButton
                                    title="View"
                                    customFunc={handleClick}
                                    color={currentColor}
                                    icon={<BsEye />}
                                />
                                20
                            </a>
                        </li>
                        <li className="mr-2">
                            <a href="#" className="flex text-gray-400 hover:text-gray-600">
                                <NavButton
                                    title="Comment"
                                    color={currentColor}
                                    icon={<FaRegComment />}
                                />
                                3
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex text-gray-400 hover:text-gray-600">
                                <NavButton
                                    title="Share"
                                    customFunc={handleClick}
                                    color={currentColor}
                                    icon={<FaShareAlt />}
                                />
                                3
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-50 bg-white p-3 rounded-xl shadow-xl">
                    <img className="h-52 w-full object-cover" src="https://i.imgur.com/5yeBVeM.jpeg" alt="example image 1" />
                    <div className='py-4'>
                        Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!

                    </div>
                    <ul className="mt-3 flex flex-wrap">
                        <li className="flex space-x-2 mr-auto">

                            <NavButton
                                title="Delete"
                                customFunc={() => setShowWarning(true)}
                                color={currentColor}
                                icon={<FaTrashAlt />}
                            />
                            <NavButton
                                title="Edit"
                                customFunc={handleEdit}
                                color={currentColor}
                                icon={<FiEdit />}
                            />
                        </li>
                        <li className="mr-2">
                            <a href="#" className="flex text-gray-400 hover:text-gray-600">
                                <NavButton
                                    title="View"
                                    customFunc={handleClick}
                                    color={currentColor}
                                    icon={<BsEye />}
                                />
                                20
                            </a>
                        </li>
                        <li className="mr-2">
                            <a href="#" className="flex text-gray-400 hover:text-gray-600">
                                <NavButton
                                    title="Comment"
                                    customFunc={handleClick}
                                    color={currentColor}
                                    icon={<FaRegComment />}
                                />
                                3
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex text-gray-400 hover:text-gray-600">
                                <NavButton
                                    title="Share"
                                    customFunc={handleClick}
                                    color={currentColor}
                                    icon={<FaShareAlt />}
                                />
                                3
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="w-50 bg-white p-3 rounded-xl shadow-xl">
                    <img className="h-52 w-full object-cover" src="https://i.imgur.com/fjXFX93.jpeg" alt="example image 2" />
                    <div className='py-4'>
                        Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!

                    </div>
                    <ul className="mt-3 flex flex-wrap">
                        <li className="flex space-x-2 mr-auto">

                            <NavButton
                                title="Delete"
                                customFunc={() => setShowWarning(true)}
                                color={currentColor}
                                icon={<FaTrashAlt />}
                            />
                            <NavButton
                                title="Edit"
                                customFunc={handleEdit}
                                color={currentColor}
                                icon={<FiEdit />}
                            />
                        </li>
                        <li className="mr-2">
                            <a href="#" className="flex text-gray-400 hover:text-gray-600">
                                <NavButton
                                    title="View"
                                    customFunc={handleClick}
                                    color={currentColor}
                                    icon={<BsEye />}
                                />
                                20
                            </a>
                        </li>
                        <li className="mr-2">
                            <a href="#" className="flex text-gray-400 hover:text-gray-600">
                                <NavButton
                                    title="Comment"
                                    customFunc={handleClick}
                                    color={currentColor}
                                    icon={<FaRegComment />}
                                />
                                3
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex text-gray-400 hover:text-gray-600">
                                <NavButton
                                    title="Share"
                                    customFunc={handleClick}
                                    color={currentColor}
                                    icon={<FaShareAlt />}
                                />
                                3
                            </a>
                        </li>
                    </ul>
                </div>
                {showWarning && <DeleteWarning handleDelete={handleDelete} setShowWarning={setShowWarning} />}

            </div>
        </div>
    );
}
export default Posts