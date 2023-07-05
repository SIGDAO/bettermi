import * as React from 'react';
import CSS from 'csstype';

export interface ICenterLayoutProps {
  bgImg ?: boolean | string;
  content ?: any;
  desktop ?: boolean;
}

export function CenterLayout (props: ICenterLayoutProps) {
  const {bgImg, content, desktop} = props;
  let height : string | number
  let width : string | number;
  const mobile = process.env.REACT_APP_MOBILE === 'true'


  // display in iphone 12 pro size

  if (mobile) { 
    height = "844px";
    width = "390px";
  // display in ipad air size
  } else {
    height = "1180px";
    width = "820px";
  }



  const bgStyle : CSS.Properties = mobile ? 
  {
    'background': `transparent`,
  }
  :
  {
    'background': `linear-gradient(to bottom right, #221D4B, #171717)`,
    'width': '100vw',
    'height': '100vh',
    'overflow': 'hidden',
  }

  const centerLayoutStyle : CSS.Properties = {
    // 'backgroundPosition': 'center',
    'height': `${height}`, // ipad size
    'width': `${width}`, // ipad size
    'margin': 'auto',
  }

  if (typeof bgImg === 'string') {
    centerLayoutStyle.backgroundImage = `url(${bgImg})`
    centerLayoutStyle.backgroundPosition = 'center'
  } else if (mobile) {
    // centerLayoutStyle.backgroundImage = `url(${process.env.PUBLIC_URL}/img/bg.png)`
    // centerLayoutStyle.backgroundPosition = 'center'
    centerLayoutStyle.background = `linear-gradient(to bottom right, #221D4B, #171717)`
  }


  const hihi = () => {
    console.log(process.env.MOBILE)
    return content
  }
  

  return (
    <div style={bgStyle}>
      <div style={centerLayoutStyle}>
        {typeof content === 'function' ? content() : content}
      </div>
    </div>
  );
}
