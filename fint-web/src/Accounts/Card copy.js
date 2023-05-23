import React, { Component, useEffect } from "react";
import { useState } from "react";
import chasebanklogo from "../BankLogos/chasebanklogo.png";
import sliderThumb from "../Assets/slider.svg";
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
  const [cardDetails, setCardDetails] =useState(props.cardDetails);

  // useEffect(() => {
  //   setCardDetails(props.cardDetails);
  //   console.log(cardDetails);
  // }, []);

  const handleClose = () => {
    setOpen(false);
  };
  let sliderValue;

  const handleSliderChange = (e) => {
    console.log(e.target.value);
    const tempCardDetails = JSON.parse(JSON.stringify(cardDetails));
    tempCardDetails.depositAmount = e.target.value;
    setCardDetails(tempCardDetails);
  }

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
        // height: "270px"
      }}
    >
      <ContentWrapper>
        <Column>
          <Row>
              <Typography {...fontNameSpaces.tc12b} color={mainColors.white}>
                {cardDetails.owningBank}
              </Typography>
          </Row>
              <HorizontalSpacer n={2} />
          <Row>
          <Typography
                {...fontNameSpaces.tb11m}
                color={colorPalette.popWhite[100]}
                overflow="ellipsis"
              >
                {cardDetails.number}
              </Typography>
          </Row>
          <HorizontalSpacer n={4} />
          <Row>
          <Typography {...fontNameSpaces.th16b} color={mainColors.white}>
            ${cardDetails.depositAmount}
          </Typography>
          {/* <VerticalSpacer n={2} />
          {props.isEdit &&
            <Button kind="link" color={mainColors.white}>
              Edit
            </Button>
          } */}
          </Row>
          <HorizontalSpacer n={4} />
          <Row>
          {props.isEdit &&
            <Slider min={0} max={2500000} step={1000}
            onChange={(e) => handleSliderChange(e)}
            onInput={() => console.log("value1")} 
            value={sliderValue}
            sliderConfig={
              {sliderBackground : "#F08D32",
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
          }
          </Row>
          <HorizontalSpacer n={4} />
          <Row>
            {cardDetails.depositAmount <= 250000 ?
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
        <CardDetails cardDetails={cardDetails} />
    </BottomSheet>
    </>
  );
}

export default Card;
