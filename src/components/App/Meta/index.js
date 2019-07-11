import compose from 'compose-function';
import { injectIntl } from 'react-intl'
import { withRouter } from 'react-router-dom'

import Meta from './Meta'

export default compose(withRouter, injectIntl)(Meta)
