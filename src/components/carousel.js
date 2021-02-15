import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";

const Carousel = ({ planets }) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
        <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={3}
                gutter={20}
                leftChevron={<button>{"<"}</button>}
                rightChevron={<button>{">"}</button>}
                chevronWidth={chevronWidth}
            >
                {planets}
            </ItemsCarousel>
        </div>
    );
};

export default Carousel;
