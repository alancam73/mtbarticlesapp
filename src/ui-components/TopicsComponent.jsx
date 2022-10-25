/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  CheckboxField,
  Image,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function TopicsComponent(props) {
  const { getTopics, overrides, ...rest } = props;
  return (
    <View
      width="1920px"
      height="1080px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(246,247,241,1)"
      {...rest}
      {...getOverrideProps(overrides, "TopicsComponent")}
    >
      <Image
        width="1920px"
        height="1080px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "topicsBackgroundImg")}
      ></Image>
      <View
        width="359px"
        height="532px"
        position="absolute"
        top="62px"
        left="96px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 418")}
      >
        <View
          width="327px"
          height="443px"
          position="absolute"
          top="14px"
          left="10px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "Rectangle 1164")}
        ></View>
        <Button
          display="flex"
          gap="0"
          position="absolute"
          top="398px"
          left="128px"
          justifyContent="center"
          alignItems="center"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="11px"
          padding="8px 16px 8px 16px"
          backgroundColor="rgba(255,255,255,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="Submit"
          {...getOverrideProps(overrides, "SubmitButton")}
        ></Button>
        <CheckboxField
          display="flex"
          gap="12px"
          position="absolute"
          top="318px"
          left="67px"
          justifyContent="center"
          alignItems="center"
          padding="0px 0px 0px 0px"
          label="Scenic"
          size="large"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="start"
          {...getOverrideProps(overrides, "ScenicCheckbox")}
        ></CheckboxField>
        <CheckboxField
          display="flex"
          gap="12px"
          position="absolute"
          top="259px"
          left="67px"
          justifyContent="center"
          alignItems="center"
          padding="0px 0px 0px 0px"
          label="Maintenance"
          size="large"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="start"
          {...getOverrideProps(overrides, "MaintCheckbox")}
        ></CheckboxField>
        <CheckboxField
          display="flex"
          gap="12px"
          position="absolute"
          top="202px"
          left="67px"
          justifyContent="center"
          alignItems="center"
          padding="0px 0px 0px 0px"
          label="Tech"
          size="large"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="start"
          {...getOverrideProps(overrides, "TechCheckbox")}
        ></CheckboxField>
        <CheckboxField
          display="flex"
          gap="12px"
          position="absolute"
          top="142px"
          left="66px"
          justifyContent="center"
          alignItems="center"
          padding="0px 0px 0px 0px"
          label="Downhill"
          size="large"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="start"
          checked={getTopics?.downhillTopic}
          {...getOverrideProps(overrides, "DownhillCheckbox")}
        ></CheckboxField>
        <CheckboxField
          display="flex"
          gap="12px"
          position="absolute"
          top="79px"
          left="66px"
          justifyContent="center"
          alignItems="center"
          padding="0px 0px 0px 0px"
          label="Jumping"
          size="large"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="start"
          checked={getTopics?.jumpingTopic}
          {...getOverrideProps(overrides, "JumpingCheckbox")}
        ></CheckboxField>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="30px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="278px"
          height="22px"
          position="absolute"
          top="24px"
          left="29px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Pick your favorite MTB topics"
          {...getOverrideProps(overrides, "Pick your favorite MTB topics")}
        ></Text>
      </View>
    </View>
  );
}
