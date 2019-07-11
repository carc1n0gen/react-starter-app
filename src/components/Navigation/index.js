import compose from 'compose-function'
import { withRouter } from 'react-router-dom'

import { withLocale } from 'components/Contexts/LocaleContext'
import Navigation from './Navigation'

export default compose(withRouter, withLocale)(Navigation)
