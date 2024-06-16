import { style } from "@vanilla-extract/css";
import { variable } from "@/app/variables.css";
import { responsiveStyle } from "@/app/breakpoints.css";

export const stylesCard = {
  cardDefault: style({
    display: "block",
    width: "100%",
    maxWidth: "38.4rem",
    ":hover": {
      img: {
        transform: "scale(1.05)",
      },
      h6: {
        color: variable.pink,
      },
    },
    ...responsiveStyle({
      mobile: {
        maxWidth: "100%",
      },
    }),
  }),

  image: style({
    position: "relative",
    width: "100%",
    height: "20rem",
    borderRadius: ".8rem",
    overflow: "hidden",
    marginBottom: "1.6rem",
    ":after": {
      content: '""',
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(180deg, rgba(15, 17, 22, 0.025) 45.77%, rgba(11, 8, 20, 0.25) 92.14%)",
      borderRadius: ".6rem",
      position: "absolute",
      bottom: 0,
      left: 0,
      zIndex: 1,
    },
  }),

  img: style({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform .3s ease, -webkit-transform .3s ease",
  }),

  h6: style({
    marginBottom: ".8rem",
    marginTop: ".5rem",
    transition: "color .3s ease",
    color: variable.white,
  }),
};
