import * as React from 'react';
import { CenterLayout } from '../../components/layout';
import './setting.css';
import { Button } from 'reactstrap';
import { useContext } from 'react';
import { AppContext } from '../../redux/useContext';
import { GenericExtensionWallet } from '@signumjs/wallets';
import { useNavigate } from 'react-router-dom';
import { store } from '../../redux/reducer';
interface ISettingProps {
}

const Setting: React.FunctionComponent<ISettingProps> = (props) => {
  const {appName,Wallet,Ledger} = useContext(AppContext);
  const navigate = useNavigate();
  const logout = () => {
    console.log(Wallet);
     store.dispatch({ type: 'USER_LOGOUT' });
    Wallet.Extension = new GenericExtensionWallet();
    console.log(Wallet);
    navigate('/');
    
  }
  const content: JSX.Element = (
    <div className="screen">
          <div className="bettermidapp-settings-1">
      {/* <a href="bettermidapp-profile-edit-1.html"><img className="bg-7DUKxJ" src="img/setting/bg-9@1x.png" alt="BG" /> </a> */}
      <div className="bars-status-bar-i-phone-light-7DUKxJ">
        <div className="frame-xpaCij"></div>
        {/* <div className="status-bar-xpaCij">
          <div className="battery-KqfEf3">
            <div className="border-7gOqqF"></div>
            <img className="cap-7gOqqF" src="img/setting/cap-1@1x.png" alt="Cap" />
            <div className="capacity-7gOqqF"></div>
          </div>
          <img className="wifi-KqfEf3" src="img/setting/wifi-1@1x.png" alt="Wifi" />
          <img className="cellular-connection-KqfEf3" src="img/setting/cellular-connection-1@1x.png" alt="Cellular Connection" />
          <div className="time-style-KqfEf3">
            <div className="time-XixtqU sfprotext-semi-bold-white-15px">9:41</div>
          </div>
        </div> */}
      </div>
      <div className="settings-7DUKxJ settings">
        <img className="layer-azNBHQ" src="img/setting/layer-1@1x.png" alt="Layer" />
        <div className="cards-azNBHQ">
          <div className="x16185-VD8XDI">
            <div className="x31">
              <div className="membership-nkDCBT inter-normal-cadet-blue-15px">Membership</div>
            </div>
            <div className="x16184-RJpkbo x16184">
              <div className="discord-sDy3yd inter-normal-white-15px">Discord</div>
            </div>
            <img
              className="icon-ionic-ios-arrow-forward"
              src="img/setting/icon-ionic-ios-arrow-forward-1@1x.png"
              alt="Icon ionic-ios-arrow-forward"
              />
            <img className="x15" src="img/setting/file---15@1x.png" alt="15" />
          </div>
          <div className="x16186-VD8XDI">
            <div className="x31">
              <div className="invite-friends-MxX0D6 inter-normal-cadet-blue-15px">Invite Friends</div>
            </div>
            <div className="x16184-QxO6IE x16184">
              <div className="x12345678-lPJi7x inter-normal-white-15px">#12345678</div>
            </div>
            <img
              className="icon-ionic-ios-arrow-forward"
              src="img/setting/icon-ionic-ios-arrow-forward-1@1x.png"
              alt="Icon ionic-ios-arrow-forward"
              />
            <img className="x15" src="img/setting/file---15@1x.png" alt="15" />
          </div>
          <div className="x16187-VD8XDI">
            <div className="x31">
              <div className="wallet-HTBhsQ inter-normal-cadet-blue-15px">Wallet</div>
            </div>
            <div className="x16184-a64QJA x16184">
              <div className="xt-wallet-u2WLwG inter-normal-white-15px">XT wallet</div>
            </div>
            <img
              className="icon-ionic-ios-arrow-forward"
              src="img/setting/icon-ionic-ios-arrow-forward-1@1x.png"
              alt="Icon ionic-ios-arrow-forward"
              />
            <img className="x15" src="img/setting/file---15@1x.png" alt="15" />
          </div>
          <div className="x16189-VD8XDI">
            <div className="x31">
              <div className="multi-chain-switch-tbbzDm inter-normal-cadet-blue-15px">Multi-chain Switch</div>
            </div>
            <div className="x16184-6XzBK0 x16184">
              <div className="signum-qeaPIP inter-normal-white-15px">Signum</div>
            </div>
            <img
              className="icon-ionic-ios-arrow-forward"
              src="img/setting/icon-ionic-ios-arrow-forward-1@1x.png"
              alt="Icon ionic-ios-arrow-forward"
              />
            <img className="x15" src="img/setting/file---15@1x.png" alt="15" />
          </div>
          <div className="x16190-VD8XDI">
            <div className="x31">
              <div className="nf-ts-marketplace-aBwqob inter-normal-cadet-blue-15px">NFTs Marketplace</div>
            </div>
            <img
              className="icon-ionic-ios-arrow-forward"
              src="img/setting/icon-ionic-ios-arrow-forward-1@1x.png"
              alt="Icon ionic-ios-arrow-forward"
              />
            <img className="x15" src="img/setting/file---15@1x.png" alt="15" />
          </div>
          <div className="x16199-VD8XDI">
            <div className="x31">
              <div className="get-sig-dao-token-R3QCCH inter-normal-cadet-blue-15px">Get SigDAO Token</div>
            </div>
            <img
              className="icon-ionic-ios-arrow-forward"
              src="img/setting/icon-ionic-ios-arrow-forward-1@1x.png"
              alt="Icon ionic-ios-arrow-forward"
              />
            <img className="x15" src="img/setting/file---15@1x.png" alt="15" />
          </div>
          <div className="x16192-VD8XDI">
            <div className="x31">
              <div className="terms-of-use-vMQ5ls inter-normal-cadet-blue-15px">Terms of Use</div>
            </div>
            <img
              className="icon-ionic-ios-arrow-forward"
              src="img/setting/icon-ionic-ios-arrow-forward-1@1x.png"
              alt="Icon ionic-ios-arrow-forward"
              />
            <img className="x15" src="img/setting/file---15@1x.png" alt="15" />
          </div>
          <div className="x16193-VD8XDI">
            <div className="x31">
              <div className="privacy-policy-Am8TnD inter-normal-cadet-blue-15px">Privacy Policy</div>
            </div>
            <img
              className="icon-ionic-ios-arrow-forward"
              src="img/setting/icon-ionic-ios-arrow-forward-1@1x.png"
              alt="Icon ionic-ios-arrow-forward"
              />
            <img className="x15" src="img/setting/file---15@1x.png" alt="15" />
          </div>
          <div className="x16223-VD8XDI">
            <div className="x31">
              <div className="help-YkYlbF inter-normal-cadet-blue-15px">Help</div>
            </div>
            <img
              className="icon-ionic-ios-arrow-forward"
              src="img/setting/icon-ionic-ios-arrow-forward-1@1x.png"
              alt="Icon ionic-ios-arrow-forward"
              />
            <img className="x15" src="img/setting/file---15@1x.png" alt="15" />
          </div>
          <div className="x16222-VD8XDI">
            <div className="x16184-OCPXoe x16184">
              <div className="x0004-pzNHOH inter-normal-white-15px">0.0.04</div>
            </div>
            <div className="x31">
              <div className="version-xPcu6a inter-normal-cadet-blue-15px">Version</div>
            </div>
          </div>
        </div>
      </div>
      <div className="settings-xeBDcv settings inter-semi-bold-white-18px">Settings</div>
      <a href="javascript:history.back()">
        <div className="icon-arrow-left-7DUKxJ icon-arrow-left">
          <img
            className="icon-arrow-left-trdL9a icon-arrow-left"
            src="img/setting/icon-arrow-left-10@1x.png"
            alt="icon-arrow-left"
            />
        </div>
      </a>
        <Button className="bottom-controls-7DUKxJ" onClick = {() => {logout()}}>
          <div className="button_-logout-ChdhUr">
            <div className="button1-GdXCBJ"></div>
            <div className="mintagain-GdXCBJ inter-semi-bold-white-15px">Logout</div>
          </div>
        </Button>
      {/* <a href="bettermidapp-ai-coach.html">
        <div className="ic_sentiment_very_satisfied_24px-7DUKxJ ic_sentiment_very_satisfied_24px">
          <img
            className="ic_sentiment_very_satisfied_24px-FSbIhl ic_sentiment_very_satisfied_24px"
            src="img/setting/ic-sentiment-very-satisfied-24px-1@1x.png"
            alt="ic_sentiment_very_satisfied_24px"
            />
        </div>
      </a> */}
    </div>

    </div>
  )
  

  return (
    <CenterLayout
      content={content}
      bgImg={false}
    />
  )
};

export default Setting;
