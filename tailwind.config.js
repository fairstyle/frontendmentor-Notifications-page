/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
    colors:{
      // Using modern `hsl`
      themered: 'hsl(var(--color-themered) / <alpha-value>)',
      themeblue: 'hsl(var(--color-themeblue) / <alpha-value>)',
      themewhite: 'hsl(var(--color-themewhite) / <alpha-value>)',
      verylightgrayblue: 'hsl(var(--color-verylightgrayblue) / <alpha-value>)',
      lighgrayblueone: 'hsl(var(--color-lighgrayblueone) / <alpha-value>)',
      lighgraybluetwo: 'hsl(var(--color-lighgraybluetwo) / <alpha-value>)',
      grayblue: 'hsl(var(--color-grayblue) / <alpha-value>)',
      moredarkgrayblue: 'hsl(var(--color-moredarkgrayblue) / <alpha-value>)',
      darkgrayblue: 'hsl(var(--color-darkgrayblue) / <alpha-value>)',
      verydarkblue: 'hsl(var(--color-verydarkblue) / <alpha-value>)',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    }
  },
  plugins: [],
}
