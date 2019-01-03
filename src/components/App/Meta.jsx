import React from 'react'
import { injectIntl } from 'react-intl'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const defaultTitle = 'React Starter App'

export default withRouter(injectIntl(({location, intl}) => (
  <Helmet>
    <html lang={intl.locale} />
    <title>{((pathname) => {
      switch (pathname) {
        case '/about':
          return `About - ${defaultTitle}`
        case '/todos':
          return `Todos - ${defaultTitle}`
        default:
          return defaultTitle
      }
    })(location.pathname)}</title>
  </Helmet>
)))
