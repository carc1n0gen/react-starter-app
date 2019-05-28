import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import Navigation from './Navigation'
import { setLocale } from '../../redux/actions'

const mapDispatchToProps = {
  setLocale
}
  
export default compose(withRouter, injectIntl, connect(null, mapDispatchToProps))(Navigation)
