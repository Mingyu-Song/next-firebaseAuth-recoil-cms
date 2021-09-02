import Box from "components/box/Box";
import Text from "components/text/Text";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { sizes } from "styles/theme";
const Nav = () => {
  const [status, setStatus] = useState("top");
  useEffect(() => {
    const scrollHandler = (e) => {
      const scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 100) {
        if (status !== "down") {
          setStatus("down");
        }
      } else {
        if (status !== "top") {
          setStatus("top");
        }
      }
    };
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [status]);

  return (
    <NavBox
      as="nav"
      display="flex"
      position="fixed"
      zIndex="10"
      width="100%"
      top={0}
      left={0}
      justifyContent="center"
      backgroundColor={status === "top" ? "transparent" : "black"}
    >
      <Box px="3" py="2" width={[1]} maxWidth={[`${sizes.desktop}px`]}>
        <Heading
          as="h1"
          fontSize={status === "top" ? [4, 4, 5] : [3, 3, 4]}
          lineHeight={status === "top" ? 1.5 : 1.3}
          color={status === "top" ? "black" : "white"}
          fontFamily="FugazOne"
        >
          ROLLIE
        </Heading>
      </Box>
    </NavBox>
  );
};

export default Nav;

const Heading = Text;

const NavBox = styled(Box)`
  transition: all 0.2s ease-in-out;
  will-change: all;
  h1 {
    transition: all 0.1s ease-in-out;
    will-change: all;
  }
`;
