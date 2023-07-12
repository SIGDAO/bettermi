import * as React from 'react';
import './selfieToEarn.css'
import { CenterLayout } from '../../components/layout';
import MenuBar from '../../components/menuBar';
import { ShortTitleBar } from '../../components/titleBar';
import { Link } from 'react-router-dom';

interface ISelfieToEarnProps {
}

const SelfieToEarn: React.FunctionComponent<ISelfieToEarnProps> = (props) => {
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
            <div className="november-2020-isyuxj inter-normal-white-12px">November 2020</div>
            <div className="x54-isyuxj"></div>
            <div className="m-isyuxj inter-normal-white-14px">M</div>
            <div className="x55-isyuxj"></div>
            <div className="t-isyuxj t inter-normal-white-14px">T</div>
            <div className="x56-isyuxj"></div>
            <div className="w-isyuxj inter-normal-white-14px">W</div>
            <div className="x57-isyuxj"></div>
            <div className="t-CALwXo t inter-normal-white-14px">T</div>
            <div className="x58-isyuxj"></div>
            <div className="f-isyuxj inter-normal-white-14px">F</div>
            <div className="x59-isyuxj"></div>
            <div className="s-isyuxj s inter-normal-white-14px">S</div>
            <div className="x60-isyuxj"></div>
            <div className="s-CALwXo s inter-normal-white-14px">S</div>
            <div className="x61-isyuxj"></div>
            <div className="x26-isyuxj x26 inter-normal-cape-cod-12px">26</div>
            <div className="x62-isyuxj"></div>
            <div className="x27-isyuxj x27 inter-normal-cape-cod-12px">27</div>
            <div className="x63-isyuxj"></div>
            <div className="x28-isyuxj x28 inter-normal-cape-cod-12px">28</div>
            <div className="x64-isyuxj"></div>
            <div className="x29-isyuxj x29 inter-normal-cape-cod-12px">29</div>
            <div className="x65-isyuxj"></div>
            <div className="x30-isyuxj x30 inter-normal-cape-cod-12px">30</div>
            <div className="x66-isyuxj"></div>
            <div className="x31-isyuxj inter-normal-cape-cod-12px">31</div>
            <div className="x67-isyuxj"></div>
            <div className="x68-isyuxj"></div>
            <div className="x2-isyuxj x2 inter-normal-white-12px">2</div>
            <div className="x69-isyuxj"></div>
            <div className="x3-isyuxj x3 inter-normal-white-12px">3</div>
            <div className="x70-isyuxj"></div>
            <div className="x71-isyuxj"></div>
            <div className="x5-isyuxj x5 inter-normal-white-12px">5</div>
            <div className="x72-isyuxj"></div>
            <div className="x6-isyuxj x6 inter-normal-white-12px">6</div>
            <div className="x73-isyuxj"></div>
            <div className="x74-isyuxj"></div>
            <div className="x8-isyuxj inter-normal-white-12px">8</div>
            <div className="x75-isyuxj"></div>
            <div className="x9-isyuxj inter-normal-white-12px">9</div>
            <div className="x76-isyuxj"></div>
            <div className="x10-isyuxj x10 inter-normal-white-12px">10</div>
            <div className="x77-isyuxj"></div>
            <div className="x11-isyuxj inter-normal-white-12px">11</div>
            <div className="x78-isyuxj"></div>
            <div className="x12-isyuxj inter-normal-white-12px">12</div>
            <div className="x79-isyuxj"></div>
            <div className="x13-isyuxj inter-normal-white-12px">13</div>
            <div className="x80-isyuxj"></div>
            <div className="x14-isyuxj inter-normal-white-12px">14</div>
            <div className="x81-isyuxj"></div>
            <div className="x15-isyuxj inter-normal-white-12px">15</div>
            <div className="x82-isyuxj"></div>
            <div className="x16-isyuxj inter-normal-white-12px">16</div>
            <div className="x83-isyuxj"></div>
            <div className="x17-isyuxj inter-normal-white-12px">17</div>
            <div className="x84-isyuxj"></div>
            <div className="x18-isyuxj inter-normal-white-12px">18</div>
            <div className="x85-isyuxj"></div>
            <div className="x19-isyuxj inter-normal-white-12px">19</div>
            <div className="x86-isyuxj"></div>
            <div className="x20-isyuxj inter-normal-white-12px">20</div>
            <div className="x87-isyuxj"></div>
            <div className="x21-isyuxj x21 inter-normal-white-12px">21</div>
            <div className="x88-isyuxj"></div>
            <div className="x22-isyuxj inter-normal-white-12px">22</div>
            <div className="x89-isyuxj"></div>
            <div className="x23-isyuxj inter-normal-electric-violet-12px">23</div>
            <div className="x90-isyuxj"></div>
            <div className="x24-isyuxj inter-normal-electric-violet-12px">24</div>
            <div className="x91-isyuxj"></div>
            <div className="x25-isyuxj inter-normal-electric-violet-12px">25</div>
            <div className="x92-isyuxj"></div>
            <div className="x26-CALwXo x26 inter-normal-electric-violet-12px">26</div>
            <div className="x93-isyuxj"></div>
            <div className="x27-CALwXo x27 inter-normal-white-12px">27</div>
            <div className="x94-isyuxj"></div>
            <div className="x28-CALwXo x28 inter-normal-white-12px">28</div>
            <div className="x95-isyuxj"></div>
            <div className="x29-CALwXo x29 inter-normal-white-12px">29</div>
            <div className="x96-isyuxj"></div>
            <div className="x30-CALwXo x30 inter-normal-white-12px">30</div>
            <div className="x97-isyuxj"></div>
            <div className="x98-isyuxj"></div>
            <div className="x2-CALwXo x2 inter-normal-cape-cod-12px">2</div>
            <div className="x99-isyuxj"></div>
            <div className="x3-CALwXo x3 inter-normal-cape-cod-12px">3</div>
            <div className="x100-isyuxj"></div>
            <div className="x4-isyuxj x4 inter-normal-cape-cod-12px">4</div>
            <div className="x101-isyuxj"></div>
            <div className="x5-CALwXo x5 inter-normal-cape-cod-12px">5</div>
            <div className="x102-isyuxj"></div>
            <div className="x6-CALwXo x6 inter-normal-cape-cod-12px">6</div>
            <div className="x4-CALwXo x4 inter-normal-white-12px">4</div>
            <div className="x1-isyuxj x1 inter-normal-cape-cod-12px">1</div>
            <div className="x1-CALwXo x1 inter-normal-cape-cod-12px">1</div>
            <div className="x7-isyuxj inter-normal-white-12px">7</div>
            <img className="arrow-down-isyuxj arrow-down" src="img/selfieToEarn/arrow-down@1x.png" alt="arrow-down" />
            <img className="arrow-down-CALwXo arrow-down" src="img/selfieToEarn/arrow-down-1@1x.png" alt="arrow-down" />
            <img className="bmi-goal-isyuxj bmi-goal" src="img/selfieToEarn/bmi-goal-2@1x.png" alt="BMI Goal" />
        </div>
        <div className="x16212-MUU5YC">
            <div className="x888-tDsdhu"></div>
            <div className="records-tDsdhu inter-semi-bold-white-18px">Records</div>
            <div className="view-all-tDsdhu">View all</div>
            <div className="rewards_card-tDsdhu rewards_card">
              <div className="x889-zmcmFt"></div>
              <div className="x16215-zmcmFt">
                  <div className="x300-1iHrN3 x300 inter-medium-white-15px">27/11/2023</div>
                  <div className="gems-1iHrN3 gems inter-normal-cadet-blue-12px-2">
                    <span className="span0-QduyxW inter-normal-cadet-blue-12px">25.5 kg/m²</span>
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
            <div className="rewards_card-nmlI20 rewards_card">
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
            </div>
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
