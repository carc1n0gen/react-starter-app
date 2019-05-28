import { connect } from 'react-redux'
import { getLocale } from '../../redux/selectors'
import LanguageProvider from './LanguageProvider'

const mapStateToProps = state => ({
  locale: getLocale(state)
})

export default connect(mapStateToProps)(LanguageProvider)
