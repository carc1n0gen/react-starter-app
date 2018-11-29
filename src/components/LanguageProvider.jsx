import React, { Component } from 'react'
import { IntlProvider} from 'react-intl' 
import { connect } from 'react-redux'
import { getLocale } from '../redux/selectors'
import en_US from '../i18n/en_US.json'
import en_CA from '../i18n/en_CA.json'

const messages = {
  'en-US': en_US,
  'en-CA': en_CA
}
const defaultLanguage = 'en-US'
 
class LanguageProvider extends Component {
  render() {
    const { children, locale } = this.props
    return (
      <IntlProvider
        locale={locale || defaultLanguage}
        messages={messages[locale || defaultLanguage]}
      >
        {React.Children.only(children)}
      </IntlProvider>
    )
  }
}

const mapStateToProps = state => ({
  locale: getLocale(state)
})

export default connect(mapStateToProps)(LanguageProvider)