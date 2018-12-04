import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import { Grid, Row, Col } from 'react-bootstrap'
import Banner from '../Banner'
import BigIcon from '../BigIcon'
import Modal from '../Modal'

class Home extends Component {
  state = {
    showModal: false
  }

  toggleShow = () => this.setState({ showModal: !(this.state.showModal) })

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

      <Modal title="Woa, a modal!"
        show={this.state.showModal}
        onHide={e => this.setState({showModal: false})}
      >
        <p>I got clicked!</p>
      </Modal>
    </Grid>
  )
}

export default injectIntl(Home)
