import { style } from "@vanilla-extract/css";
import { variable } from "@/app/variables.css";
import { responsiveStyle } from "@/app/breakpoints.css";

export const styles = {
  section: style({
    padding: "8.6rem 0 9rem",
  }),

  container: style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    ...responsiveStyle({
      tablet: ({
        flexDirection: 'column',
        alignItems: 'center',
      })
    })
  }),

  textLeft: style({
    maxWidth: "20.5rem",
    ...responsiveStyle({
      tablet: ({
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "4rem",
      }),
    }),
  }),

  h4: style({
    marginTop: "1.4rem",
    color: variable.white,
  }),

  rightContainer: style({
    WebkitBoxFlex: 1,
    msFlex: 1,
    flex: 1,
    maxWidth: "82.4rem",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: '3.2rem',
    ...responsiveStyle({
      tablet: ({
        maxWidth: "65rem",
      }),
      mobile: ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }),
    }),
  }),

  itemPlaylist: style({
    ':hover': {
      h5: {
        opacity: 1,
      }
    },
    ...responsiveStyle({
      tablet: ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }),
    }),
  }),

  icons: style({
    display: "flex",
    alignItems: "center",
    marginBottom: "2.2rem",
    gap: "3.2rem",
  }),

  h5: style({
    color: variable.white,
    opacity: 0.7,
    transition: "opacity .3s ease",
    width: '19rem',
    ...responsiveStyle({
      tablet: ({
        textAlign: "center",
      }),
    }),
  }),
};
