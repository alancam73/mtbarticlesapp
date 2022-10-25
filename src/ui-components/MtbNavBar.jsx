/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, View } from "@aws-amplify/ui-react";
export default function MtbNavBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      width="1440px"
      height="89px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MtbNavBar")}
    >
      <View
        width="532px"
        height="70px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 419")}
      >
        <Image
          width="300px"
          height="50px"
          position="absolute"
          top="10.5px"
          left="55px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "mtbIcon")}
        ></Image>
      </View>
      <Flex
        gap="32px"
        width="764px"
        height="42px"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <Button
          display="flex"
          gap="0"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="42px"
          position="relative"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          backgroundColor="rgba(220,222,224,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="Unsubscribe"
          {...getOverrideProps(overrides, "UnsubscribeButton")}
        ></Button>
        <Button
          display="flex"
          gap="0"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="42px"
          position="relative"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          backgroundColor="rgba(220,222,224,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="Sign Out"
          {...getOverrideProps(overrides, "SignOutButton")}
        ></Button>
        <Image
          width="50px"
          height="60px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "helmetUser")}
        ></Image>
      </Flex>
    </Flex>
  );
}
