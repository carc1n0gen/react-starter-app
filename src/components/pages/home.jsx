import React, { Component } from 'react'
import { Grid, Row, Col, Modal } from 'react-bootstrap'

import Banner from '../Banner'
import BigIcon from '../BigIcon'

export default class Home extends Component {
  state = {
    show: false
  }

  toggleShow = () => this.setState({ show: !(this.state.show) })

  render = () => (
    <Grid>
      <Banner
        title="React Is Cool"
        subtitle="Get'er done!"
        clickHandler={this.toggleShow}
      />
  
      <Row>
        <Col sm={4}>
          <BigIcon icon="user" />
          <p>
            Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Vestibulum tortor quam,
            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
            libero sit amet quam egestas semper. Aenean ultricies mi vitae
            est. Mauris placerat eleifend leo.
          </p>
        </Col>
  
        <Col sm={4}>
          <BigIcon icon="heart" />
          <p>
            Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Vestibulum tortor quam,
            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
            libero sit amet quam egestas semper. Aenean ultricies mi vitae
            est. Mauris placerat eleifend leo.
          </p>
        </Col>
  
        <Col sm={4}>
          <BigIcon icon="star" />
          <p>
            Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Vestibulum tortor quam,
            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
            libero sit amet quam egestas semper. Aenean ultricies mi vitae
            est. Mauris placerat eleifend leo.
          </p>
        </Col>
      </Row>

      <Modal show={this.state.show} onHide={this.toggleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Woa a modal!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>I got clicked!</h2>
        </Modal.Body>
      </Modal>
    </Grid>
  )
}
