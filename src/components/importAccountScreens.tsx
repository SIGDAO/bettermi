import * as React from 'react';
import './menuBar.css';
import { Link } from 'react-router-dom';

export interface IimportAccountScreensProps {
    setIsOpenImport: (isOpenImport: boolean) => void;
    isOpenImport: boolean;
}

const MenuBar: React.FC<IimportAccountScreensProps> = (props) => {
    const {setIsOpenImport,isOpenImport} = props;
  
  return (
<div className="importAccount-layer">
<div className="importAccount-icon-arrow-left-3" onClick={() => setIsOpenImport(!isOpenImport)}>
  <img className="importAccount-icon-arrow-left" src="img/importAccount/importAccount-icon-left.png" alt="icon-arrow-left" />
</div>
<div className="importAccount">
  <div className="overlap-group1-1">
    <img className="seperate-line-importAccount-1" src="img/importAccount/seperate-line-14@1x.png" alt="Seperate line" />
    <img className="importAccountbg" src="img/importAccount/bg-11@1x.png" alt="BG" />
    <img className="importAccount-seperate-line" src="img/importAccount/seperat-line-10@1x.png" alt="Seperat line" />
    <div className="your-n-ft-id">YOUR NFT ID</div>
    <div className="importAccountrewards">
      <div className="ic_add-1 ic_add-3">
        <div className="importAccount-overlap-group-1">
          <img className="importAccountadd" src="img/importAccount/add-1@1x.png" alt="Add" />
          <img className="importAccountic_add" src="img/importAccount/ic-add-1@1x.png" alt="ic_add" />
        </div>
      </div>
      <div className="importAccount-import-your-nft">Import Your NFT</div>
    </div>
    <CustomTextArea 
    text= {inputAddress} 
    setText={setInputAddress} 
    width={300} 
    height={56} 
    importClassName="card-number-1 importAccount_search_bar-1 importAccount_search_bar-4"
    activeClassName="active-card-number-1 importAccount_search_bar-1 importAccount_search_bar-4"
    placeholder="#0000000001"
  />
    {/* <div className="importAccountsearch_bar"></div> */}
      {/* <div className="importAccountbutton_save"><div className="importAccountcontinue" onClick = {() =>  importNft(ledger2,inputAddress,userAccountId)}>Import Again</div></div> */}
    {/* <h1 className="importAccounttext-7">#00000001</h1> */}
    <div className="importAccount-error-message">
      {/* <div className="importAccount_error_icon">
        <div className="importAccount-x-container">
          <img className="importAccountx11692" src="img/importAccount/file---11692@1x.png" alt="11692" />
          <img className="importAccountx11693" src="img/importAccount/file---11693@1x.png" alt="11693" />
        </div>
      </div> */}
      <p className="importAccount-it-looks-like-your-c">
        It looks like your contact ID can’t be located. <br />Double-check the contract ID of the NFT you
        purchased on Signumart.
      </p>
    </div>
  </div>
</div>
</div>

  );
}

export default MenuBar;

