import * as React from 'react';
import CSS from 'csstype';

export interface ICenterLayoutProps {
  bgImg ?: string;
  content ?: JSX.Element;
}

export function CenterLayout (props: ICenterLayoutProps) {
  const {bgImg, content} = props;
  const centerLayoutStyle : CSS.Properties = {
    'backgroundImage': `url(${bgImg})`,
    'height': '844px',
    'width': '390px',
    'margin': 'auto',
  }
  

  return (
    <div
      style={centerLayoutStyle} 
    >
      {content}
    </div>
  );
}
