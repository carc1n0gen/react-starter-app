import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'

import { getLocale } from 'store/selectors'
import App from './App';

const mapStateToProps = state => ({
  locale: getLocale(state)
})

export default connect(mapStateToProps)(App);
