import colors from './_colors.module.scss'

export const cssVariables = (keys = []) => {
  if (typeof keys === 'string') keys = [keys]

  return keys?.reduce(
    (styles, color) => ({
      ...styles,
      [`--colors-${color}`]: colors[color]
    }),
    {}
  )
}
