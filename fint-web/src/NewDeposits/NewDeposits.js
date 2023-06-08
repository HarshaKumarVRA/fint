import React, { useEffect, useState } from "react";
import Card from "../Accounts/Card";
import { Column, HorizontalSpacer, Row, VerticalSpacer, Button, BottomSheet, HorizontalDivider } from "@cred/neopop-web/lib/components";
import { AccountsData } from "../AccountsData";
import Typography from '@cred/neopop-web/lib/components/Typography'; 
import { fontNameSpaces } from '@cred/neopop-web/lib/primitives/typography';
import { colorGuide } from '@cred/neopop-web/lib/primitives/colors';
import { Slider } from "@cred/neopop-web/lib/components";
import { AccountsStyled } from '../Accounts/AccountsStyled'; 
import NewDepositSelection from "./NewDepositSelection";
import { colorPalette, mainColors } from '@cred/neopop-web/lib/primitives';
import { hexToRGBA } from '@cred/neopop-web/lib/utils';


function NewDeposits () {

const [AccountsMaster,setAccountsMaster] = useState(JSON.parse(JSON.stringify(AccountsData)).filter(account => account.depositAmount > 250000));
const [Accounts,setAccounts] = useState(JSON.parse(JSON.stringify(AccountsMaster)));
const [unInsuredAmt, setUnInsuredAmt] = useState(Accounts.filter(accountData => accountData.depositAmount > 250000)
.reduce((sum1, currentValue) => sum1 + parseInt(currentValue.depositAmount) - 250000 , 0));

const [availableFunds, setAvailableFunds] = useState(0);
const [addNewInactive, setAddNewInactive] = useState(true);
const [isOpen, setOpen] = useState();
const [AccountsAdded, setAccountsAdded] = useState([]);
const [cardStyleUpdate, setCardStyleUpdate] = useState(false);
const handleClose = () => {
    setOpen(false);
  };

// useEffect(() => {
//     console.log("test");
//     console.log(Accounts);
//     setUnInsuredAmt(Accounts.filter(accountData => accountData.depositAmount > 250000)
//     .reduce((sum1, currentValue) => sum1 + parseInt(currentValue.depositAmount) - 250000 , 0));

// }, Accounts);

const updateAccounts = (cardDetails) => {
    console.log(cardDetails);
    Accounts.map((account) => {
        if (account.number === cardDetails.number) {
            account.depositAmount = parseInt(cardDetails.depositAmount);
        }
    });
    setAccounts(Accounts);
    setUnInsuredAmt(Accounts.filter(accountData => accountData.depositAmount > 250000)
    .reduce((sum1, currentValue) => sum1 + parseInt(currentValue.depositAmount) - 250000 , 0));
    let tempAvailableFunds = 0; 
    AccountsMaster.forEach(account => {
        Accounts.forEach(account1 => {
            if (account.number === account1.number) {
                tempAvailableFunds= tempAvailableFunds + account.depositAmount -account1.depositAmount
            }
        });
    });
    setAvailableFunds(tempAvailableFunds);
    setAddNewInactive(tempAvailableFunds > 0 ? false : true);
};

const hadletest = () => {
    setOpen(true);
    console.log(AccountsData);
    console.log(Accounts);
    console.log(availableFunds);
}

const addNewDeposit = (newDepositData) => {
    const tempNewDeposit = {
        number: "",
        type: "deposit",
        owningBank : newDepositData.bankName,
        originCountry : "USA",
        depositAmount: newDepositData.depositAmount,
        maturityDate: "10/12/2023",
        interestRate: newDepositData.interestRate,
        edited: true
    };
    const newDepositsArray = AccountsAdded;
    newDepositsArray.push(tempNewDeposit);
    setAccountsAdded(newDepositsArray);
    console.log(AccountsAdded);
    const tempAccountsMaster = AccountsMaster;
    tempAccountsMaster.forEach(accountMaster => {
        Accounts.forEach(account => {
            if (accountMaster.number === account.number && accountMaster.depositAmount !== account.depositAmount) {
                accountMaster.edited = true;
                accountMaster.depositAmount = account.depositAmount;
            }
        });
    });
    setAccountsMaster(tempAccountsMaster);
    console.log(tempAccountsMaster);
    console.log(AccountsMaster);
    const tempUninsuredAmt = AccountsMaster.filter(accountData => accountData.depositAmount > 250000)
    .reduce((sum1, currentValue) => sum1 + parseInt(currentValue.depositAmount) - 250000 , 0) + 
    AccountsAdded.filter(accountData => accountData.depositAmount > 250000)
    .reduce((sum1, currentValue) => sum1 + parseInt(currentValue.depositAmount) - 250000, 0);
    setUnInsuredAmt(tempUninsuredAmt);
    const tempAvailableFunds = availableFunds - parseInt(tempNewDeposit.depositAmount)
    setAvailableFunds(parseInt(tempAvailableFunds));
    setAddNewInactive(tempAvailableFunds > 0 ? false : true);
    setCardStyleUpdate(cardStyleUpdate ? false : true);
    handleClose();
}

// const colorConfig = {
//     backgroundColor: mainColors.black,
//     color: mainColors.white,
//     borderColor: '#E5FE40',
//     edgeColors: { right: '#A2B42D', bottom: '#67721F', top: 'transparent', left: 'transparent' },
//     disabledColors: {
//         backgroundColor: colorPalette.black[50],
//         color: hexToRGBA(mainColors.white, 0.5),
//         edgeColors: {
//             top: 'transparent',
//             left: 'transparent',
//             right: colorPalette.white[70],
//             bottom: colorPalette.white[50],
//         },
//     },
// };

return (
    <>
    <Row>
    <Typography {...fontNameSpaces.tc12b} color={colorGuide.darkComponents.font.bodyText}>
        Edit existing deposits 
    </Typography>
    <HorizontalSpacer n={8} />
    </Row>
    <Row className="v-justify">
    <AccountsStyled className='v-center'>
    {AccountsMaster.map((data, i) => (
        <React.Fragment key={i}>
            <Card cardDetails={data} styleUpdate={cardStyleUpdate} isEdit="true" updateAccounts={updateAccounts}/>
            <VerticalSpacer n={3} />
        </React.Fragment>
    ))}
    </AccountsStyled>
    <Column>
    <Typography {...fontNameSpaces.tc12b} color={colorGuide.darkComponents.font.bodyText}>
            Your uninsured funds
        </Typography>
        <HorizontalSpacer n={2} />
        {unInsuredAmt === 0 ?
                    <Typography {...fontNameSpaces.th16b} color={mainColors.green}>
                    ${unInsuredAmt}
                  </Typography> :
                    <Typography {...fontNameSpaces.th16b} color={mainColors.red}>
                    ${unInsuredAmt}
                    </Typography>
        }
    <HorizontalSpacer n={4} />

    <Typography {...fontNameSpaces.tc12b} color={colorGuide.darkComponents.font.bodyText}>
            Available Funds for new deposits
        </Typography>
        <HorizontalSpacer n={2} />
        <Typography {...fontNameSpaces.th16b} color={mainColors.white}>
             ${availableFunds}
        </Typography>
        <HorizontalSpacer n={17} />
        <Button
            colorMode="light"
            kind="elevated"
            onClick={() =>
                hadletest()
            }
            size="big"
            disabled={addNewInactive}
            // colorConfig={colorConfig}
        >
            Add New Deposit
        </Button>
    </Column>
    </Row>
    
    <HorizontalSpacer n={8} />


<HorizontalDivider />
<HorizontalDivider />
<HorizontalSpacer n={8} />  
{AccountsAdded.length > 0 &&
<div>
<Row>
    <Typography {...fontNameSpaces.tc12b} color={colorGuide.darkComponents.font.bodyText}>
        New deposits 
    </Typography>
    <HorizontalSpacer n={8} />
</Row>
<Row className="v-justify">
    <AccountsStyled className='v-center'>
    {AccountsAdded.map((data, i) => (
        <React.Fragment key={i}>
            <Card cardDetails={data} />
            <VerticalSpacer n={3} />
        </React.Fragment>
    ))}
    </AccountsStyled>
</Row>
</div>
}

<BottomSheet open={isOpen} handleClose={handleClose}>
        <NewDepositSelection availableFunds={availableFunds} AccountsData={AccountsData} updatedAccounts={Accounts}
        addNewDeposit={addNewDeposit}/>
    </BottomSheet>
    </>
);
}

export default NewDeposits;