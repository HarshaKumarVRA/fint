import React from "react";
import Card from "../Accounts/Card";
import { HorizontalSpacer, Row, VerticalSpacer } from "@cred/neopop-web/lib/components";
import { AccountsData } from "../AccountsData";
import Typography from '@cred/neopop-web/lib/components/Typography'; 
import { fontNameSpaces } from '@cred/neopop-web/lib/primitives/typography';
import { colorGuide } from '@cred/neopop-web/lib/primitives/colors';
import { Slider } from "@cred/neopop-web/lib/components";
import { AccountsStyled } from '../Accounts/AccountsStyled'; 

const Accounts1 = AccountsData.filter(account => account.depositAmount > 250000)
function NewDeposits () {
return (
    <>
    <Row className="v-justify">
    <AccountsStyled className='v-center'>
    {Accounts1.map((data, i) => (
        <React.Fragment key={i}>
            <Card cardDetails={data} isEdit="true"/>
            <VerticalSpacer n={3} />
        </React.Fragment>
    ))}
    </AccountsStyled>
    <Typography {...fontNameSpaces.tc12b} color={colorGuide.darkComponents.font.bodyText}>
            Your uninsured amount
        </Typography>
    </Row>
    
    <HorizontalSpacer n={8} />
    <Row>
    <Typography {...fontNameSpaces.tc12b} color={colorGuide.darkComponents.font.bodyText}>
            Select bank
        </Typography>
    </Row>
    <HorizontalSpacer n={6} />
    <Row className="v-justify">
    <Typography {...fontNameSpaces.tc12b} color={colorGuide.darkComponents.font.bodyText}>
            Deposit Amount
        </Typography>
        <Slider min={0} max={2500000} step={1000} defaultValue={250000} onChange={function noRefCheck() {}}
  onInput={function noRefCheck() {}} />
    </Row>
    <Row>
        
    </Row>
    </>
);
}

export default NewDeposits;