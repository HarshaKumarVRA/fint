import { useState } from "react";

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
    BottomSheet
  } from "@cred/neopop-web/lib/components";
  import {
    mainColors,
    colorPalette,
    fontNameSpaces,
    getButtonConfig,
    FontVariant
  } from "@cred/neopop-web/lib/primitives";

function NewDepositSelection (props) {
//   const [isOpen, setOpen] = useState();
//   const handleClose = () => {
//     setOpen(false);
//   };
// console.log(props.cardDetails);
  return (
    <>
        <HorizontalSpacer n={4} />
        <Row className="v-center">
        <Typography {...fontNameSpaces.tc12b} color={mainColors.black}>
            Open a new Deposit Account
        </Typography>
    </Row>
    <div className="padding">
    <div style={{ maxWidth: "50%" }}>
    <HorizontalSpacer n={4} />
    <Row className="v-justify">
        <Typography {...FontVariant.HeadingBold14} color={mainColors.black}>
            Select bank
        </Typography>
        <Typography {...FontVariant.CirkaBold14} color={mainColors.black}>
            {/* {props.cardDetails.maturityDate} */}
        </Typography>
    </Row>
    <HorizontalSpacer n={4} />
    <Row className="v-justify">
        <Typography {...FontVariant.HeadingBold14} color={mainColors.black}>
            Interest Rate
        </Typography>
        <Typography {...FontVariant.CirkaBold14} color={mainColors.black}>
            {/* {props.cardDetails.interestRate}% */}
        </Typography>
    </Row>
    </div>

    </div>
    </>
  );
}

export default NewDepositSelection;
