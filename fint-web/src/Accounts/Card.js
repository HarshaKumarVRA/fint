import React from "react";
import { useState } from "react";
import chasebanklogo from "../BankLogos/chasebanklogo.png";
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
  getButtonConfig
} from "@cred/neopop-web/lib/primitives";
import styled from "styled-components";
import CardDetails from "../CardDetails/CardDetails";

const ContentWrapper = styled.div`
  padding: 20px;
`;

const openCardDetails = (cardDetails) => {
  console.log('inside open');
  console.log(cardDetails);
  // return (

  // );
}

function Card (props) {
  const [isOpen, setOpen] = useState();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    <ElevatedCard
      backgroundColor="#AE275F"
      edgeColors={{
        bottom: "#5C1532",
        right: "#851E49"
      }}
      style={{
        width: "270px"
      }}
    >
      <ContentWrapper>
        <Column>
          <Row>
              <Typography {...fontNameSpaces.tc12b} color={mainColors.white}>
                {props.cardDetails.owningBank === 'Chase Bank' ?
                  <img src={chasebanklogo} width={75} height={25} alt='Chase Bank'/>
                :"Chase Bank"}
              </Typography>
          </Row>
              <HorizontalSpacer n={2} />
          <Row>
          <Typography
                {...fontNameSpaces.tb11m}
                color={colorPalette.popWhite[100]}
                overflow="ellipsis"
              >
                {props.cardDetails.number}
              </Typography>
          </Row>
          <HorizontalSpacer n={4} />
          <Row>
          <Typography {...fontNameSpaces.th16b} color={mainColors.white}>
            ${props.cardDetails.depositAmount}
          </Typography>
          <VerticalSpacer n={2} />
          {props.isEdit &&
            <Button kind="link" color={mainColors.white}>
              Edit
            </Button>
          }
          </Row>
          <Row>
          {props.isEdit &&
            <Slider min={0} max={2500000} step={1000} defaultValue={250000}
            onChange={console.log("tes")}
            onInput={console.log("test")} />
          }
          </Row>
          <HorizontalSpacer n={2} />
          <Row>
            {props.cardDetails.depositAmount <= 250000 ?
                        <Tag
                        colorConfig={{
                          background: mainColors.green,
                          color: colorPalette.popWhite[400]
                        }}
                      >
                        FDIC Insured
                      </Tag> :
                      <Tag
                      colorConfig={{
                        background: mainColors.red,
                        color: colorPalette.popWhite[400]
                      }}
                    >
                      FDIC Un-Insured
                    </Tag> 

            }

          </Row>
          <HorizontalSpacer n={4} />
          <Button 
            {...getButtonConfig("blp50p1")} 
            fullWidth={true}
            onClick={() => {
              console.log("I'm clicked");
              setOpen(true);
          }}
          >
            More Details
          </Button>
        </Column>
      </ContentWrapper>
    </ElevatedCard>
    <BottomSheet open={isOpen} handleClose={handleClose}>
        <CardDetails cardDetails={props.cardDetails} />
    </BottomSheet>
    </>
  );
}

export default Card;
