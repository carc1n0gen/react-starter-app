import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import { setLocale } from 'store/actions'
import Navigation from './Navigation'

const mapDispatchToProps = {
  setLocale
}
  
export default compose(withRouter, injectIntl, connect(null, mapDispatchToProps))(Navigation)
