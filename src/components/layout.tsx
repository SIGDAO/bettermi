import * as React from 'react';
import CSS from 'csstype';

export interface ICenterLayoutProps {
  bgImg ?: string;
  content ?: any;
}

export function CenterLayout (props: ICenterLayoutProps) {
  const {bgImg, content} = props;
  const centerLayoutStyle : CSS.Properties = {
    'backgroundImage': `url(${bgImg})`,
    'backgroundPosition': 'center',
    'height': '844px',
    'width': '390px',
    'margin': 'auto',
  }

  const hihi = () => {
    console.log(typeof content)
    return content
  }
  

  return (
    <div
      style={centerLayoutStyle} 
    >
      {typeof content === 'function' ? content() : content}
    </div>
  );
}
