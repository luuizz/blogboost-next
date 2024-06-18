import { style } from "@vanilla-extract/css";
import { variable } from "@/app/variables.css";
import { responsiveStyle } from "@/app/breakpoints.css";

export const styles = {
    header: style({
        position: "sticky",
        top: 0,
        left: 0,
        width: "100%",
        height: variable.headerHeight,
        background: 'rgba(15,12,27,.5)',
        WebkitBackdropFilter: 'blur(2rem)',
        backdropFilter: 'blur(2rem)',
        zIndex: 2025,
        display: 'flex',
        alignItems: 'center',
    }),
    
    container: style({
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        ".hamburger-react": {
            display: "none"
        },
        ...responsiveStyle({
            tablet: ({
                ".hamburger-react": {
                    display: "block"
                },
            })
        })
    }),

    logo: style({
        ...responsiveStyle({
            mobile: {
                maxWidth: '13rem',
            }
        })
    }),

    nav: style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 1,
        maxWidth: '83.2rem',
        ...responsiveStyle({
            desktopXS: {
                maxWidth: '75%',
            },
            tablet: {
                maxWidth: '100%',
                justifyContent: 'flex-end',
            },
        }),
    }),

    ul: style({
        display: 'flex',
        alignItems: 'center',
        gap: '6.4rem',
        ...responsiveStyle({
            tablet: {
                display: 'none',
            }
        })
    }),

    itemCategory: style({
        display: 'flex',
        alignItems: 'center',
        ':hover': {
            "span": {
                color: variable.pink,
            }
        }
    }),

    itemCategorySpan: style({
        color: variable.white,
        opacity: .7,
        fontWeight: 400,
        fontSize: '1.4rem',
        lineHeight: variable.lineHeight.base,
        marginLeft: '0.8rem',
        transition: 'color .3s ease',
    }),

    aside: style({
        padding: "6.4rem 0px",
        width: "100%",
        height: `calc(100vh - ${variable.headerHeight})`,
        backgroundColor: variable.black,
        opacity: 0,
        pointerEvents: "none",
        top: variable.headerHeight,
        transition: "all 0.3s ease 0s",
        transform: "translateY(100%)",
        zIndex: 50,
        position: "fixed", 
        "&.open": {
        pointerEvents: "all",
        opacity: 1,
        transform: "translateY(0px)",
        },
        'nav': {
            'ul': {
                display: 'block'
            },
            'form': {
                display: 'flex'
            }
        }
    }),
}
