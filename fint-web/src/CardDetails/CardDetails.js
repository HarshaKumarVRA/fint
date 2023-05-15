import { useState } from "react";

import { Back } from '@cred/neopop-web/lib/components';
// import { RootPage } from "./CardDetailsStyled";
import { HeroSection, RootPage, Heading } from '../Home/HomeStyled';
import './CardDetails.css'
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

function CardDetails (props) {
//   const [isOpen, setOpen] = useState();
//   const handleClose = () => {
//     setOpen(false);
//   };
console.log(props.cardDetails);
  return (
    <>
        <HorizontalSpacer n={4} />
        <Row className="v-center">
        <Typography {...fontNameSpaces.tc12b} color={mainColors.black}>
            {props.cardDetails.owningBank}, 
        </Typography>
        <Typography {...fontNameSpaces.tc12b} color={mainColors.black}>
            ${props.cardDetails.depositAmount}
        </Typography>
    </Row>
    <div className="padding">
    <div style={{ maxWidth: "50%" }}>
    <HorizontalSpacer n={4} />
    <Row className="v-justify">
        <Typography {...FontVariant.HeadingBold14} color={mainColors.black}>
            Maturity Date
        </Typography>
        <Typography {...FontVariant.CirkaBold14} color={mainColors.black}>
            {props.cardDetails.maturityDate}
        </Typography>
    </Row>
    <HorizontalSpacer n={4} />
    <Row className="v-justify">
        <Typography {...FontVariant.HeadingBold14} color={mainColors.black}>
            Interest Rate
        </Typography>
        <Typography {...FontVariant.CirkaBold14} color={mainColors.black}>
            {props.cardDetails.interestRate}%
        </Typography>
    </Row>
    </div>

    </div>
    </>
  );
}

export default CardDetails;

// heading?: string;
// color?: string;
// onClick: React.MouseEventHandler;
// rightElement?: React.ReactNode;
// textStyle?: FontNameSpaceInterface;