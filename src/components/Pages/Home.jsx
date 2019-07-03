import React, { useState } from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import { Grid, Row, Col } from 'react-bootstrap'

import Banner from 'components/Banner'
import BigIcon from 'components/BigIcon'
import Modal from 'components/Modal'

export default function () {
  const [showModal, setShowModal] = useState(false)
  return (
    <Grid>
      <Banner
        title="React Is Cool"
        subtitle="Get'er done!"
        clickHandler={() => setShowModal(!showModal)}
      />
  
      <Row>
        <Col sm={4}>
          <BigIcon icon="user" />
          <p><FormattedMessage id="long-text" /></p>
        </Col>
  
        <Col sm={4}>
          <BigIcon icon="heart" />
          <p><FormattedMessage id="long-text" /></p>
        </Col>
  
        <Col sm={4}>
          <BigIcon icon="star" />
          <p><FormattedMessage id="long-text" /></p>
        </Col>
      </Row>

      <Modal
        title="Woa, a modal!"
        show={showModal}
        onHide={() => setShowModal(!showModal)}
      >
        <p>I got clicked!</p>
      </Modal>
    </Grid>
  )
}
