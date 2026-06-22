import { Button, Card, Grid, Prose, VisuallyHidden } from '@newhighsco/chipset'
import { object } from 'prop-types'
import React from 'react'

import cardVariants from '~components/Card/Card.module.scss'
import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import image from '~images/avatar.jpg'

const options = [
  { name: 'Sketches', description: 'Description', image, disabled: true },
  { name: 'Thigh Up', description: 'Description', href: '/', image },
  { name: 'Glam Sheet', description: 'Description', href: '/', image }
]

const CommissionLayout = ({ meta }) => (
  <PageContainer meta={meta} variant="tertiary">
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

CommissionLayout.propTypes = { meta: object }

export default CommissionLayout
