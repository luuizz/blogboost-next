import { style } from "@vanilla-extract/css";
import { variable } from "@/app/variables.css";
import { responsiveStyle } from "@/app/breakpoints.css";

export const styles = {
    cardPostLG: style({
        width: '100%',
        display: 'block',
        maxWidth: '72.8rem',
        ':hover': {
            'img': {
                transform: 'scale(1.05)',
            },

            'h3': {
                color: variable.pink,
            }
        }
    }),

    cardPostLGImageBox: style({
        width: '100%',
        height: '32rem',
        borderRadius: '8px',
        overflow: 'hidden',
        marginBottom: '3.5rem',
        ...responsiveStyle({
            mobile: ({
                height: '20rem',
                marginBottom: '2rem'
            }),

        })
    }),

    cardPostLGImage: style({
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform .3s ease, -webkit-transform .3s ease',
    }),

    topInfoPostLG: style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: '1.6rem',
        ...responsiveStyle({
            mobile: ({
                justifyContent: 'center',
            })
        })
    }),

    listPostLG: style({
        listStyleType: 'none',
        display: 'flex',
        alignItems: 'center',
        ...responsiveStyle({
            mobile: ({
                display: 'none',
            })
        })
    }),

    li: style({
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        '&:not(:first-child)': {
            marginLeft: '4rem',
        }
    }),

    span: style({
        fontWeight: 400,
        fontSize: '1.4rem',
        lineHeight: '150%',
        color: variable.grayScale[500],
        marginLeft: '0.8rem'
    }),

    h3: style({
        maxWidth: '95%',
        transition: 'color .3s ease',
        color: variable.white,
        ...responsiveStyle({
            tablet: ({
                maxWidth: '100%',
                textAlign: 'center',
            }),

            mobile: ({
                fontSize: '2.4rem',
            })
        })
    }),
}