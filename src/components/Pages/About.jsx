import React from 'react'
import { Grid } from 'react-bootstrap'
import Banner from '../Banner'

export default () => (
  <Grid>
    <Banner
      title="About"
      subtitle="Things and stuff"
      clickHandler={e => alert('Alerts are gross!!')}
    />
  </Grid>
)
