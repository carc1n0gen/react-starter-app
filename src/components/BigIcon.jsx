import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Glyphicon } from 'react-bootstrap'

const BigIconWrapper = styled.div`
  margin-bottom: 10px;
  display: block;
  text-align: center;
  font-size: 8em;
  color: #666;
`

export default function BigIcon({ icon }) { 
  return (
    <BigIconWrapper>
      <Glyphicon glyph={icon} />
    </BigIconWrapper>
  )
}

BigIcon.propTypes = {
  icon: PropTypes.string.isRequired
}
