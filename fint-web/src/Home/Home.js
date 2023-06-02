import React from 'react';
// import "./styles.css";
import { useState } from "react";
import {
  Button,
  showToast,
  ToastContainer, 
  PageContainer,
  Row,
  BottomSheet,
  Back
} from "@cred/neopop-web/lib/components";
import { mainColors } from '@cred/neopop-web/lib/primitives'
import { colorGuide } from '@cred/neopop-web/lib/primitives/colors';
import { fontNameSpaces } from '@cred/neopop-web/lib/primitives/typography';
import Typography from '@cred/neopop-web/lib/components/Typography'; 
import { HorizontalDivider, HorizontalSpacer, VerticalSpacer } from '@cred/neopop-web/lib/components/Helpers';
import './Home.css';
import { HeroSection, RootPage, Heading, RootPage1 } from './HomeStyled';
import Accounts from '../Accounts/Accounts';
import NewDeposits from '../NewDeposits/NewDeposits';
import { AccountsData } from '../AccountsData';

const unInsuredAmount = AccountsData.filter(accountData => accountData.depositAmount > 250000)
  .reduce((sum, currentValue) => sum + currentValue.depositAmount - 250000 , 0);
export default function Home() {
  const [isOpen, setOpen] = useState();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    {!isOpen &&
    (<RootPage>
      <HeroSection>
      <Typography {...fontNameSpaces.tc12b} color={colorGuide.darkComponents.font.bodyText}>
        Welcome Mr.Ananth
      </Typography>
      <HorizontalSpacer n={8} />
      </HeroSection>
      <HeroSection>
      <HorizontalDivider />
      {/* <Heading className='v-justify'>
                    <Typography
                        {...fontNameSpaces.tsh34b}
                        color={colorGuide.darkComponents.font.subHeading}
                        className='serif heading'
                    >
                        test card
                    </Typography>
                    <HorizontalSpacer n={10} />
                    <Typography
                        {...fontNameSpaces.th18sb}
                        color={colorGuide.darkComponents.font.bodyText}
                        className='sans-serif details'
                    >
                        test card 12 and the quotations start here with multiple lines of non important matter
                    </Typography>
                    <HorizontalSpacer n={5} />
      </Heading> */}

      </HeroSection>
      <Accounts />
      <HorizontalSpacer n={8} />

      {unInsuredAmount > 0 &&
      <HeroSection>
        <Row className='h-center'>
        <Typography {...fontNameSpaces.tc12b} color={mainColors.red}>
        You have un-insured deposits worth ${unInsuredAmount}. Do you want to split them and mitigate the risk?
      </Typography>
      <VerticalSpacer n={2} />
        <Button
        variant="primary"
        kind="elevated"
        size="small"
        colorMode="light"
        onClick={() => {
          setOpen(true);;
        }}>
          Yes
        </Button>
        </Row>
      </HeroSection>
      }
      {/* <ToastContainer />
      <Button
        variant="primary"
        kind="elevat
        size="big"
        colorMode="light"
        onClick={() => {
          showToast("you clicked the sexy button!", {
            type: "success",
            autoCloseTime: "1000"
          });
        }}
      >
        Click Me!
      </Button>
      <IntroPage /> */}
      </RootPage>
    )}
    {isOpen &&
    (<RootPage>
      <Back onClick={handleClose}/>
        <NewDeposits />
    </RootPage>
    )
    }
    </>
  );
}
