import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner';

export default function About() {
  return (
    <Container>
      <Banner
        title="About"
        subtitle="Things and stuff"
        clickHandler={() => alert('Alerts are gross!!')}
      />
    </Container>
  );
}
