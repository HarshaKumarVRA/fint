import { useState } from "react";
import BankDetails from "../BankLogos/BankDetails";
import { Back } from '@cred/neopop-web/lib/components';
// import { RootPage } from "./CardDetailsStyled";
import { HeroSection, RootPage, Heading } from '../Home/HomeStyled';
// import './CardDetails.css'
import {
    ElevatedCard,
    Column,
    Row,
    Typography,
    HorizontalSpacer,
    Tag,
    Button,
    BottomSheet,
    VerticalSpacer,
    Slider
  } from "@cred/neopop-web/lib/components";
  import {
    mainColors,
    colorPalette,
    fontNameSpaces,
    getButtonConfig,
    FontVariant
  } from "@cred/neopop-web/lib/primitives";
  import BankCard from "./BankCard";
  import sliderThumb from "../Assets/slider.svg";

function NewDepositSelection (props) {
//   const [isOpen, setOpen] = useState();
//   const handleClose = () => {
//     setOpen(false);
//   };e
// console.log(props.cardDetails);
const [sliderBarColor, setSliderBarColor] =useState("#000000");
// const []
let sliderValue;

const [newDepositData, setNewDepositData] =useState({bankName:null, interestRate: null, depositAmount: 0, unInsured:null});
const handleSliderChange = (e) => {
  console.log(e.target.value);
  const tempDepositData = {...newDepositData,
    depositAmount: parseInt(e.target.value),
    unInsured: parseInt(newDepositData.existingFunds) + parseInt(e.target.value) > 250000
  }
  setNewDepositData(tempDepositData);
  // const tempCardDetails = JSON.parse(JSON.stringify([]));
  // tempCardDetails.depositAmount = e.target.value;
  setSliderBarColor(tempDepositData.unInsured ? "#EE4D37" : "#06C270" );
//   setCardDetails(tempCardDetails);
//   props.updateAccounts(tempCardDetails);
}

const setBankSelected = (bankName) => {
  console.log(props.updatedAccounts);
  const unEditedAccounts = props.AccountsData.filter(accountdata => accountdata.depositAmount <= 250000);
  const amountUnderBank = unEditedAccounts.filter(accountData => accountData.owningBank === bankName)
  .reduce((sum1, currentValue) => sum1 + parseInt(currentValue.depositAmount), 0) +
  props.updatedAccounts.filter(accountData => accountData.owningBank === bankName)
  .reduce((sum1, currentValue) => sum1 + parseInt(currentValue.depositAmount), 0);
  const tempDepositData = {...newDepositData,
    bankName: bankName,
    interestRate: BankDetails.findIndex(bankDetail => bankDetail.bankName === bankName) > -1 ?
    BankDetails[BankDetails.findIndex(bankDetail => bankDetail.bankName === bankName)].interestRate : null,
    existingFunds: amountUnderBank,
    unInsured : amountUnderBank + newDepositData.depositAmount > 250000
  }
  setNewDepositData(tempDepositData);
  console.log(tempDepositData);
  setSliderBarColor(tempDepositData.unInsured ? "#EE4D37" : "#06C270");
}

const handleSubmit = () => {
console.log("hjh");
props.addNewDeposit(newDepositData);
};

  return (
    <>
        <HorizontalSpacer n={4} />
        <Row className="v-center">
        <Typography {...fontNameSpaces.tc12b} color={mainColors.black}>
            Open a new Deposit Account
        </Typography>
    </Row>
    <div className="padding">
    <div style={{ maxWidth: "100%" }}>
    <HorizontalSpacer n={4} />
    <Row>
        <div style={{ maxWidth: " 40%" }}>
        <Typography {...FontVariant.HeadingBold14} color={mainColors.black}>
            Select bank
        </Typography>
        </div>
        <VerticalSpacer n={40} />
        <BankCard setBankSelected={setBankSelected} unInsured={newDepositData.unInsured} />
        {/* <div style={{border:`1px solid black`}}>
                <BankLogo bankName="Chase Bank" />
            </div> */}
        {/* <Typography {...FontVariant.CirkaBold14} color={mainColors.black}>
            {props.cardDetails.maturityDate}
        </Typography> */}
    </Row>
    <HorizontalSpacer n={3} />
    <Row>
    <VerticalSpacer n={57} />
        {newDepositData.bankName && (newDepositData.existingFunds > 0 ?
           <Typography {...FontVariant.HeadingRegular12} color={mainColors.black}>
            You have existing deposits worth ${newDepositData.existingFunds} with {newDepositData.bankName} 
          </Typography>
          :
          <Typography {...FontVariant.HeadingRegular12} color={mainColors.black}>
            You don't have any existing deposits with {newDepositData.bankName} 
          </Typography> 
        )}
    </Row>
    <HorizontalSpacer n={6} />
    <Row>
        <Typography {...FontVariant.HeadingBold14} color={mainColors.black}>
            Interest Rate
        </Typography>
        <VerticalSpacer n={40} />
        <Typography {...FontVariant.CirkaBold14} color={mainColors.black}>
            {newDepositData.interestRate}%
        </Typography>
    </Row>
    <HorizontalSpacer n={6} />
    <Row>
      <Column>
      <Typography {...FontVariant.HeadingBold14} color={mainColors.black}>
            Deposit Amount
        </Typography>
      </Column>
        
        <VerticalSpacer n={35} />
        <Column>
        <Slider min={0} max={props.availableFunds} 
            defaultValue={0}
            step={1000}
            onChange={(e) => handleSliderChange(e)}
            onInput={() => console.log("value1")} 
            value={sliderValue}
            sliderConfig={
              {sliderBackground : `${sliderBarColor}`,
              sliderHeight : "10px",
              sliderTransition : "all ease-in-out 0.05s",
              sliderWidth : "100%"
            }}
            thumbConfig={{
              thumbWidth: '40px',
              thumbHeight: '40px',
              thumbBackground: `url(${sliderThumb}) no-repeat center`,
              thumbBackgroundSize: 'contain',
              thumbBackgroundColor: 'transparent',
              thumbBorder: '0px',
              thumbBorderRadius: '50%',
          }} />
        </Column>
        <VerticalSpacer n={2} />
        ${newDepositData.depositAmount}
    </Row>
    <HorizontalSpacer n={15} />
    </div>
    <Row className="v-center">
    <Button 
            {...getButtonConfig("bdp50p1")} 
            fullWidth={false}
            onClick={() => {
              handleSubmit();
            //   setOpen(true);
          }}
          >
            Submit request
          </Button>
    </Row>
    </div>
    </>
  );
}

export default NewDepositSelection;
