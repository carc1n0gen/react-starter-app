import React from 'react';
import { Grid } from 'react-bootstrap';
import Banner from '../Banner';

export default function About() {
  return (
    <Grid>
      <Banner
        title="About"
        subtitle="Things and stuff"
        clickHandler={() => alert('Alerts are gross!!')}
      />
    </Grid>
  );
}
