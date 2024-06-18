import { style } from "@vanilla-extract/css";
import { variable } from "@/app/variables.css";
import { responsiveStyle } from "@/app/breakpoints.css";

export const heroStyles = {
  section: style({
    position: 'relative',
    backgroundColor: variable.white,
    padding: '4.8rem 0 12rem',
    ':before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: variable.grayScale[100],
      height: '34.8rem',
      width: '100%',
      zIndex: 0,
    }
  }),

  topDetails: style({
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),

  breadcrumbs: style({
    display: 'flex',
    alignItems: 'center',
  }),

  breadLi: style({
    position: 'relative',
    ':after': {
      content: '""',
    position: 'absolute',
    background: variable.grayScale[500],
    top: '0.4rem',
    right: '-2rem',
    width: '0.5rem',
    height: '0.5rem',
    },
    '&:not(:first-child)': {
      marginLeft: '4rem',
    },
    '&:last-child:after': {
      display: 'none',
    }
  }),

  aBread: style({
    display: 'block',
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: '105%',
    color: variable.grayScale[500],
    transition: 'color 0.3s ease',
    ':hover': {
      color: variable.white,
    }
  }),

  spanBread: style({
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: '105%',
    color: variable.white,
  }),

  btn: style({
    display: 'flex',
    alignItems: 'center',
    fontWeight: 600,
    fontSize: '1.6rem',
    lineHeight: '100%',
    color: variable.white,
    transition: 'filter 0.3s ease, -webkit-filter 0.3s ease',
    ':hover': {
      filter: 'brightness(0.6)',
    }
  }),

  btnImg: style({
    marginRight: '1.4rem'
  }),

  featurePost: style({
    position: 'relative',
    zIndex: 1,
    marginTop: '4.8rem',
    marginBottom: '8rem',
    ...responsiveStyle({
      mobile: ({
        marginBottom: '4rem',
        marginTop: '0',
      }),
    }),
  }),

  image: style({
    width: '100%',
    height: '47.2rem',
    borderRadius: '0.8rem',
    overflow: 'hidden',
    ...responsiveStyle({
      mobile: ({
        height: '25rem',
      }),
    }),
  }),

  img: style({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }),

  boxInfos: style({
    position: 'relative',
    backgroundColor: variable.white,
    boxShadow: '0px 24px 40px -8px rgba(16, 12, 28, 0.06)',
    borderRadius: '0.8rem',
    width: '100%',
    maxWidth: '100.8rem',
    padding: '4.8rem 7.2rem',
    margin: '0 auto',
    marginTop: '-10.6rem',
    zIndex: 2,
    ...responsiveStyle({
      tablet: ({
        maxWidth: '65rem',
      }),
      mobile: ({
        marginTop: '-5.6rem',
        maxWidth: '90%',
        padding: '2rem'
      }),
    }),
  }),

  h1: style({
    color: variable.grayScale[100],
    margin: '2rem 0 2.8rem',
    ...responsiveStyle({
      mobile: ({
        fontSize: '2.2rem',
        margin: '1.5rem 0'
      })
    }),
  }),

  ulBox: style({
    display:  'flex',
    alignItems: 'center',
    gap: '2.4rem',
    ...responsiveStyle({
      mobile: ({
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '2rem',
      }),
    }),
  }),

  liBox: style({
    display: 'flex',
    alignItems: 'center',
  }),

  linkBox: style({
    display: 'flex',
    alignItems: 'center',
  }),

  spanBox: style({
    fontWeight: 600,
    fontSize: '1.4rem',
    lineHeight: '150%',
    color: variable.grayScale[400],
    marginLeft: '0.8rem',
  }),
}