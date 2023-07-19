import * as React from 'react';
import './titleBar.css';
import { BackButton } from './button';

interface IShortTitleBarProps {
  title: string | undefined;
  setting?: boolean;
  help?: boolean;
}


const settingIcon: JSX.Element = (
  <div className="ic_settings_24px-sKtgaf ic_settings_24px">
    <img
      className="ic_settings_24px-z3OtfL ic_settings_24px"
      src={`${process.env.PUBLIC_URL}/img/ic-settings-24px-1@1x.png`}
      alt="ic_settings_24px"
    />
  </div>
)

export const ShortTitleBar: React.FunctionComponent<IShortTitleBarProps> = (props) => {
  const { title, setting, help } = props;

  return (
    <div className="title-bar-layout">
      <div className="title-bar-container" 
        style={{
          // background: `url(${process.env.PUBLIC_URL}/img/bg-11@1x.png)`,
          // backgroundPosition: 'center',
          // backgroundSize: 'cover',
        }}
      >
        <div className="title-bar-title inter-semi-bold-white-18px">{title}</div>
        {/* <img className="title-bar-seperat-line seperat-line" src={process.env.PUBLIC_URL + "/img/seperat-line-11@1x.png"} alt="Seperat line" /> */}
        <div className="title-bar-ic_help_24px ic_help_24px">
            <img className="title-bar-ic_help_24px-img ic_help_24px" src={process.env.PUBLIC_URL + "/img/ic-help-24px-1@1x.png"} alt="ic_help_24px" />
        </div>
        <a href="javascript:history.back()">
          <div className="icon-arrow-left-container icon-arrow-left">
              <img
                className="icon-arrow-left-img icon-arrow-left"
                src={process.env.PUBLIC_URL + "/img/icon-arrow-left-12@1x.png"}
                alt="icon-arrow-left"
                />
          </div>
        </a>
        {setting === false ? null : (
          <div className="ic_settings_24px-container ic_settings_24px">
              <img
                className="ic_settings_24px-img ic_settings_24px"
                src={process.env.PUBLIC_URL + "/img/ic-settings-24px-1@1x.png"}
                alt="ic_settings_24px"
                />
          </div>
        )}
        {/* <img className="bg-MY4xZJ" src={process.env.PUBLIC_URL + "/img/bg-11@1x.png"} alt="BG" /> */}
      </div>
    </div>
  )
};

  // return (
  //   <div className="title-bar-P2i95W">
  //     {/* <img className="bg-sKtgaf bg" src={`${process.env.PUBLIC_URL}/img/bg-11@1x.png`} alt="BG" /> */}
  //     <img className="seperat-line-sKtgaf" src={`${process.env.PUBLIC_URL}/img/seperat-line-11@1x.png`} alt="Seperat line" />
  //     <div className="title-bar-content">
  //       <div className="master-collector-sKtgaf master-collector inter-semi-bold-white-18px">{title}</div>
  //       <a href="javascript:history.back()">
  //         <div className="icon-arrow-left-sKtgaf icon-arrow-left">
  //           <img
  //             className="icon-arrow-left-ywY1Kj icon-arrow-left"
  //             src={`${process.env.PUBLIC_URL}/img/icon-arrow-left-12@1x.png`}
  //             alt="icon-arrow-left"
  //           />
  //         </div>
  //       </a>
  //       {settingIcon}
  //       {/* <BackButton/> */}
  //       <div className="ic_help_24px-sKtgaf ic_help_24px">
  //         <img className="ic_help_24px-m7uK5a ic_help_24px" src={`${process.env.PUBLIC_URL}/img/ic-help-24px-1@1x.png`} alt="ic_help_24px" />
  //       </div>
  //     </div>
  //   </div>
  // );
