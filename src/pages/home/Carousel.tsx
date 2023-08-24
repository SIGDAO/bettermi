import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ICarouselItemProps {
  src: string;
  link: string;
}

interface IImageSliderProps {
  slides: ICarouselItemProps[];
}

export const CarouselItem = ({ children }) => {
  return <div className="carousel">{children}</div>;
};

export const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (index) => {
    const totalCount = React.Children.count(children);
    if (index < 0) {
      index = totalCount - 1;
    } else if (index >= totalCount) {
      index = 0;
    }
    setActiveIndex(index);
  };

  useEffect(() => {
    let id = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 2000);

    return () => {
      clearInterval(id);
    };
  });

  return (
    <div className="CarouselWrapper">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 250}px)` }}
      >
        {children}
      </div>
      <div className="slide-dots-hH9Cww">
        {children.map((child, index) => {
          return (
            <div
              key={index}
              onClick={() => updateIndex(index)}
              className={`${activeIndex === index ? "x444-3SAlGE" : "x445-3SAlGE"}`}
            />
          );
        })}
      </div>
    </div>
  );
};

const ImageSlider: React.FunctionComponent<IImageSliderProps> = (props) => {
  const { slides } = props;
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <>
      <div className="special-scroll-hH9Cww">
        <div className="x25-hK4LUV">
          <Carousel>
            {slides.map((slide, index) => {
              return (
                <CarouselItem key={index}>
                  <Link to={slide.link}>
                    <img className='home-scroller-element-image' src={slide.src} alt="" />
                  </Link>
                </CarouselItem>
              )
            })}
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default ImageSlider;
