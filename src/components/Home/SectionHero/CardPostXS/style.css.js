import { style } from "@vanilla-extract/css";
import { variable } from "@/app/variables.css";
import { responsiveStyle } from "@/app/breakpoints.css";

export const styles = {
    cardPostCS: style({
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: '38.4rem',
        height: '10.4rem',
        ':hover': {
            'img': {
                transform: 'scale(1.05)',
            },
            'h6': {
                color: variable.pink,
            }
        },
        ...responsiveStyle({
            tablet: ({
                maxWidth: '100%',
                justifyContent: 'center',
            })
        })
    }),

    image: style({
        width: '10.4rem',
        height: '10.4rem',
        borderRadius: '0.8rem',
        overflow: 'hidden',
    }),

    img: style({
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform .3s ease, -webkit-transform .3s ease',
    }),

    info: style({
        flex: '1',
        marginLeft: '3.2rem',
        ...responsiveStyle({
            tablet: ({
                flex: 'initial',
            }),

            mobile: ({
                flex: '1',
            })
        })
    }),

    h6: style({
        marginTop: '12px',
        marginBottom: '0.5rem',
        transition: 'color .3s ease',
        overflow: 'hidden',
        display: '-webkit-box',
        textOverflow: 'ellipsis',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        color: variable.white,
    }),

    ul: style({
        display: 'flex',
        alignItems: 'center',
    }),

    li: style({
        display: 'flex',
        position: 'relative',
        '&:not(:first-child)': {
            marginLeft: '2.4rem',
            '&::after': {
                position: 'absolute',
                width: '0.6rem',
                height: '0.6rem',
                backgroundColor: variable.grayScale[300],
                borderRadius: '50%',
                left: '-1.5rem',
                top: '0.7rem',
            }
        }
    }),

    span: style({
        color: variable.grayScale[500],
        lineHeight: '150%',
        fontSize: '1.4rem',
        fontWeight: '400',
    })
}