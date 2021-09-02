import styled from "styled-components";
import variant from "@styled-system/variant";

const Button = styled("button")(
  // {
  //   appearance: "none",
  //   fontFamily: "inherit",
  // },
  variant({
    prop: "size",
    variants: {
      big: {
        color: "white",
        fontWeight: "700",
        px: "5",
        py: "3",
        width: "100%",
        bg: "black",
        borderRadius: "2",
        ":hover": {
          bg: "grey._800",
        },
        ":active": {
          bg: "grey._900",
        },
      },
      medium: {
        color: "white",
        bg: "secondary",
        ":hover": {
          bg: "black",
        },
      },
    },
  })
);
export default Button;
