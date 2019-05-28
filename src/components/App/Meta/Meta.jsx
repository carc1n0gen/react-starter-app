import React from 'react'
import { Helmet } from 'react-helmet'

const defaultTitle = 'React Starter App'

function buildTitle(pathname) {
  switch (pathname) {
    case '/about':
      return `About - ${defaultTitle}`
    case '/todos':
      return `Todos - ${defaultTitle}`
    default:
      return defaultTitle
  }
}

export default ({location, intl}) => (
  <Helmet>
    <html lang={intl.locale} />
    <title>{buildTitle(location.pathname)}</title>
  </Helmet>
)
