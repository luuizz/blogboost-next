import { style } from "@vanilla-extract/css";
import { variable } from "@/app/variables.css";
import { responsiveStyle } from "@/app/breakpoints.css";

export const styles = {
  sectionArtigos: style({
    background:
      "linear-gradient(180deg, #0F0C1B 85.69%, rgba(15, 12, 27, 0) 100%)",
    padding: "12rem 0",
    borderBottom: `2px solid ${variable.darkScale}`,
  }),

  top: style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: "4rem",
    ...responsiveStyle({
      mobile: {
        alignItems: "center",
        flexDirection: "column",
      },
    }),
  }),

  h2: style({
    ...responsiveStyle({
      mobile: {
        marginBottom: "2rem",
      },
    }),
  }),

  p: style({
    color: variable.grayScale[600],
  }),

  allPosts: style({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "4rem 3.2rem",
    marginBottom: "8rem",
    ...responsiveStyle({
      desktopBase: {
        gridGap: "2rem",
        marginBottom: "4rem",
      },

      tablet: {
        gridTemplateColumns: "1fr 1fr",
      },

      mobile: {
        gridTemplateColumns: "1fr",
        gridGap: "3.2rem",
      },
    }),
  }),
};
