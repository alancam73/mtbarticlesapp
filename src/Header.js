import { Flex, Image, useTheme } from "@aws-amplify/ui-react";
import mtblogo from './vecteezy_mountain-bike-logo-design-template_100-100.jpg'

export function Header() {
  const { tokens } = useTheme();

  return (
    <Flex justifyContent="center">
      <Image
        alt="logo"
//        src="https://docs.amplify.aws/assets/logo-dark.svg"
        src={mtblogo}
        padding={tokens.space.medium}
      />
    </Flex>
  );
}
