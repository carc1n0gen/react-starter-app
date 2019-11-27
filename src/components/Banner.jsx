import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Jumbotron, Button } from 'react-bootstrap';

export default function Banner({ title, subtitle, clickHandler }) {
  return (
    <Jumbotron>
      <h1>{title}</h1>
      <p>
        {subtitle
          && <span>{subtitle}</span>
        }
        &nbsp;
        {clickHandler
          && (
            <Button variant="primary" onClick={clickHandler}>
              Click me
            </Button>
          )
        }
      </p>
      <p>
        The following word uses react-intl:
        {' '}
        <FormattedMessage id="banner.word.color" />
      </p>
    </Jumbotron>
  );
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  clickHandler: PropTypes.func,
};

Banner.defaultProps = {
  subtitle: '',
  clickHandler: null,
};
