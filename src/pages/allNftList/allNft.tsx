import * as React from "react";
import "../myNftList/myNftList.css";
import { useEffect } from "react";
import { generateMethodCall } from "@signumjs/contracts";
import { AttachmentMessage } from "@signumjs/core";
import { useContext } from "react";
import { AppContext } from "../../redux/useContext";
import { useSelector } from "react-redux";
import { selectWalletNodeHost } from "../../redux/useLedger";
import { LedgerClientFactory } from "@signumjs/core";
import { BuyNft } from "../../NftSystem/BuyNft/buyNft";

interface AllNftProps {
  imageAddress: string;
  openModel?: boolean;
  setOpenModel?: (openModel: boolean) => void;
  nftOwner?: string;
  nftNumber?: string;
  nftLevel?: string;
  nftPrice?: string;
  nftStatus?:string;
  nftId?:string;
}

const AllNft: React.FunctionComponent<AllNftProps> = (props) => {
  const { imageAddress, openModel, setOpenModel, nftOwner, nftNumber, nftLevel, nftPrice,nftStatus,nftId } = props;
  const { appName, Wallet, Ledger } = useContext(AppContext);
  const nodeHost = useSelector(selectWalletNodeHost);
  const ledger2 = LedgerClientFactory.createClient({ nodeHost });
  const Buy = async () => {
    BuyNft(Wallet, ledger2, nftId!, nftPrice!);
  }
  return (
    <>
      {/* {loading?(<div>loading</div>):(
          imgAddress === ""?(<div>loading</div>):( */}

      <div className="myNftList">
        <img className="myNftImage" src={`https://ipfs.io/ipfs/${imageAddress}`}></img>
        <div className="myNftDescription">
          <div className="myNftNumber">#{nftNumber}</div>
          <div className="myNftBar">
            <div className="myNftLevel">Lv{nftLevel}</div>
            <div className="myNftVerticalLine"></div>
            <div className="inter-normal-white-12px">Reward + 10%</div>
          </div>
          <div className="myNftPrice">${nftPrice} SIGDAO</div>
        </div>
        <div className="allNftBottom">
          {/* {isOtherUser === true?(
                      <>
                        <button className = "myNftButtonDisabled" onClick = {equipNft}>AVALIBLE</button>
                        <img 
                          onClick={() => {
                            setIsOpenPopup((prev) => !prev);
                            setSelectedAssetId(nftId);
                            setLevel(nftLevel);
  
                          }} 
                          className = "myNftButtomArrowDisabled" 
                          src  = {`${process.env.PUBLIC_URL}/img/NftList/ic-send@1x.png`}
                        />
                        </>
                    ):( */}
          <>
            <button className="allNftButton" onClick={Buy}>
              {nftStatus}
            </button>
            {/* <img
              onClick={() => {
                //   setIsOpenPopup((prev) => !prev);
                //   setSelectedAssetId(nftId);
                //   setLevel(nftLevel);
                console.log("testing");
                if (setOpenModel) {
                  setOpenModel(!openModel);
                }
              }}
              className="myNftButtomArrow"
              src={`${process.env.PUBLIC_URL}/img/NftList/ic-send@1x.png`}
            /> */}
          </>
          {/* )
                    } */}
        </div>
      </div>
      {/* )
        )

      } */}
    </>
  );

  // return (
  //   <CenterLayout
  //     content={content}
  //     bgImg={false}
  //   />
  // );"{"version":1,"descriptor":"QmNhdiqCRXzoVm3pn5eaqvudAjbWsavwqi6a6Bs7ZL5WeE"}"
};

export default AllNft;
