import React from 'react';
import Card from './Card';
import { AccountsStyled } from './AccountsStyled';
import Typography from '@cred/neopop-web/lib/components/Typography'; 
import { colorGuide } from '@cred/neopop-web/lib/primitives/colors';
import { fontNameSpaces } from '@cred/neopop-web/lib/primitives/typography';
import { Row, Button, VerticalSpacer, HorizontalSpacer} from '@cred/neopop-web/lib/components';
import { AccountsData } from '../AccountsData';

const Accounts1 = AccountsData;

function Accounts () {
    return (
        <>
        <HorizontalSpacer n={4} />
        <Row>
        <Typography {...fontNameSpaces.tc12b} color={colorGuide.darkComponents.font.bodyText}>
            Your Deposits
        </Typography>
        </Row>

        <HorizontalSpacer n={4} />
        <AccountsStyled className='v-center'>
        {Accounts1.map((data, i) => (
            <React.Fragment key={i}>
                <Card cardDetails={data} />
                <VerticalSpacer n={3} />
            </React.Fragment>
        ))}

        {/* <Row>
            <Card cardDetails={Accounts1} />
            <VerticalSpacer n={3} />
            <DepositCards />
            
        </Row> */}
        </AccountsStyled>
        </>
    );
}

export default Accounts;