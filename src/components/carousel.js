import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";

const Carousel = ({ planets }) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 10;
    return (
        <div style={{ padding: `0 ${chevronWidth}%` }}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={3}
                gutter={22}
                leftChevron={
                    <button
                        style={{
                            width: "30px",
                            height: "30px",
                            marginRight: "40px",
                            border: "none",
                            borderRadius: "4px",
                            backgroundColor: "white",
                        }}
                    >
                        {"<"}
                    </button>
                }
                rightChevron={
                    <button
                        style={{
                            width: "30px",
                            height: "30px",
                            marginLeft: "40px",
                            border: "none",
                            borderRadius: "4px",
                            backgroundColor: "white",
                        }}
                    >
                        {">"}
                    </button>
                }
                chevronWidth={chevronWidth}
            >
                {planets}
            </ItemsCarousel>
        </div>
    );
};

export default Carousel;
