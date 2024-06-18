import { style } from "@vanilla-extract/css";
import { variable } from "@/app/variables.css";
import { responsiveStyle } from "@/app/breakpoints.css";

export const stlyes = {
    heroPost: style({
        paddingTop: '8.3rem',
        paddingBottom: '11.7rem',
    }),

    containerHero: style({
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'row',
        ...responsiveStyle({
            desktopBase: ({
                display: 'grid',
                gridTemplateColumns: '1fr 35rem',
                gridGap: '3rem',
            }),
            tablet: ({
                gridTemplateColumns: '1fr',
                gridGap: '4rem',
            }),
            mobile: ({
                gridGap: 0
            })
        })
    }),

    leftContainer: style({
        flex: 1,
        maxWidth: '72.8rem',
        ...responsiveStyle({
            mobile: ({
                borderBottom: '1px solid rgba(255,255,255,.1)',
                paddingBottom: '4rem'
            })
        })
    }),

    titleLeft: style({
        marginBottom: '4.2rem',
        ...responsiveStyle({
            tablet: ({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '4rem'
            }),

            mobile: ({
                marginBottom: '3rem'
            })
        })
    }),

    h2: style({
        marginTop: '1.4rem',
    }),

    rightContainer: style({
        flex: 1,
        maxWidth: '38.4rem',
        marginTop: '4rem',
        ...responsiveStyle({
            tablet: ({
                maxWidth: '100%',
            })
        })
    }),

    allCards: style({
        marginTop: '4.2rem',
        ...responsiveStyle({
            mobile: ({
                marginTop: "3rem"
            }),
        }),
    }),

    itemPost: style({
        position: 'relative',
        '&:not(:last-child)': {
            paddingBottom: '3.2rem',
            marginBottom: '3.2rem',
            borderBottom: '2px solid rgba(255,255,255, .1)',
        },
        ...responsiveStyle({
            mobile: ({
                '&:not(:last-child)': {
                    paddingBottom: '2rem',
                    marginBottom: '2rem',
                },
            })
        })
    }),


}
