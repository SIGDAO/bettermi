import React, { useState, useEffect } from 'react';
import './selfieToEarn.css'
import { CenterLayout } from '../../components/layout';
import MenuBar from '../../components/menuBar';
import { ShortTitleBar } from '../../components/titleBar';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import './calendar.css'


interface ISelfieToEarnProps {
}

const SelfieToEarn: React.FunctionComponent<ISelfieToEarnProps> = (props) => {
  const [value, setValue] = useState(new Date());
  // demo data
  const bmi_testing = 25.5;

  function onChange(nextValue: any) {
    setValue(nextValue);
  }

  useEffect(() => {
    console.log(value);
  }, [value]);

  // const Custom..

  // height: 360px;
  const displaySelectedDateRecord = () => {

    return (
      <div className="rewards_card-tDsdhu rewards_card">
        <div className="x889-zmcmFt"></div>
        <div className="x16215-zmcmFt">
            <div className="x300-1iHrN3 x300 inter-medium-white-15px">{value.toLocaleDateString('en-GB')}</div>
            <div className="gems-1iHrN3 gems inter-normal-cadet-blue-12px-2">
              <span className="span0-QduyxW inter-normal-cadet-blue-12px">{bmi_testing} kg/m²</span>
            </div>
        </div>
        <div className="icon-arrow-left-zmcmFt icon-arrow-left-container">
            <div className="selfie-to-earn-img-container">
              <img
                className="icon-arrow-left-XaN6DJ icon-arrow-left-img"
                src="img/selfieToEarn/icon-arrow-left-6@1x.png"
                alt="icon-arrow-left"
                />
            </div>
            <div className="gems-XaN6DJ gems">
              <span className="span0-TIYBsY inter-normal-keppel-12px">-1.0 kg/m²</span>
            </div>
        </div>
        <div className="sigdao-score-zmcmFt sigdao-score">
            <div className="x10-gfpjFx x10 inter-semi-bold-keppel-14px">+2.625</div>
            <div className="signdao_tokengradient">
              <div className="x441"></div>
              <div className="x442"></div>
              <img className="x880" src="img/selfieToEarn/file---880-1x-png-10@1x.png" alt="880" />
            </div>
        </div>
      </div>
  
    )
  }

  const content: JSX.Element = (
    <div className="screen">
      <div className="bettermidapp-selfie-to-earn-1">
        <ShortTitleBar title='Selfie to Earn'/>
        <div className="bmi_-status-MUU5YC">
            <div className="current-kgm2-C5Ye0d inter-normal-cadet-blue-12px-2">
              <span className="span0-b6eiBJ inter-normal-cadet-blue-12px">CURRENT (KG/M²)</span>
            </div>
            <div className="start-kgm2-C5Ye0d inter-normal-cadet-blue-12px-2">
              <span className="span0-OeIZvd inter-normal-cadet-blue-12px">START (KG/M²)</span>
            </div>
            <img className="bmi-goal-C5Ye0d bmi-goal" src="img/selfieToEarn/bmi-goal-1@1x.png" alt="BMI Goal" />
            <img className="bmi-goal-HuKS2x bmi-goal" src="img/selfieToEarn/bmi-goal-1@1x.png" alt="BMI Goal" />
            <div className="x255-C5Ye0d">25.5</div>
            <div className="x265-C5Ye0d">26.5</div>
            <img className="x598-C5Ye0d" src="img/selfieToEarn/file---598@1x.png" alt="598" />
        </div>
        <div className="x6-MUU5YC x6">
            <div className="bmi-tracking-diagram-NWkD1c">
              <img className="bmi-goal-FXAneT bmi-goal" src="img/selfieToEarn/bmi-goal-2@1x.png" alt="BMI Goal" />
              <img className="bmi-goal-qhySjD bmi-goal" src="img/selfieToEarn/bmi-goal-2@1x.png" alt="BMI Goal" />
              <img className="x11684-FXAneT" src="img/selfieToEarn/file---11684@1x.png" alt="11684" />
              <div className="x16178-FXAneT">
                  <div className="bmi-goal-oWOsEy bmi-goal">
                    <div className="healthy-mgQn5v inter-normal-keppel-12px">Healthy</div>
                    <div className="x876-mgQn5v"></div>
                  </div>
                  <div className="today-bmi-oWOsEy today-bmi">
                    <div className="underweight-WRxJDX">Underweight</div>
                    <div className="x877-WRxJDX x877"></div>
                  </div>
                  <div className="today-bmi-A4cSad today-bmi">
                    <div className="overweight-ny26Tj inter-normal-neon-carrot-12px">Overweight</div>
                    <div className="x877-ny26Tj x877"></div>
                  </div>
                  <div className="today-bmi-wSx6aj today-bmi">
                    <div className="obese-VjCO7I">Obese</div>
                    <div className="x877-VjCO7I x877"></div>
                  </div>
              </div>
              <div className="x16179-FXAneT">
                  <div className="x16177-0Ljt8o">
                    <img className="x604-GfALGr" src="img/selfieToEarn/file---604@1x.png" alt="604" />
                    <img className="x11674-GfALGr" src="img/selfieToEarn/file---11674@1x.png" alt="11674" />
                    <img className="x11675-GfALGr" src="img/selfieToEarn/file---11675@1x.png" alt="11675" />
                    <img className="x11676-GfALGr" src="img/selfieToEarn/file---11676@1x.png" alt="11676" />
                    <div className="x21-GfALGr x21 inter-normal-white-12px">21</div>
                    <div className="x27-GfALGr x27 inter-normal-white-12px">27</div>
                    <div className="x33-GfALGr inter-normal-white-12px">33</div>
                  </div>
                  <div className="timeline-track-0Ljt8o">
                    <div className="mean-bmi-kgm2-QHKlEy">
                        <span className="span0-MSSTKa inter-normal-white-12px">Mean BMI (kg/m²)</span>
                    </div>
                    <div className="x1-w-QHKlEy">1W</div>
                    <div className="x1-m-QHKlEy inter-normal-cadet-blue-12px-3">1M</div>
                    <div className="x1-y-QHKlEy inter-normal-cadet-blue-12px-3">1Y</div>
                    <div className="x5-y-QHKlEy inter-normal-cadet-blue-12px-3">5Y</div>
                  </div>
                  <img className="x11677-0Ljt8o" src="img/selfieToEarn/file---11677-1x-png@1x.png" alt="11677" />
                  <div className="x16180-0Ljt8o">
                    <div className="x447-VISwYj"></div>
                    <div className="x448-VISwYj"></div>
                    <div className="x449-VISwYj"></div>
                    <div className="x450-VISwYj"></div>
                    <div className="x451-VISwYj"></div>
                    <div className="x452-VISwYj"></div>
                    <div className="x453-VISwYj"></div>
                    <div className="mon-VISwYj inter-normal-cadet-blue-14px">Mon</div>
                  </div>
                  <div className="tue-0Ljt8o inter-normal-cadet-blue-14px">Tue</div>
                  <div className="wed-0Ljt8o inter-normal-cadet-blue-14px">Wed</div>
                  <div className="sun-0Ljt8o">Sun</div>
                  <div className="sat-0Ljt8o inter-normal-cadet-blue-14px">Sat</div>
                  <div className="fri-0Ljt8o inter-normal-cadet-blue-14px">Fri</div>
                  <div className="thu-0Ljt8o inter-normal-cadet-blue-14px">Thu</div>
              </div>
            </div>
        </div>
        <div className="calender-MUU5YC">
          <Calendar
            calendarType='Arabic'
            onChange={onChange}
            value={value}
            locale='en-US'
            minDetail='decade'
            // allowPartialRange={true}
            // selectRange={true}
          />
        </div>
        <div className="x16212-MUU5YC">
            <div className="x888-tDsdhu"></div>
            <div className="records-tDsdhu inter-semi-bold-white-18px">Records</div>
            <div className="view-all-tDsdhu">View all</div>
            <div className="rewards_card-container">
              {displaySelectedDateRecord()}
            </div>
            {/* <div className="rewards_card-nmlI20 rewards_card">
              <div className="x890-Mpkab1"></div>
              <div className="x16214-Mpkab1">
                  <div className="x300-KvHhju x300 inter-medium-white-15px">26/11/2023</div>
                  <div className="gems-KvHhju gems inter-normal-cadet-blue-12px-2">
                    <span className="span0-qBnOdc inter-normal-cadet-blue-12px">26.5 kg/m²</span>
                  </div>
              </div>
              <div className="sigdao-score-Mpkab1 sigdao-score">
                  <div className="x10-yKXlxp x10 inter-semi-bold-keppel-14px">+5.25</div>
                  <div className="signdao_tokengradient">
                    <div className="x441"></div>
                    <div className="x442"></div>
                    <img className="x880" src="img/selfieToEarn/file---880-1x-png-10@1x.png" alt="880" />
                  </div>
              </div>
              <div className="icon-arrow-left-Mpkab1 icon-arrow-left-container">
                  <img
                    className="icon-arrow-left-asZgGJ icon-arrow-left-img"
                    src="img/selfieToEarn/icon-arrow-left-7@1x.png"
                    alt="icon-arrow-left"
                    />
                  <div className="gems-asZgGJ gems inter-normal-neon-carrot-12px-2">
                    <span className="span0-3MEdcV inter-normal-neon-carrot-12px">+0.1 kg/m²</span>
                  </div>
              </div>
            </div>
            <div className="rewards_card-e93Hp2 rewards_card">
              <div className="x891-fZ4snx"></div>
              <div className="x16216">
                  <div className="x300-JpIuV4 x300 inter-medium-white-15px">25/11/2023</div>
                  <div className="gems-JpIuV4 gems inter-normal-cadet-blue-12px-2">
                    <span className="span0-DlW6Hx inter-normal-cadet-blue-12px">26.5 kg/m²</span>
                  </div>
              </div>
              <div className="sigdao-score-fZ4snx sigdao-score">
                  <div className="x10-Fxih9v x10 inter-semi-bold-keppel-14px">+5.25</div>
                  <div className="signdao_tokengradient">
                    <div className="x441"></div>
                    <div className="x442"></div>
                    <img className="x880" src="img/selfieToEarn/file---880-1x-png-10@1x.png" alt="880" />
                  </div>
              </div>
              <div className="icon-arrow-left-fZ4snx icon-arrow-left-container">
                  <img
                    className="icon-arrow-left-mIHqmY icon-arrow-left-img"
                    src="img/selfieToEarn/icon-arrow-left-7@1x.png"
                    alt="icon-arrow-left"
                    />
                  <div className="gems-mIHqmY gems inter-normal-neon-carrot-12px-2">
                    <span className="span0-Jw0rRx inter-normal-neon-carrot-12px">+0.1 kg/m²</span>
                  </div>
              </div>
            </div>
            <div className="rewards_card-eHSbp5 rewards_card">
              <img className="x11686-PPXLJ6" src="img/selfieToEarn/file---11686@1x.png" alt="11686" />
              <div className="x16216">
                  <div className="x300-oZpTdt x300 inter-medium-white-15px">25/11/2023</div>
                  <div className="gems-oZpTdt gems inter-normal-cadet-blue-12px-2">
                    <span className="span0-cxh0Oo inter-normal-cadet-blue-12px">26.5 kg/m²</span>
                  </div>
              </div>
              <div className="icon-arrow-left-PPXLJ6 icon-arrow-left-container">
                  <img
                    className="icon-arrow-left-oQDfpq icon-arrow-left-img"
                    src="img/selfieToEarn/icon-arrow-left-7@1x.png"
                    alt="icon-arrow-left"
                    />
                  <div className="gems-oQDfpq gems inter-normal-neon-carrot-12px-2">
                    <span className="span0-xYigu8 inter-normal-neon-carrot-12px">+0.1 kg/m²</span>
                  </div>
              </div>
              <div className="sigdao-score-PPXLJ6 sigdao-score">
                  <div className="x10-lqjDaA x10 inter-semi-bold-keppel-14px">+5.25</div>
                  <div className="signdao_tokengradient">
                    <div className="x441"></div>
                    <div className="x442"></div>
                    <img className="x880" src="img/selfieToEarn/file---880-1x-png-10@1x.png" alt="880" />
                  </div>
              </div>
            </div> */}
        </div>
        <Link to="/takeSelfie">
          <div className="button_-selfie-to-earn-MUU5YC">
              <p className="take-a-selfie-to-earn-u8P1YH inter-semi-bold-white-15px">Take a Selfie to Earn!</p>
              <img className="ic_selfie-u8P1YH" src="img/selfieToEarn/ic-selfie-1@1x.png" alt="ic_selfie" />
              <img className="ic_arrow_forward-u8P1YH" src="img/selfieToEarn/ic-arrow-forward-1@1x.png" alt="ic_arrow_forward" />
          </div>
        </Link>
        <MenuBar/>
      </div>
    </div>
  )

  return (
    <CenterLayout
      content={content}
      bgImg={false}
    />
  );
};

export default SelfieToEarn;
