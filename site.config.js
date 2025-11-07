import logoBitmap from '~images/logo.png'
import logoVector from '~images/logo.svg'
import openGraphImage from '~images/sharing.jpg'
import colors from '~styles/_colors.module'

const config = {
  url: process.env.NEXT_PUBLIC_SITE_URL,
  name: 'lottadoodles',
  fullName: 'Charlotte Edwards',
  shortName: 'Charlotte',
  titleTemplate: name => `%s ☆ ${name}`,
  title: 'lottadoodles ☆ animation and game design student',
  description:
    'animation and game design student ☆ fantasy illustration, portrait art and character design',
  logo: { bitmap: logoBitmap.src, vector: logoVector },
  openGraphImage: openGraphImage.src,
  themeColor: colors.sky,
  socialLinks: {
    Instagram: 'https://www.instagram.com/lotta.doodles',
    Bluesky: 'https://bsky.app/profile/lottadoodles.uk',
    YouTube: 'https://www.youtube.com/@lottadoodles',
    TikTok: 'https://www.tiktok.com/@lotta.doodles'
  }
}

export default config
