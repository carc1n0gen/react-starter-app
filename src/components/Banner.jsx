import React from 'react'
import PropTypes from 'prop-types'
import { Jumbotron, Button } from 'react-bootstrap'

const Banner = (props) => (
  <Jumbotron>
    <h1>{props.title}</h1>
    <p>
      {props.subtitle &&
        <span>{props.subtitle}</span>
      }
      &nbsp;
      {props.clickHandler &&
        <Button bsStyle="primary" onClick={props.clickHandler}>
          Click me
        </Button>
      }
    </p>
  </Jumbotron>
)

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  clickHandler: PropTypes.func
}

export default Banner
