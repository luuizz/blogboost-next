import { style } from "@vanilla-extract/css";
import { variable } from "@/app/variables.css";
import { responsiveStyle } from "@/app/breakpoints.css";

export const styles = {
    form: style({
        display: 'flex',
        alignItems: 'center',
        width: "100%",
        maxWidth: '28rem',
        height: '3.6rem',
        ...responsiveStyle({
            mobile: {
                display: 'none',
            }
        })
    }),

    input: style({
        flex: 1,
        height: "100%",
        backgroundColor: 'rgba(0,0,0,0)',
        border: `1px solid rgba(${variable.grayScale.alpha5}, 0.25)`,
        borderRadius: '.4rem 0 0 .4rem',
        padding: '0 1.6rem',
        color: variable.white,
        transition: 'border .3s ease',
        fontFamily: '__atypBLText_b568df',
        fontWeight: 400,
        '::placeholder': {
            color: 'rgba(255,255,255,.5)',
        },
        ':focus': {
            border: `1px solid ${variable.pink}`,
        }
    }),

    button: style({
        width: '3.6rem',
        height: '3.6rem',
        borderRadius: '0.4rem',
        backgroundColor: variable.pink,
        transition: 'filter .3s ease, -webkit-filter .3s ease',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '-0.5rem',
        ':hover': {
            filter: 'brightness(0.8)',
            WebkitFilter: 'brightness(0.8)',
        }
    })
}