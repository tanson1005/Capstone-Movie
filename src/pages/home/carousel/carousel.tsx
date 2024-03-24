// ** Đổi tên khi import
import { Carousel as AntCarousel } from "antd";
import { useRef } from "react";

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};

export function Carousel() {
    const carouselRef = useRef(null);

    const onChange = (currentSlide: number) => {};

    return (
        <>
            <button
                onClick={() => {
                    // @ts-ignore
                    carouselRef.current.prev();
                }}
            >
                Back
            </button>
            <button
                onClick={() => {
                    // @ts-ignore
                    carouselRef.current.next();
                }}
            >
                Next
            </button>

            <AntCarousel
                ref={carouselRef}
                autoplay
                autoplaySpeed={2000}
                afterChange={onChange}
            >
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </AntCarousel>
        </>
    );
}
