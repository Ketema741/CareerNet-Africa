import React, { useState } from 'react';

import CarouselItem from './CarouselItem';
import CarouselIndicator from './CarouselIndicator';
import card1 from '../data/product1.jpg';
import card2 from '../data/product2.jpg';
import card3 from '../data/product3.jpg';
import card4 from '../data/product4.jpg';

const cards = [card1, card2,card3, card4];
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
