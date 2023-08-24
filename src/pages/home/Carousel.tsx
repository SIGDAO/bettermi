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
        <div className="slide-dots-hH9Cww">
          {children.map((child, index) => {
            return (
              <button
                key={index}
                onClick={() => updateIndex(index)}
                className={`${activeIndex === index ? "x444-3SAlGE" : "x445-3SAlGE"}`}
              >
                {index + 1}
              </button>
            );
          })}
          {/* <div className="x444-3SAlGE"></div>
          <div className="x445-3SAlGE"></div>
          <div className="x446-3SAlGE"></div> */}
        </div>
      </div>

      {/* <div>
        <button onClick={() => updateIndex(activeIndex - 1)}>Prev</button>
        {children.map((child, index) => {
          return (
            <button
              key={index}
              onClick={() => updateIndex(index)}
              className={`${activeIndex === index ? "active" : ""}`}
            >
              {index + 1}
            </button>
          );
        })}
        <button onClick={() => updateIndex(activeIndex + 1)}>Next</button>
      </div> */}
    </div>
  );
};

const ImageSlider: React.FunctionComponent<IImageSliderProps> = (props) => {
  const { slides } = props;

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
          {/* <Link to='https://www.bettermi.io/'>
            <div className="x01-78JfKY"><img className="x1" src={`${process.env.PUBLIC_URL}/img/home/1@1x.png`} alt="1" /></div>
          </Link>
          <Link to=''>
            <div className="x11-78JfKY"><img className="x1" src={`${process.env.PUBLIC_URL}/img/home/1@1x.png`} alt="1" /></div>
          </Link>
          <Link to=''>
            <div className="x21-78JfKY"><img className="x1" src={`${process.env.PUBLIC_URL}/img/home/1@1x.png`} alt="1" /></div>
          </Link> */}
        </div>
      </div>
      {/* <div className="slide-dots-hH9Cww">
        <div className="x444-3SAlGE"></div>
        <div className="x445-3SAlGE"></div>
        <div className="x446-3SAlGE"></div>
      </div> */}
    </>
  )
}

export default ImageSlider;

// import * as React from 'react';
// import { Link } from 'react-router-dom';

// interface IImageSliderProps {
//   slides: any[];
// }

// const ImageSlider: React.FunctionComponent<IImageSliderProps> = (props) => {
//   const { slides } = props;

//   return (
//     <div className="special-card-RoXPLo">
//     <div className="special-scroll-hH9Cww">
//       {slides.map((slide, index) => {
//         return (
//           <div className={index === 2 ? "home-scroller-element" : "home-scroller-element"} key={index}>
//             <img className='home-scroller-element-image' src={slide.src} alt="" />
//           </div>
//         )
//       })}

//       {/* <div className="x25-hK4LUV">
//       </div> */}
//     </div>
//     <div className="slide-dots-hH9Cww">
//       <div className="x444-3SAlGE"></div>
//       <div className="x445-3SAlGE"></div>
//       <div className="x446-3SAlGE"></div>
//     </div>
//     <div className="special_button-hH9Cww">
//       <div className="button_bg-9uK1Tx"></div>
//       <div className="ic_notifications-9uK1Tx ic_notifications">
//         <img
//           className="ic_notifications-6bhCAa ic_notifications"
//           src={`${process.env.PUBLIC_URL}/img/home/ic-notifications@1x.png`}
//           alt="ic_notifications"
//           />
//       </div>
//     </div>
//   </div>
// );
// };

// export default ImageSlider;
