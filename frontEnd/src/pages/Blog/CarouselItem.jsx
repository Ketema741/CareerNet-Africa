import React, { useState } from 'react';




import { NavLink } from 'react-router-dom';

const Card = ({ index, activeIndex, item }) => {

  const [scaled, setScaled] = useState(false);
  const offset = (index - activeIndex) / 4;
  const direction = Math.sign(index - activeIndex);
  const absOffset = Math.abs(offset);

  const cssTransformProperties = `
    rotateY(calc(${offset} * 55deg))
    scaleY(calc(1 +  ${absOffset}  * -0.5))
    translateX(calc( ${direction} * -3.5rem))
    translateZ(calc( ${absOffset} * -35rem))
    scale(${scaled && index === activeIndex ? 6.5 : 1})
  `;

  const cssOpacity = `
    ${Math.abs(index - activeIndex) >= 3 ? '0' : '1'}`;

  const cssDisplay = `
    ${Math.abs(index - activeIndex) >= 3 ? 'none' : 'block'},
  `;

  return (
    <div
      className="carousel-item"
      style={{
        transform: cssTransformProperties,
        opacity: cssOpacity,
        display: cssDisplay,
        zIndex: `${scaled ? 100 : 1}`,
      }}

    >
      <div class=" flex flex-row items-start rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 ">
        <div class="relative w-full">
          <img src={item.icon} className="object-cover w-full mb-4 overflow-hidden shadow-sm max-h-56" />
        </div>

        <div className="pl-3 pb-1">
          <a class="text-lg font-semibold text-black sm:text-xl md:text-2xl">
            {item.title}
          </a>
          <p class="mt-2 text-sm text-black">
            {item.excerpt}
          </p>

          <div className="pt-1 pr-0 pb-0 pl-0">
            <div className="flex justify-center items-center flex-wrap p-2">
              <NavLink to='/blog-detail' className=" text-white hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 mb-1 rounded-lg" style={{ backgroundColor: '#000' }}>
                View
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default Card