import React, { Component, useEffect } from "react";
import { useState } from "react";
import chasebanklogo from "../BankLogos/chasebanklogo.svg";
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
import BankLogo from "../BankLogos/BankLogo";

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
  const [sliderBarColor, setSliderBarColor] =useState("#EE4D37");

  const handleClose = () => {
    setOpen(false);
  };
  let sliderValue;

  useEffect(() => {
    console.log(props.cardDetails);
    setCardDetails(props.cardDetails);
  }, [props.styleUpdate]);

  const handleSliderChange = (e) => {
    console.log(e.target.value);
    const tempCardDetails = JSON.parse(JSON.stringify(cardDetails));
    tempCardDetails.depositAmount = e.target.value;
    setSliderBarColor(tempCardDetails.depositAmount <= 250000 ?  "#06C270" : "#EE4D37");
    setCardDetails(tempCardDetails);
    props.updateAccounts(tempCardDetails);
  }

  // const cardStyling = {
  //   backgroundColor : "#D2D2D2",
  //     edgeColors : {
  //       bottom: "#E0E0E0",
  //       right: "#FFFFFF"
  //     },
  //     style : {
  //       width : "270px"
  //     }
  // }
  console.log(cardDetails);
  console.log(cardDetails.edited);
  const cardStyling = {
    backgroundColor : cardDetails.edited ? colorPalette.black[50] : "#D2D2D2",
      edgeColors : {
        bottom: cardDetails.edited ? colorPalette.white[50] : "#E0E0E0",
        right: cardDetails.edited ? colorPalette.white[70] : "#FFFFFF"
      },
      style : {
        width : "270px"
      }
  }
  console.log(cardStyling);

  return (
    <>
    {
      console.log(cardStyling)
    }
    <>
    <ElevatedCard
      {...cardStyling}
    >
      <ContentWrapper>
        <Column>
          <Row>
              <Typography {...fontNameSpaces.tc12b} color={mainColors.black}>
                <BankLogo bankName={cardDetails.owningBank} />
                {/* {cardDetails.owningBank} */}
                {/* <img src={require('../BankLogos/chasebanklogooo.svg').default} width={90} height={25} alt='mySvgImage' /> */}
                {/* {chasebanklogo} */}
              </Typography>
          </Row>
              <HorizontalSpacer n={2} />
          <Row>
          <Typography
                {...fontNameSpaces.tb11m}
                color={colorPalette.black[100]}
                overflow="ellipsis"
              >
                {cardDetails.number}
              </Typography>
          </Row>
          <HorizontalSpacer n={4} />
          <Row>
          <Typography {...fontNameSpaces.th16b} color={mainColors.black}>
            ${cardDetails.depositAmount}
          </Typography>
          {/* <VerticalSpacer n={2} />
          {props.isEdit &&
            <Button kind="link" color={mainColors.white}>
              Edit
            </Button>
          } */}
          </Row>
          {!cardDetails.edited && props.isEdit &&
            <>
            <HorizontalSpacer n={4} />
            {/* <Row className="v-center"> */}
            <Slider min={0} max={props.cardDetails.depositAmount} 
            defaultValue={props.cardDetails.depositAmount}
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
          {/* </Row> */}
          </>
          }
          {!props.isEdit &&
            <HorizontalSpacer n={4} />
          }
          {cardDetails.edited && 
            <HorizontalSpacer n={4} />
          }
          <Row>
            {cardDetails.edited &&
              <Tag
              colorConfig={{
                background: mainColors.green,
                color: colorPalette.popWhite[400]
              }}
            >
              Pending with Bank
            </Tag>
            }
            {!cardDetails.edited && (cardDetails.depositAmount <= 250000 ?
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

            )}

          </Row>
          <HorizontalSpacer n={4} />
          <Row>
          <Button 
            kind="link"
            color={mainColors.black}
            // {...getButtonConfig("bdp50p2")} 
            fullWidth={false}
            onClick={() => {
              console.log("I'm clicked");
              setOpen(true);
          }}
          >
            More Details
          </Button>
          </Row>
        </Column>
      </ContentWrapper>
    </ElevatedCard>
    <BottomSheet open={isOpen} handleClose={handleClose}>
        <CardDetails cardDetails={cardDetails} />
    </BottomSheet>
    </>
    </>
  );
}

export default Card;
