import {
  Authenticator,
  Flex,
  Grid,
  Image,
  useTheme,
  View
} from "@aws-amplify/ui-react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { SignInHeader } from "./SignInHeader";
import { SignInFooter } from "./SignInFooter";

import mtb_rhs from './mtb10-900x1600.jpg';


const components = {
  Header,
  SignIn: {
    Header: SignInHeader,
    Footer: SignInFooter
  },
  Footer
};

export function Login() {
  const { tokens } = useTheme();

  return (
    <Grid templateColumns={{ base: "1fr 0", medium: "1fr 1fr" }}>
      <Flex
        backgroundColor={tokens.colors.background.secondary}
        justifyContent="center"
      >
        <Authenticator components={components} />

      </Flex>
      <View height="100vh">
        <Image
//          src="https://images.unsplash.com/photo-1495954222046-2c427ecb546d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1600&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29tcHV0ZXJzfHx8fHx8MTYzNzE5MzE2MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900"
          src={mtb_rhs}
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </View>
    </Grid>
  );
}
