import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUser, FaHeart, FaStar } from 'react-icons/fa';

import Banner from 'components/Banner';
import BigIcon from 'components/BigIcon';
import Modal from 'components/Modal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Container>
      <Banner
        title="React Is Cool"
        subtitle="Get'er done!"
        clickHandler={() => setShowModal(!showModal)}
      />

      <Row>
        <Col sm={4}>
          <BigIcon icon={<FaUser />} />
          <p><FormattedMessage id="long-text" /></p>
        </Col>

        <Col sm={4}>
          <BigIcon icon={<FaHeart />} />
          <p><FormattedMessage id="long-text" /></p>
        </Col>

        <Col sm={4}>
          <BigIcon icon={<FaStar />} />
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
    </Container>
  );
}
