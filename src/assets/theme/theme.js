const colors = {
    active: '#2E5BFF',
    accent: '#FA754C',
    black: '#000000',
    white: '#FFFFFF',
    gray: '#A7A7A7',
    button: '#f4f5f7'
  };
  
  const sizes = {
    font: 14,
    h1: 22,
    paragraph: 14,
    welcome: 18,
    name:21
  };
  
  const fonts = {
    welcome: {
      fontSize: sizes.title,
      color: colors.gray,
      letterSpacing: -0.6,
      lineHeight: 22,
      lineHeight: sizes.welcome =4,
    },

    name: {
      fontSize: sizes.name,
      fontWeight: '600',
      color: colors.black,
      letterSpacing: -1.1,
      lineHeight: 25,
    },

    caption: {
        fontSize: sizes.title,
        color: colors.gray,
        letterSpacing: -0.6,
        lineHeight: 22,
        lineHeight: sizes.welcome =4,
      },

    h1: {
        fontSize: sizes.h1,
        color: colors.black,
        letterSpacing: -10,
        lineHeight: sizes.h1,
      },
    
    button: {
      fontSize: sizes.button,
      color: colors.black,
      letterSpacing:-0.0,
      lineHeight: sizes.button =4,
    },
  };
  
  export {
    colors,
    sizes,
    fonts,
  };