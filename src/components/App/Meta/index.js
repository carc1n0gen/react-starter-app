import React from 'react'
import { compose } from 'redux';
import { injectIntl } from 'react-intl'
import { withRouter } from 'react-router-dom'

import Meta from './Meta'

export default compose(withRouter, injectIntl)(Meta)
