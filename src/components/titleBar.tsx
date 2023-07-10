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
    <div className="title-bar-y1jIXk">
      <img className="bg-MY4xZJ" src={process.env.PUBLIC_URL + "/img/bg-11@1x.png"} alt="BG" />
      <div className="icon-arrow-left-MY4xZJ icon-arrow-left">
          <img
            className="icon-arrow-left-Ltp61s icon-arrow-left"
            src={process.env.PUBLIC_URL + "/img/icon-arrow-left-12@1x.png"}
            alt="icon-arrow-left"
            />
      </div>
      <div className="marketplace-MY4xZJ inter-semi-bold-white-18px">Marketplace</div>
      <img className="seperat-line-MY4xZJ seperat-line" src={process.env.PUBLIC_URL + "/img/seperat-line-11@1x.png"} alt="Seperat line" />
      <div className="ic_help_24px-MY4xZJ ic_help_24px">
          <img className="ic_help_24px-iulOBO ic_help_24px" src={process.env.PUBLIC_URL + "/img/ic-help-24px-1@1x.png"} alt="ic_help_24px" />
      </div>
      <a href="javascript:history.back()">
          <div className="icon-arrow-left-lNR2sp icon-arrow-left">
            <img
                className="icon-arrow-left-06U3fF icon-arrow-left"
                src={process.env.PUBLIC_URL + "/img/icon-arrow-left-12@1x.png"}
                alt="icon-arrow-left"
                />
          </div>
      </a>
      <div className="ic_settings_24px-MY4xZJ ic_settings_24px">
          <img
            className="ic_settings_24px-rsLZAw ic_settings_24px"
            src={process.env.PUBLIC_URL + "/img/ic-settings-24px-1@1x.png"}
            alt="ic_settings_24px"
            />
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
