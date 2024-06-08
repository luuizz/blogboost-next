const breakpoints = {
    mobile: '560px',
    tablet: '991px',
    desktop: '1200px',
  };
  
  export const responsiveStyle = (stylesByBreakpoint) => {
    const responsiveStyles = Object.entries(stylesByBreakpoint).reduce(
      (acc, [breakpointKey, styles]) => {
        const breakpoint = breakpoints[breakpointKey];
  
        if (!breakpoint) {
          throw new Error(`Breakpoint ${breakpointKey} is not defined`);
        }
  
        return {
          ...acc,
          '@media': {
            ...acc['@media'],
            [`(max-width: ${breakpoint})`]: styles,
          },
        };
      },
      {}
    );
  
    return responsiveStyles;
};