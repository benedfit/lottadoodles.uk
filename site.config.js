import logoBitmap from '@images/logo.png'
import logoVector from '@images/logo.svg'
import openGraphImage from '@images/sharing.jpg'
import colors from '@styles/_colors.module.scss'

const config = {
  url: process.env.NEXT_PUBLIC_SITE_URL,
  name: 'lottadoodles',
  shortName: 'Charlotte',
  titleTemplate: name => `☆ %s ☆ ${name} ☆`,
  title: '☆ lottadoodles ☆ animation + game design student ☆',
  description: '☆ animation + game design student ☆ fantasy + character art ☆',
  logo: {
    bitmap: logoBitmap.src,
    vector: logoVector
  },
  openGraphImage: openGraphImage.src,
  themeColor: colors.sky,
  socialLinks: {
    instagram: 'https://www.instagram.com/lotta.doodles/'
  }
}

export default config
