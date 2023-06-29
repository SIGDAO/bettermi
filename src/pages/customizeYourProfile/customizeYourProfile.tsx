import React, { useRef, useEffect, useState } from 'react';
import { CenterLayout } from '../../components/layout';
import { BackButton } from '../../components/button';
import './customizeYourProfile.css'
import generateName from './generateName';

interface ICustomizeYourProfileProps {
}

const CustomizeYourProfile: React.FunctionComponent<ICustomizeYourProfileProps> = (props) => {
  // todo: help it to change to nft image IFPS link
  // maybe store the path in redux as well
  const nftImage = '';

  // when user press "Save", putting the generated name into local storage
  const [name, setName] = useState<string>('');


  const handleSave = () => {}

  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current && inputRef.current) {
      divRef.current.addEventListener("click", () => {
        inputRef.current?.focus();
      });
    }
  }, []);




  const handleRandomGenerateName = () => {
    setName(generateName())
  }

  const content: JSX.Element = (
    <div>
      <BackButton/>
      <div className='title-Gzrq3v-container'><h1 className="title-Gzrq3v">Customize your profile</h1></div>
      <div className="pick-a-username-Gzrq3v">PICK A USERNAME</div>
      <p className="reserve-your-name-before-its-taken-Gzrq3v">Reserve your @name before it's taken.</p>
      <img className="photo-Gzrq3v" src={nftImage || `${process.env.PUBLIC_URL}/img/mimi.png`} alt="Photo" />
      <div className="search_bar-Gzrq3v">
        <div className="search-AToI7d" >
          <input placeholder={name || 'zoe_li'} className="card-number-AToI7d card-number" value={name} onChange={(e) => setName(e.target.value)}/>
          <div className="random-dice-AToI7d" onClick={handleRandomGenerateName}>
            <div className="card-number-zhUTxv card-number">Random</div>
            <img className="ic_casino_24px-zhUTxv" src={`${process.env.PUBLIC_URL}/img/customizeYourProfile/ic-casino-24px@1x.png`} alt="ic_casino_24px" />
          </div>
        </div>
      </div>
      <div className="button_-save-Gzrq3v" onClick={handleSave}>
        <div className="button1-S5Obts"></div>
        <div className="continue-S5Obts">Save</div>
      </div>
    </div>
  ) 

  return (
    <CenterLayout
      bgImg={false}
      content={content}
      mobile={true}
    />
  );
};

export default CustomizeYourProfile;
