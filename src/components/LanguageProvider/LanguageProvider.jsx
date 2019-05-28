import React from 'react'
import { IntlProvider} from 'react-intl' 
import en_US from '../../i18n/en_US.json'
import en_CA from '../../i18n/en_CA.json'

const messages = {
  'en-US': en_US,
  'en-CA': en_CA
}
const defaultLanguage = 'en-US'

export default ({locale, children}) => (
  <IntlProvider
    locale={locale || defaultLanguage}
    messages={messages[locale || defaultLanguage]}
  >
    {React.Children.only(children)}
  </IntlProvider>
)
