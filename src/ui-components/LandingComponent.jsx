/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
import HeroLayout3 from "./HeroLayout3";
export default function LandingComponent(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1920px"
      height="1080px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "LandingComponent")}
    >
      <Image
        position="absolute"
        top="0%"
        bottom="0%"
        height="100%"
        left="0%"
        right="0%"
        width="100%"
        border="1px SOLID rgba(0,0,0,1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <HeroLayout3
        display="flex"
        gap="10px"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        direction="column"
        width="1920px"
        height="1080px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        padding="160px 240px 160px 240px"
        backgroundColor="rgba(0,0,0,0.5)"
        {...getOverrideProps(overrides, "HeroLayout3")}
      ></HeroLayout3>
    </View>
  );
}
