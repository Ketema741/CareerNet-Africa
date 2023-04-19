import React, { useState } from 'react';

import CarouselItem from './CarouselItem';
import CarouselIndicator from './CarouselIndicator';
import svg1 from '../../assets/undraw_team_collaboration_re_ow29.svg';
import svg2 from '../../assets/undraw_feeling_proud_qne1.svg';
import svg3 from '../../assets/undraw_questions_re_1fy7.svg';
import svg4 from '../../assets/undraw_road_to_knowledge_m8s0.svg';

const cards = [svg1, svg2,svg3, svg4];
import { IoIosArrowBack } from 'react-icons/io';

function Carousel({ width, height, items }) {
    const [activeIndex, setActiveIndex] = useState(0);

    function handleNextItemBtn() {
        setActiveIndex((prev) => {
            return prev + 1 < items.length ? prev + 1 : prev;
        });
    }

    function handlePrevItemBtn() {
        setActiveIndex((prev) => {
            return prev - 1 >= 0 ? prev - 1 : prev;
        });
    }

    return (
        <div className="carousel-container">
            {activeIndex > 0 && (
                <button
                    className="carousel-btn-switch-card-left carousel-btn-switch-card"
                    onClick={handlePrevItemBtn}
                >
                    <IoIosArrowBack />
                </button>
            )}
            {cards?.map((item, index) => (
                <CarouselItem key={index} index={index} item={item} activeIndex={activeIndex} />
            ))}
            {activeIndex < items.length - 1 && (
                <button
                    className="carousel-btn-switch-card-right carousel-btn-switch-card"
                    onClick={handleNextItemBtn}
                >
                    <IoIosArrowBack
                        style={{
                            transform: 'rotate(180deg)',
                        }}
                    />
                </button>
            )}

            <CarouselIndicator
                activeIndex={activeIndex}
                length={items.length}
                onSetActiveIndex={(activeIndex) => {
                    setActiveIndex(activeIndex);
                }}
            />
        </div>
    );
}

export default Carousel;
