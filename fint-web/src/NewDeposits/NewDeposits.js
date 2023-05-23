import React, { useEffect, useState } from "react";
import Card from "../Accounts/Card";
import { Column, HorizontalSpacer, Row, VerticalSpacer, Button, BottomSheet, HorizontalDivider } from "@cred/neopop-web/lib/components";
import { AccountsData } from "../AccountsData";
import Typography from '@cred/neopop-web/lib/components/Typography'; 
import { fontNameSpaces } from '@cred/neopop-web/lib/primitives/typography';
import { colorGuide } from '@cred/neopop-web/lib/primitives/colors';
import { mainColors } from "@cred/neopop-web/lib/primitives";
import { Slider } from "@cred/neopop-web/lib/components";
import { AccountsStyled } from '../Accounts/AccountsStyled'; 
import NewDepositSelection from "./NewDepositSelection";

const AccountsMaster = AccountsData.filter(account => account.depositAmount > 250000)
const Accounts = JSON.parse(JSON.stringify(AccountsMaster));

function NewDeposits () {
const [unInsuredAmt, setUnInsuredAmt] = useState(Accounts.filter(accountData => accountData.depositAmount > 250000)
.reduce((sum1, currentValue) => sum1 + parseInt(currentValue.depositAmount) - 250000 , 0));

const [availableFunds, setAvailableFunds] = useState(0);
const [addNewInactive, setAddNewInactive] = useState(true);
const [isOpen, setOpen] = useState();

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
            account.depositAmount = cardDetails.depositAmount;
        }
    });
    console.log(Accounts);
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
            <Card cardDetails={data} isEdit="true" updateAccounts={updateAccounts}/>
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
        <HorizontalSpacer n={12} />
        <Button
            colorMode="light"
            kind="elevated"
            onClick={() =>
                setOpen(true)
            }
            size="big"
            disabled={addNewInactive}
        >
            Add New Deposit
        </Button>
    </Column>
    </Row>
    
    <HorizontalSpacer n={8} />


<HorizontalDivider />
<BottomSheet open={isOpen} handleClose={handleClose}>
        <NewDepositSelection />
    </BottomSheet>
    </>
);
}

export default NewDeposits;