import { Prose } from '@newhighsco/chipset'
import { LogoJsonLd, SocialProfileJsonLd } from 'next-seo'
import { object } from 'prop-types'
import React from 'react'
import urlJoin from 'url-join'

import PageContainer from '~components/PageContainer'
import config from '~config'

const { fullName, shortName, title, logo, socialLinks, url } = config

const HomePage = ({ meta }) => (
  <PageContainer meta={meta}>
    <SocialProfileJsonLd
      type="Person"
      name={fullName}
      url={url}
      sameAs={Object.values(socialLinks)}
    />
    {logo?.bitmap && <LogoJsonLd url={url} logo={urlJoin(url, logo.bitmap)} />}
    <Prose align="center">
      <h1>
        <strong>Hello! I'm {shortName}</strong>, an animation and game design
        student based in the UK.
      </h1>
      <p>
        I create work with a focus on fantasy illustration, portrait art and
        character design as well as some 3D modelling and animation.
      </p>
    </Prose>
  </PageContainer>
)

HomePage.propTypes = {
  meta: object
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        canonical: urlJoin(url, '/'),
        customTitle: true,
        title
      }
    }
  }
}

export default HomePage
