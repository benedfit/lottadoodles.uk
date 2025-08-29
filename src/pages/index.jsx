import {
  Button,
  Card,
  ContentContainer,
  Grid,
  Prose
} from '@newhighsco/chipset'
import Image from 'next/image'
import { LogoJsonLd, SocialProfileJsonLd } from 'next-seo'
import { object } from 'prop-types'
import React from 'react'
import urlJoin from 'url-join'

import Avatar from '~components/Avatar'
import PageContainer from '~components/PageContainer'
import config from '~config'
import avatarUrl from '~images/avatar.jpg'

const { fullName, shortName, title, logo, socialLinks, url } = config

const SampleImage = () => (
  <Image src={avatarUrl} alt="" width={1000} height={1000} />
)

const HomePage = ({ meta }) => (
  <PageContainer meta={meta}>
    <SocialProfileJsonLd
      type="Person"
      name={fullName}
      url={url}
      sameAs={Object.values(socialLinks)}
    />
    {logo?.bitmap && <LogoJsonLd url={url} logo={urlJoin(url, logo.bitmap)} />}

    <Grid flex align="center" valign="middle">
      <Grid.Item>
        <Avatar />
      </Grid.Item>
      <Grid.Item>
        <Prose>
          <h1>
            <strong>Hello! I'm {shortName}</strong>, an animation and game
            design student based in the UK.
          </h1>
          <p>
            I create work with a focus on fantasy illustration, portrait art and
            character design as well as some 3D modelling and animation.
          </p>
        </Prose>
      </Grid.Item>
    </Grid>
    <ContentContainer size="desktopMedium">
      <Grid>
        <Grid.Item sizes="tablet-one-third">
          <Card
            href="/portfolio"
            heading={<Button>Portfolio</Button>}
            image={{ render: () => <SampleImage />, ratio: '4:3' }}
          />
        </Grid.Item>
        <Grid.Item sizes="tablet-one-third">
          <Card
            href="/college"
            heading={<Button>College work</Button>}
            image={{ render: () => <SampleImage />, ratio: '4:3' }}
          />
        </Grid.Item>
        <Grid.Item sizes="tablet-one-third">
          <Card
            href="/commisions"
            heading={<Button>Commisions</Button>}
            image={{ render: () => <SampleImage />, ratio: '4:3' }}
          />
        </Grid.Item>
      </Grid>
    </ContentContainer>
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
