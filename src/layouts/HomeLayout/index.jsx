import { Button, Card, Grid, Image, Prose } from '@newhighsco/chipset'
import { LogoJsonLd, SocialProfileJsonLd } from 'next-seo'
import { object } from 'prop-types'
import React from 'react'
import urlJoin from 'url-join'

import Avatar from '~components/Avatar'
import cardVariants from '~components/Card/Card.module.scss'
import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import config from '~config'
import avatarUrl from '~images/avatar.jpg'

import styles from './HomeLayout.module.scss'

const { fullName, shortName, logo, socialLinks, url } = config

const sections = [
  {
    heading: 'Portfolio',
    href: '/portfolio',
    variant: 'primary',
    src: avatarUrl
  },
  {
    heading: 'College work',
    href: '/college',
    variant: 'secondary',
    src: avatarUrl
  },
  {
    heading: 'Commisions',
    href: '/commisions',
    variant: 'tertiary',
    src: avatarUrl
  }
]

const HomeLayout = ({ meta }) => (
  <PageContainer meta={meta}>
    <SocialProfileJsonLd
      type="Person"
      name={fullName}
      url={url}
      sameAs={Object.values(socialLinks)}
    />
    {logo?.bitmap && <LogoJsonLd url={url} logo={urlJoin(url, logo.bitmap)} />}
    <Section size="desktop">
      <Grid flex valign="middle" className={styles.spaced}>
        <Grid.Item
          align="center"
          sizes={['tablet-landscape-one-third', 'desktop-one-quarter']}
        >
          <Avatar />
        </Grid.Item>
        <Grid.Item
          sizes={['tablet-landscape-two-thirds', 'desktop-three-quarters']}
        >
          <Prose>
            <h1>
              <strong>Hello! I'm {shortName}</strong>, an animation and game
              design student based in the UK.
            </h1>
            <p>
              I create work with a focus on fantasy illustration, portrait art
              and character design as well as some 3D modelling and animation.
            </p>
          </Prose>
        </Grid.Item>
      </Grid>
    </Section>
    <Section size="desktopMedium">
      <Grid flex className={styles.spaced}>
        {sections.map(({ heading, href, variant, src }) => (
          <Grid.Item
            key={href}
            sizes="tablet-landscape-one-third"
            className={styles.section}
          >
            <Card
              href={href}
              heading={<Button variant={variant}>{heading}</Button>}
              image={
                src && {
                  render: () => (
                    <Image src={src} alt="" width={1000} height={1000} />
                  ),
                  ratio: '4:3'
                }
              }
              className={cardVariants[variant]}
            />
          </Grid.Item>
        ))}
      </Grid>
    </Section>
  </PageContainer>
)

HomeLayout.propTypes = {
  meta: object
}

export default HomeLayout
