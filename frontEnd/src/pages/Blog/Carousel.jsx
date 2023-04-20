import React, { useState } from 'react';

import CarouselItem from './CarouselItem';
import CarouselIndicator from './CarouselIndicator';

import svg1 from '../../assets/undraw_team_collaboration_re_ow29.svg';
import svg2 from '../../assets/undraw_online_learning_re_qw08.svg'
import svg3 from '../../assets/undraw_studying_re_deca.svg'
import svg4 from '../../assets/undraw_virtual_assistant_jjo2.svg'

const items = [
    {
        icon: svg1,
        excerpt: "Team collaboration has become a vital aspect of modern-day work culture.  it's easier than ever...",
        title: "Study Smarter, Not Harder",
    },
    {
        icon: svg2,
        excerpt: "Online study tools such as Quizlet, Duolingo, and Khan Academy have made it easier than ever before to access educational content and study resources from anywhere in the world. With these tools, learners can enhance their knowledge and skills in a particular subject, ...       ",
        title: "Revolutionize Your Study Habits",
    },
    {
        icon: svg3,
        excerpt: "The internet has revolutionized the way we access information and  These platforms offer a wealth of resources to help learners achieve their goals and enhance their knowledge and skills...",
        title: "Taking Your Education to the Next Level",
    },
    {
        icon: svg4,
        excerpt: "Online learning has become increasingly popular in recent years, thanks to the accessibility and convenience it offers. Platforms such as edX, Coursera, and Udemy offer a wide range of online courses in various subjects, enabling learners to access quality education from anywhere in the world...",
        title: "Unleashing Your Learning Potential",
    },
    
]
const cards = [svg1, svg2, svg3, svg4];
import { IoIosArrowBack } from 'react-icons/io';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    function handleNextItemBtn() {
        setActiveIndex((prev) => {
            return prev + 1 < cards.length ? prev + 1 : prev;
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
            {items.map((item, index) => (
                <CarouselItem key={index} index={index} item={item} activeIndex={activeIndex} />
            ))}
            {activeIndex < cards.length - 1 && (
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
                length={cards.length}
                onSetActiveIndex={(activeIndex) => {
                    setActiveIndex(activeIndex);
                }}
            />
        </div>
    );
}

export default Carousel;
