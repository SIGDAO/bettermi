import * as React from 'react';
import { Link } from 'react-router-dom';

interface IImageSliderProps {
  slides: any[];
}

const ImageSlider: React.FunctionComponent<IImageSliderProps> = (props) => {
  const { slides } = props;

  return (
    <div className="special-card-RoXPLo">
    <div className="special-scroll-hH9Cww">
      {slides.map((slide, index) => {
        return (
          <div className="home-scroller-element" key={index}>
            <img className='home-scroller-element-image' src={slide.src} alt="" />
          </div>
        )
      })}

      {/* <div className="x25-hK4LUV">
      </div> */}
    </div>
    <div className="slide-dots-hH9Cww">
      <div className="x444-3SAlGE"></div>
      <div className="x445-3SAlGE"></div>
      <div className="x446-3SAlGE"></div>
    </div>
    <div className="special_button-hH9Cww">
      <div className="button_bg-9uK1Tx"></div>
      <div className="ic_notifications-9uK1Tx ic_notifications">
        <img
          className="ic_notifications-6bhCAa ic_notifications"
          src={`${process.env.PUBLIC_URL}/img/home/ic-notifications@1x.png`}
          alt="ic_notifications"
          />
      </div>
    </div>
  </div>
);
};

export default ImageSlider;
