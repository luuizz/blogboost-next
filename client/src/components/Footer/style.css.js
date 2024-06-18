import { style } from "@vanilla-extract/css";
import { variable } from "@/app/variables.css";
import { responsiveStyle } from "@/app/breakpoints.css";

export const styles = {
  footer: style({
    padding: '6rem 0',
    ...responsiveStyle({
      mobile: ({
        padding: '4rem 0',
      })
    })
  }),

  container: style({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    ...responsiveStyle({
      tablet: ({
        flexDirection:  'column',
        alignItems: 'center',
      })
    })
  }),

  leftContainer: style({
    flex: 1,
    maxWidth: '82.9rem',
    display: 'flex',
    alignItems: 'flex-start',
    ...responsiveStyle({
      tablet: ({
        maxWidth: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '4rem'
      })
    })
  }),

  strong: style({
    color: variable.white,
    lineHeight: '150%',
    fontSize: '1.4rem',
    fontWeight: 700,
  }),

  p: style({
    maxWidth: '100%',
    fontSize: '1.6rem',
  }),

  leftP: style({
    flex: '1',
    fontWeight: 400,
    lineHeight: '150%',
    color: variable.white,
    opacity: .8,
    marginLeft: '8.4rem',
    ...responsiveStyle({
      tablet: ({
        marginLeft: '3rem',
        maxWidth: '70%',
      }),
      mobile: ({
        maxWidth: '90%',
        textAlign: 'center',
        marginLeft: 0,
        marginTop: '2rem',
      })
    })
  }),

  righContainer: style({
    display: 'flex',
    alignItems: 'center',
  }),

  group: style({
    display: 'flex',
    alignItems: 'center',
    marginRight: '7.1rem',
  }),

  spanGroup: style({
    fontSize: '1.6rem',
    marginRight: '1.6rem',
    color: variable.white,
  }),

  button: style({
    width: '3.7rem',
    height: '3.7rem',
    border: '2px solid rgba(255, 255, 255, 0.4)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'filter 0.3s ease, -webkit-filter 0.3s ease',
    ':hover': {
      filter: 'brightness(0.5)',
    }
  })
}