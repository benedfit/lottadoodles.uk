import { Button, Card, Grid, Prose, VisuallyHidden } from '@newhighsco/chipset'
import { object, string } from 'prop-types'
import React from 'react'
import urlJoin from 'url-join'

import cardVariants from '~components/Card/Card.module.scss'
import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import config from '~config'
import image from '~images/avatar.jpg'

const { url } = config

const options = [
  { name: 'Sketches', description: 'Description', image, disabled: true },
  { name: 'Thigh Up', description: 'Description', href: '/', image },
  { name: 'Glam Sheet', description: 'Description', href: '/', image }
]

const CommisionsPage = ({ meta, variant = 'tertiary' }) => (
  <PageContainer meta={meta} variant={variant}>
    <VisuallyHidden>
      <h1>Comissions</h1>
    </VisuallyHidden>
    <Section size="desktopMedium">
      <Grid>
        {options.map(({ name, description, href, image, disabled }, index) => (
          <Grid.Item
            key={name}
            style={{ marginTop: index !== 0 ? '1em' : undefined }}
          >
            <Grid valign="middle">
              <Grid.Item sizes="one-third">
                <Card
                  href={href}
                  heading={
                    <Button disabled={disabled} variant={variant}>
                      {disabled ? 'Not accepting requests' : 'Contact'}
                    </Button>
                  }
                  image={{ src: image, ratio: '16:9' }}
                  className={cardVariants[variant]}
                />
              </Grid.Item>
              <Grid.Item sizes="two-thirds">
                <Prose>
                  <h2>{name}</h2>
                  <p>{description}</p>
                </Prose>
              </Grid.Item>
            </Grid>
          </Grid.Item>
        ))}
      </Grid>
    </Section>
  </PageContainer>
)

export const getStaticProps = async () => ({
  props: {
    meta: { canonical: urlJoin(url, '/commisions') }
  }
})

CommisionsPage.propTypes = {
  variant: string,
  meta: object
}

export default CommisionsPage
