import colors from './_colors.module.scss'

export const cssVariables = Object.entries(colors).reduce(
  (styles, [key, value]) => ({
    ...styles,
    [`--colors-${key}`]: value
  }),
  {}
)
